import { NextResponse } from "next/server"
import { isMongoAvailable, default as getMongoClient } from "@/lib/mongodb"

export async function GET() {
  try {
    // Check if MongoDB is available
    if (!isMongoAvailable()) {
      return NextResponse.json({
        success: false,
        message: "MongoDB is not configured. Please set up a valid MONGODB_URI environment variable.",
        reports: [],
      })
    }

    // Connect to MongoDB
    const client = await getMongoClient()
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
        message: "Failed to fetch reports: " + (error instanceof Error ? error.message : "Unknown error"),
        reports: [],
      },
      { status: 500 },
    )
  }
}
