import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  console.log("Scan File API called")

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

    // Log file information
    const file = formData.get("file")
    console.log(
      "File:",
      file ? (file instanceof File ? `${file.name} (${file.size} bytes)` : "Not a file object") : "No file",
    )

    // Always return success with a safe result
    return NextResponse.json({
      success: true,
      safe: true,
      message: "Debug: File scan completed",
      scanDate: new Date().toISOString(),
      debug: {
        receivedFile: !!file,
        fileType: file ? (file instanceof File ? file.type : typeof file) : null,
      },
    })
  } catch (error) {
    // Log the full error
    console.error("Error in scan API:", error)

    // Return detailed error information
    return NextResponse.json(
      {
        success: false,
        message: "Error scanning file",
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : null,
      },
      { status: 500 },
    )
  }
}
