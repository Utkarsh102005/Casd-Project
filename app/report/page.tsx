"use client"

import { useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Upload, MapPin, Send, Loader2, Bug } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ReportPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [debugInfo, setDebugInfo] = useState(null)
  const [apiConnected, setApiConnected] = useState(null)
  const [formData, setFormData] = useState({
    scamType: "",
    description: "",
    contactInfo: "",
    attachFile: null,
    shareLocation: false,
    latitude: null,
    longitude: null,
  })

  // Test API connectivity on page load
  useEffect(() => {
    async function testApiConnection() {
      try {
        const response = await fetch("/api/test")
        const data = await response.json()
        setApiConnected(data.success)
        console.log("API test result:", data)
      } catch (error) {
        console.error("API test error:", error)
        setApiConnected(false)
      }
    }

    testApiConnection()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, scamType: value }))
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, attachFile: e.target.files[0] }))
      toast({
        title: "File Selected",
        description: `${e.target.files[0].name} (${Math.round(e.target.files[0].size / 1024)} KB)`,
      })
    }
  }

  const handleLocationToggle = (checked) => {
    setFormData((prev) => ({ ...prev, shareLocation: checked }))

    if (checked) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setFormData((prev) => ({
              ...prev,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }))
            toast({
              title: "Location Shared",
              description: "Your location has been added to the report.",
            })
          },
          (error) => {
            console.error("Error getting location:", error)
            toast({
              title: "Location Error",
              description: "Unable to get your location: " + error.message,
              variant: "destructive",
            })
          },
        )
      } else {
        toast({
          title: "Location Not Supported",
          description: "Geolocation is not supported by your browser.",
          variant: "destructive",
        })
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDebugInfo(null)

    // Validate form
    if (!formData.scamType) {
      toast({
        title: "Missing Information",
        description: "Please select a scam type.",
        variant: "destructive",
      })
      return
    }

    if (!formData.description) {
      toast({
        title: "Missing Information",
        description: "Please provide a description of the scam.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    setDebugInfo("Preparing form data...")

    try {
      // Create form data for submission
      const data = new FormData()
      data.append("scamType", formData.scamType)
      data.append("description", formData.description)

      if (formData.contactInfo) {
        data.append("contactInfo", formData.contactInfo)
      }

      if (formData.attachFile) {
        data.append("file", formData.attachFile)
      }

      if (formData.shareLocation && formData.latitude && formData.longitude) {
        data.append("latitude", formData.latitude.toString())
        data.append("longitude", formData.longitude.toString())
      }

      setDebugInfo("Sending request to /api/report...")

      // Submit to API
      const response = await fetch("/api/report", {
        method: "POST",
        body: data,
      })

      setDebugInfo("Received response, parsing JSON...")

      const result = await response.json()

      setDebugInfo("Response parsed: " + JSON.stringify(result))

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit report")
      }

      toast({
        title: "Report Submitted",
        description: "Thank you for helping keep others safe. Your report has been submitted successfully.",
      })

      // Redirect to thank you page
      router.push("/report/thank-you")
    } catch (error) {
      console.error("Error submitting report:", error)

      setDebugInfo("Error: " + (error.message || "Unknown error"))

      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your report. Please try again.",
        variant: "destructive",
      })

      // Fallback mechanism - if API fails, offer direct navigation
      toast({
        title: "Fallback Available",
        description: "Click the 'Continue Anyway' button below to proceed.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Fallback function to bypass API
  const handleFallbackSubmit = () => {
    toast({
      title: "Using Fallback",
      description: "Proceeding without API submission.",
    })
    router.push("/report/thank-you")
  }

  return (
    <div className="container max-w-4xl py-12">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Report a Scam</h1>
          <p className="text-gray-500 mt-2">
            Help protect others by reporting scams, fraud attempts, and suspicious activities.
          </p>

          {/* API Status Indicator */}
          <div className="mt-2 text-sm">
            API Status:{" "}
            {apiConnected === null ? (
              <span className="text-yellow-500">Checking...</span>
            ) : apiConnected ? (
              <span className="text-green-500">Connected</span>
            ) : (
              <span className="text-red-500">Disconnected</span>
            )}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Scam Report Form</CardTitle>
            <CardDescription>
              Please provide as much detail as possible to help us analyze and alert others.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="scamType">Type of Scam</Label>
                <Select onValueChange={handleSelectChange} value={formData.scamType}>
                  <SelectTrigger id="scamType">
                    <SelectValue placeholder="Select scam type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phishing">Phishing Email/Message</SelectItem>
                    <SelectItem value="vishing">Phone Call Scam (Vishing)</SelectItem>
                    <SelectItem value="smishing">SMS Scam (Smishing)</SelectItem>
                    <SelectItem value="impersonation">Impersonation/Fake Profile</SelectItem>
                    <SelectItem value="malware">Malware/Ransomware</SelectItem>
                    <SelectItem value="financial">Financial Fraud</SelectItem>
                    <SelectItem value="shopping">Online Shopping Scam</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe the scam in detail (what happened, how you were contacted, any suspicious links or phone numbers, etc.)"
                  rows={5}
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactInfo">Contact Information (Optional)</Label>
                <Input
                  id="contactInfo"
                  name="contactInfo"
                  placeholder="Your email or phone number (for follow-up if needed)"
                  value={formData.contactInfo}
                  onChange={handleInputChange}
                />
                <p className="text-xs text-gray-500">
                  We'll only use this to contact you if we need more information about your report.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Attach Evidence (Optional)</Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("file").click()}
                    className="w-full"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    {formData.attachFile ? formData.attachFile.name : "Choose File"}
                  </Button>
                  {formData.attachFile && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setFormData((prev) => ({ ...prev, attachFile: null }))}
                    >
                      Clear
                    </Button>
                  )}
                </div>
                <Input
                  id="file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*,.pdf,.doc,.docx,.txt,.eml"
                />
                <p className="text-xs text-gray-500">
                  Upload screenshots, emails, or other evidence (Max size: 10MB)
                  {formData.attachFile && (
                    <span className="block mt-1">
                      Selected: {formData.attachFile.name} ({Math.round(formData.attachFile.size / 1024)} KB)
                    </span>
                  )}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="shareLocation" checked={formData.shareLocation} onCheckedChange={handleLocationToggle} />
                <Label htmlFor="shareLocation" className="flex items-center cursor-pointer">
                  <MapPin className="mr-2 h-4 w-4" />
                  Share your location (helps track scam patterns in your area)
                </Label>
              </div>

              {/* Debug Information */}
              {debugInfo && (
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono overflow-auto max-h-40">
                  <div className="flex items-center mb-1">
                    <Bug className="h-3 w-3 mr-1" />
                    <span className="font-semibold">Debug Info:</span>
                  </div>
                  <pre>{typeof debugInfo === "string" ? debugInfo : JSON.stringify(debugInfo, null, 2)}</pre>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Submit Report
                  </>
                )}
              </Button>

              {/* Fallback button - only show after a failed submission attempt */}
              {debugInfo && debugInfo.includes("Error") && (
                <Button type="button" variant="outline" className="w-full" onClick={handleFallbackSubmit}>
                  Continue Anyway
                </Button>
              )}

              {/* Direct link as ultimate fallback */}
              {debugInfo && debugInfo.includes("Error") && (
                <div className="text-center text-xs text-gray-500 mt-2">
                  If buttons don't work,{" "}
                  <Link href="/report/thank-you" className="text-blue-500 hover:underline">
                    click here
                  </Link>{" "}
                  to continue.
                </div>
              )}
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
