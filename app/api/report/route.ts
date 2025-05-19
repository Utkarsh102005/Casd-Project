import { type NextRequest, NextResponse } from "next/server"
import { isMongoAvailable, default as getMongoClient } from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function POST(request: NextRequest) {
  try {
    // Parse the form data
    const formData = await request.formData()

    const scamType = formData.get("scamType") as string
    const description = formData.get("description") as string
    const contactInfo = formData.get("contactInfo") as string
    const file = formData.get("file") as File | null
    const latitude = formData.get("latitude") as string | null
    const longitude = formData.get("longitude") as string | null

    // Validate required fields
    if (!scamType || !description) {
      return NextResponse.json(
        {
          success: false,
          message: "Scam type and description are required",
        },
        { status: 400 },
      )
    }

    // Create report object
    const report = {
      scamType,
      description,
      contactInfo: contactInfo || null,
      hasAttachment: !!file,
      fileName: file?.name || null,
      fileSize: file?.size || null,
      location:
        latitude && longitude
          ? {
              type: "Point",
              coordinates: [Number.parseFloat(longitude), Number.parseFloat(latitude)],
            }
          : null,
      reportedAt: new Date(),
      status: "pending", // pending, reviewed, actioned, closed
      ipAddress: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    }

    let reportId = `REP-${Date.now().toString().substring(8)}`

    // Only try to save to MongoDB if it's available
    if (isMongoAvailable()) {
      try {
        // Connect to MongoDB
        const client = await getMongoClient()
        const db = client.db()

        // Insert report
        const result = await db.collection("scamReports").insertOne(report)

        // If there's a file, you would typically:
        // 1. Upload to cloud storage (e.g., AWS S3, Vercel Blob)
        // 2. Store the reference in the database

        const mongoReportId = result.insertedId.toString()

        // Create a reference ID that's easier for users to remember
        reportId = `REP-${Date.now().toString().substring(8)}`

        // Update the document with the reference ID
        await db
          .collection("scamReports")
          .updateOne({ _id: new ObjectId(mongoReportId) }, { $set: { referenceId: reportId } })
      } catch (mongoError) {
        console.error("MongoDB error (continuing with fallback):", mongoError)
        // Continue with the fallback reportId if MongoDB fails
      }
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Scam report submitted successfully",
      reportId,
      savedToDatabase: isMongoAvailable(),
    })
  } catch (error) {
    console.error("Error processing scam report:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process scam report: " + (error instanceof Error ? error.message : "Unknown error"),
      },
      { status: 500 },
    )
  }
}
