import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body
    const body = await request.json()
    const url = body.url

    if (!url) {
      return NextResponse.json({ success: false, message: "URL is required" }, { status: 400 })
    }

    // Log the received URL (for debugging)
    console.log("Received URL for scanning:", url)

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Determine if the URL is "safe" based on a simple check
    // In a real app, you would integrate with Google Safe Browsing API or similar
    const isSafe = !url.includes("malware") && !url.includes("phishing")

    return NextResponse.json({
      success: true,
      safe: isSafe,
      threatType: isSafe ? null : "suspicious",
      message: isSafe
        ? "No threats detected. The URL appears to be safe."
        : "Potential threats detected. This URL may be unsafe to visit.",
      scanDate: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error scanning URL:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to scan URL: " + (error instanceof Error ? error.message : "Unknown error"),
      },
      { status: 500 },
    )
  }
}
