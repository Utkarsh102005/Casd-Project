"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Bell, AlertTriangle, Calendar } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import dynamic from "next/dynamic"

// Dynamically import the map component to avoid SSR issues
const AlertMap = dynamic(() => import("@/components/alert-map"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-md"></div>,
})

export default function AlertsPage() {
  const { toast } = useToast()
  const [alerts, setAlerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredAlerts, setFilteredAlerts] = useState([])
  const [userLocation, setUserLocation] = useState(null)

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          console.error("Error getting location:", error)
        },
      )
    }

    // Fetch alerts from API
    const fetchAlerts = async () => {
      try {
        const response = await fetch("/api/alerts")
        if (!response.ok) {
          throw new Error("Failed to fetch alerts")
        }

        const data = await response.json()
        setAlerts(data.alerts)
        setFilteredAlerts(data.alerts)
      } catch (error) {
        console.error("Error fetching alerts:", error)
        toast({
          title: "Error",
          description: "Failed to load alerts. Please try again later.",
          variant: "destructive",
        })

        // Use sample data for demo
        const sampleAlerts = [
          {
            id: "1",
            title: "Banking Phishing Campaign",
            description: "Fraudulent emails claiming to be from major banks asking to verify account details.",
            type: "phishing",
            severity: "high",
            location: { lat: 28.6139, lng: 77.209 }, // New Delhi
            date: "2023-05-15T10:30:00Z",
            affectedUsers: 230,
          },
          {
            id: "2",
            title: "Fake COVID Relief SMS",
            description: "SMS messages offering COVID relief funds with malicious links.",
            type: "smishing",
            severity: "medium",
            location: { lat: 19.076, lng: 72.8777 }, // Mumbai
            date: "2023-05-14T08:15:00Z",
            affectedUsers: 145,
          },
          {
            id: "3",
            title: "Tech Support Scam Calls",
            description: "Callers impersonating tech support from Microsoft reporting fake virus infections.",
            type: "vishing",
            severity: "medium",
            location: { lat: 12.9716, lng: 77.5946 }, // Bangalore
            date: "2023-05-13T14:45:00Z",
            affectedUsers: 87,
          },
          {
            id: "4",
            title: "Government Impersonation Scam",
            description: "Emails claiming to be from tax authorities demanding immediate payment.",
            type: "phishing",
            severity: "high",
            location: { lat: 22.5726, lng: 88.3639 }, // Kolkata
            date: "2023-05-12T11:20:00Z",
            affectedUsers: 192,
          },
          {
            id: "5",
            title: "Fake Job Offer Campaign",
            description: "Fraudulent job offers requiring payment for training or background checks.",
            type: "scam",
            severity: "medium",
            location: { lat: 17.385, lng: 78.4867 }, // Hyderabad
            date: "2023-05-11T09:10:00Z",
            affectedUsers: 118,
          },
        ]

        setAlerts(sampleAlerts)
        setFilteredAlerts(sampleAlerts)
      } finally {
        setLoading(false)
      }
    }

    fetchAlerts()
  }, [toast])

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    if (query.trim() === "") {
      setFilteredAlerts(alerts)
    } else {
      const filtered = alerts.filter(
        (alert) =>
          alert.title.toLowerCase().includes(query) ||
          alert.description.toLowerCase().includes(query) ||
          alert.type.toLowerCase().includes(query),
      )
      setFilteredAlerts(filtered)
    }
  }

  const handleSubscribe = () => {
    toast({
      title: "Subscribed to Alerts",
      description: "You will now receive notifications for new scam alerts in your area.",
    })
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "destructive"
      case "medium":
        return "warning"
      case "low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "phishing":
        return "🎣"
      case "smishing":
        return "📱"
      case "vishing":
        return "📞"
      case "malware":
        return "🦠"
      case "scam":
        return "💸"
      default:
        return "⚠️"
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Scam Alerts</h1>
            <p className="text-gray-500 mt-2">Stay informed about active scams and threats in your area.</p>
          </div>
          <Button onClick={handleSubscribe} className="md:w-auto w-full">
            <Bell className="mr-2 h-4 w-4" /> Subscribe to Alerts
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search alerts by keyword, type, or location..."
            className="pl-10"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <Tabs defaultValue="map">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          <TabsContent value="map" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Scam Alert Map</CardTitle>
                <CardDescription>Visualize scam reports and threats in your region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px] w-full rounded-md overflow-hidden">
                  <AlertMap alerts={filteredAlerts} userLocation={userLocation} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="list" className="mt-4">
            <div className="grid gap-4">
              {loading ? (
                Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader>
                        <div className="h-5 w-2/3 bg-gray-200 rounded"></div>
                        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 w-full bg-gray-200 rounded"></div>
                      </CardContent>
                    </Card>
                  ))
              ) : filteredAlerts.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-8">
                    <AlertTriangle className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium">No Alerts Found</h3>
                    <p className="text-gray-500 text-center mt-2">
                      {searchQuery
                        ? "No alerts match your search criteria. Try a different search term."
                        : "There are currently no active alerts in your area."}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                filteredAlerts.map((alert) => (
                  <Card key={alert.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <CardTitle className="flex items-center">
                            <span className="mr-2">{getTypeIcon(alert.type)}</span>
                            {alert.title}
                          </CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {alert.location ? "Near your location" : "Location unknown"}
                            <span className="mx-2">•</span>
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(alert.date)}
                          </CardDescription>
                        </div>
                        <Badge variant={getSeverityColor(alert.severity)}>
                          {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)} Risk
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{alert.description}</p>
                      <div className="flex items-center mt-4 text-xs text-gray-500">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {alert.affectedUsers} users affected
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
