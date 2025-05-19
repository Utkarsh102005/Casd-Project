"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export default function AlertMap({ alerts, userLocation }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "red"
      case "medium":
        return "yellow"
      case "low":
        return "green"
      default:
        return "gray"
    }
  }

  useEffect(() => {
    // Initialize map if it doesn't exist
    if (!mapInstanceRef.current) {
      // Default to India center if no user location
      const defaultCenter = userLocation || { lat: 20.5937, lng: 78.9629 }

      mapInstanceRef.current = L.map(mapRef.current).setView([defaultCenter.lat, defaultCenter.lng], 5)

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstanceRef.current)
    }

    // Add user location marker if available
    if (userLocation) {
      const userIcon = L.divIcon({
        html: `<div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>`,
        className: "user-location-marker",
        iconSize: [20, 20],
      })

      L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
        .addTo(mapInstanceRef.current)
        .bindPopup("Your Location")
    }

    // Add alert markers
    if (alerts && alerts.length > 0) {
      alerts.forEach((alert) => {
        if (alert.location && alert.location.lat && alert.location.lng) {
          const severityColor = getSeverityColor(alert.severity)

          const alertIcon = L.divIcon({
            html: `<div class="w-4 h-4 bg-${severityColor}-500 rounded-full border-2 border-white pulse-animation"></div>`,
            className: "alert-marker",
            iconSize: [20, 20],
          })

          L.marker([alert.location.lat, alert.location.lng], { icon: alertIcon })
            .addTo(mapInstanceRef.current)
            .bindPopup(`
              <div class="p-2">
                <h3 class="font-bold">${alert.title}</h3>
                <p class="text-sm">${alert.description}</p>
                <div class="text-xs mt-2">
                  <span class="font-semibold">Type:</span> ${alert.type}
                </div>
                <div class="text-xs">
                  <span class="font-semibold">Severity:</span> ${alert.severity}
                </div>
                <div class="text-xs">
                  <span class="font-semibold">Date:</span> ${new Date(alert.date).toLocaleDateString()}
                </div>
              </div>
            `)
        }
      })
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        // Just clear markers, don't destroy the map
        const layers = mapInstanceRef.current.eachLayer
        if (layers) {
          mapInstanceRef.current.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
              mapInstanceRef.current.removeLayer(layer)
            }
          })
        }
      }
    }
  }, [alerts, userLocation])

  return <div ref={mapRef} className="h-full w-full" />
}
