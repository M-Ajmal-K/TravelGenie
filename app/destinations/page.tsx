"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Destination {
  name: string
  country: string
  fitReason: string
  activities: string[]
  estimatedCost: number
  visaRequirement: string
}

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("travelResults")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setDestinations(parsed.result || parsed)
      } catch (err) {
        console.error("Failed to parse localStorage result:", err)
      }
    }
  }, [])

  const getCostColor = (cost: number) => {
    if (cost < 1000) return "bg-green-100 text-green-800"
    if (cost < 2500) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10 py-12">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Your Perfect Destinations
          </h1>
          <p className="text-lg text-muted-foreground font-serif max-w-3xl mx-auto">
            Based on your preferences, here are our personalized recommendations
          </p>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/plan-trip">Refine Preferences</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {destinations.map((dest, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-xl border-border/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-sans">{dest.name}</CardTitle>
                <CardDescription className="font-serif">{dest.country}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-muted-foreground font-serif">{dest.fitReason}</p>

                <div>
                  <h4 className="font-medium font-sans">Top Activities</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {dest.activities.map((a, i) => (
                      <Badge key={i} variant="secondary" className="bg-accent/20 text-accent-foreground">
                        {a}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <span className="font-medium font-sans">Estimated Cost:</span>{" "}
                    <Badge className={getCostColor(dest.estimatedCost)}>${dest.estimatedCost}</Badge>
                  </div>
                  <div>
                    <span className="font-medium font-sans">Visa Info:</span>{" "}
                    <span className="text-muted-foreground font-serif">{dest.visaRequirement}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                    <Link href={`/itinerary?destination=${index + 1}`}>Build Itinerary</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <Link href={`/best-time?destination=${index + 1}`}>View Best Times</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
