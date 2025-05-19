import { NextResponse } from "next/server"

export async function GET() {
  // Simple test endpoint to verify API connectivity
  console.log("Test API endpoint called")
  return NextResponse.json({ success: true, message: "API is working" })
}
