"use client"

import { useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, FileText, Clock, User, MapPin } from "lucide-react"

export default function DashboardPage() {
  const { toast } = useToast()
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetch("/api/admin/reports")
        if (!response.ok) {
          throw new Error("Failed to fetch reports")
        }

        const data = await response.json()
        setReports(data.reports || [])
      } catch (error) {
        console.error("Error fetching reports:", error)
        toast({
          title: "Error",
          description: "Failed to load reports. Please try again later.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchReports()
  }, [toast])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "default"
      case "reviewed":
        return "secondary"
      case "actioned":
        return "success"
      case "closed":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500 mt-2">View and manage scam reports</p>
        </div>

        <Tabs defaultValue="reports">
          <TabsList>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>
          <TabsContent value="reports" className="mt-6">
            <div className="grid gap-4">
              {loading ? (
                <p>Loading reports...</p>
              ) : reports.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-8">
                    <FileText className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium">No Reports Found</h3>
                    <p className="text-gray-500 text-center mt-2">There are currently no scam reports in the system.</p>
                  </CardContent>
                </Card>
              ) : (
                reports.map((report) => (
                  <Card key={report._id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <CardTitle className="flex items-center">
                            <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                            {report.scamType.charAt(0).toUpperCase() + report.scamType.slice(1)} Scam Report
                          </CardTitle>
                          <CardDescription className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {formatDate(report.reportedAt)}
                            {report.referenceId && (
                              <>
                                <span className="mx-2">•</span>
                                <span>ID: {report.referenceId}</span>
                              </>
                            )}
                          </CardDescription>
                        </div>
                        <Badge variant={getStatusColor(report.status)}>
                          {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">{report.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-500">
                        {report.contactInfo && (
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            Contact: {report.contactInfo}
                          </div>
                        )}
                        {report.location && (
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            Location: {report.location.coordinates[1].toFixed(4)},{" "}
                            {report.location.coordinates[0].toFixed(4)}
                          </div>
                        )}
                        {report.hasAttachment && (
                          <div className="flex items-center">
                            <FileText className="h-3 w-3 mr-1" />
                            File: {report.fileName} ({Math.round(report.fileSize / 1024)} KB)
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
          <TabsContent value="stats" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Report Statistics</CardTitle>
                <CardDescription>Overview of scam reports and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">{reports.length}</div>
                    <div className="text-sm text-muted-foreground">Total Reports</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">{reports.filter((r) => r.status === "pending").length}</div>
                    <div className="text-sm text-muted-foreground">Pending</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">
                      {reports.filter((r) => r.status === "reviewed" || r.status === "actioned").length}
                    </div>
                    <div className="text-sm text-muted-foreground">Reviewed</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">{reports.filter((r) => r.hasAttachment).length}</div>
                    <div className="text-sm text-muted-foreground">With Evidence</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
