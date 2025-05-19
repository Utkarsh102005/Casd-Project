import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  console.log("Report API called")

  try {
    // Log the request headers for debugging
    console.log("Request headers:", Object.fromEntries(request.headers.entries()))

    // Try to parse the form data
    const formData = await request.formData().catch((err) => {
      console.error("Error parsing form data:", err)
      return new FormData() // Return empty form data if parsing fails
    })

    // Log form data entries
    console.log("Form data keys:", [...formData.keys()])

    // Log specific form values
    const scamType = formData.get("scamType")
    const description = formData.get("description")
    const file = formData.get("file")

    console.log("Scam type:", scamType)
    console.log("Description:", description ? description.toString().substring(0, 50) + "..." : null)
    console.log(
      "File:",
      file ? (file instanceof File ? `${file.name} (${file.size} bytes)` : "Not a file object") : "No file",
    )

    // Always return success
    return NextResponse.json({
      success: true,
      message: "Debug: Report received",
      debug: {
        receivedScamType: !!scamType,
        receivedDescription: !!description,
        receivedFile: !!file,
      },
    })
  } catch (error) {
    // Log the full error
    console.error("Error in report API:", error)

    // Return detailed error information
    return NextResponse.json(
      {
        success: false,
        message: "Error processing report",
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : null,
      },
      { status: 500 },
    )
  }
}
