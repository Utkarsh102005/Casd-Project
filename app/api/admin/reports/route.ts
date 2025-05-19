import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db()

    // Get all scam reports, sorted by most recent first
    const reports = await db
      .collection("scamReports")
      .find({})
      .sort({ reportedAt: -1 })
      .limit(100) // Limit to 100 reports for performance
      .toArray()

    return NextResponse.json({
      success: true,
      reports,
    })
  } catch (error) {
    console.error("Error fetching reports:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch reports",
      },
      { status: 500 },
    )
  }
}
