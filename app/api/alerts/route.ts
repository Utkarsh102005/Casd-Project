import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db()

    // Get the most recent scam reports that have been reviewed
    // Limit to 20 reports and exclude sensitive information
    const reports = await db
      .collection("scamReports")
      .find({ status: { $in: ["reviewed", "actioned"] } })
      .sort({ reportedAt: -1 })
      .limit(20)
      .project({
        scamType: 1,
        description: 1,
        location: 1,
        reportedAt: 1,
        referenceId: 1,
      })
      .toArray()

    // Transform the data for the frontend
    const alerts = reports.map((report) => {
      // Format the data for the frontend
      return {
        id: report.referenceId || report._id.toString(),
        title: getScamTypeTitle(report.scamType),
        description:
          report.description.length > 200 ? report.description.substring(0, 200) + "..." : report.description,
        type: report.scamType,
        severity: getScamSeverity(report.scamType),
        location: report.location
          ? {
              lat: report.location.coordinates[1],
              lng: report.location.coordinates[0],
            }
          : null,
        date: report.reportedAt,
        affectedUsers: Math.floor(Math.random() * 200) + 1, // Placeholder for now
      }
    })

    // If no reports are found, return sample data
    if (alerts.length === 0) {
      return NextResponse.json({
        alerts: getSampleAlerts(),
      })
    }

    return NextResponse.json({
      alerts,
    })
  } catch (error) {
    console.error("Error fetching alerts:", error)

    // Return sample data in case of error
    return NextResponse.json({
      alerts: getSampleAlerts(),
    })
  }
}

// Helper function to get a title based on scam type
function getScamTypeTitle(scamType) {
  const titles = {
    phishing: "Phishing Campaign Detected",
    vishing: "Voice Phishing Scam",
    smishing: "SMS Phishing Attempt",
    impersonation: "Account Impersonation Scam",
    malware: "Malware Distribution Detected",
    financial: "Financial Fraud Attempt",
    shopping: "Online Shopping Scam",
    other: "Suspicious Activity Reported",
  }

  return titles[scamType] || "Scam Alert"
}

// Helper function to determine severity based on scam type
function getScamSeverity(scamType) {
  const severities = {
    phishing: "high",
    vishing: "medium",
    smishing: "medium",
    impersonation: "medium",
    malware: "high",
    financial: "high",
    shopping: "medium",
    other: "medium",
  }

  return severities[scamType] || "medium"
}

// Sample data for when no reports are available
function getSampleAlerts() {
  return [
    {
      id: "1",
      title: "Banking Phishing Campaign",
      description: "Fraudulent emails claiming to be from major banks asking to verify account details.",
      type: "phishing",
      severity: "high",
      location: { lat: 28.6139, lng: 77.209 }, // New Delhi
      date: new Date().toISOString(),
      affectedUsers: 230,
    },
    {
      id: "2",
      title: "Fake COVID Relief SMS",
      description: "SMS messages offering COVID relief funds with malicious links.",
      type: "smishing",
      severity: "medium",
      location: { lat: 19.076, lng: 72.8777 }, // Mumbai
      date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      affectedUsers: 145,
    },
    {
      id: "3",
      title: "Tech Support Scam Calls",
      description: "Callers impersonating tech support from Microsoft reporting fake virus infections.",
      type: "vishing",
      severity: "medium",
      location: { lat: 12.9716, lng: 77.5946 }, // Bangalore
      date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      affectedUsers: 87,
    },
    {
      id: "4",
      title: "Government Impersonation Scam",
      description: "Emails claiming to be from tax authorities demanding immediate payment.",
      type: "phishing",
      severity: "high",
      location: { lat: 22.5726, lng: 88.3639 }, // Kolkata
      date: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
      affectedUsers: 192,
    },
    {
      id: "5",
      title: "Fake Job Offer Campaign",
      description: "Fraudulent job offers requiring payment for training or background checks.",
      type: "scam",
      severity: "medium",
      location: { lat: 17.385, lng: 78.4867 }, // Hyderabad
      date: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
      affectedUsers: 118,
    },
  ]
}
