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
  imageUrl?: string
}

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [currency, setCurrency] = useState("USD")

  useEffect(() => {
    const stored = localStorage.getItem("travelResults")
    if (stored) {
      const parsed = JSON.parse(stored)
      if (parsed?.result) {
        setDestinations(parsed.result)
        if (parsed.currency) setCurrency(parsed.currency)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10 py-12">
      <div className="container px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Your Perfect Destinations
          </h1>
          <p className="text-lg text-muted-foreground font-serif max-w-3xl mx-auto">
            Based on your preferences, our AI has selected these amazing destinations that match your travel style,
            budget, and interests
          </p>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/plan-trip">Refine Preferences</Link>
            </Button>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-xl border-border/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={`https://source.unsplash.com/featured/800x600/?${encodeURIComponent(destination.name + " travel")}`}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground">AI Recommended</Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-sans">{destination.name}</CardTitle>
                    <CardDescription className="font-serif text-base mt-1">{destination.country}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground font-serif leading-relaxed">{destination.fitReason}</p>

                {/* Activities */}
                <div>
                  <h4 className="font-medium font-sans mb-3">Top Activities</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.activities.map((activity, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-accent/20 text-accent-foreground">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Estimated Cost & Visa */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium font-sans">Estimated Cost:</span>
                    <span className="text-sm text-muted-foreground font-serif">
                      {currency} {destination.estimatedCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium font-sans">Visa Requirement:</span>
                    <span className="text-sm text-muted-foreground font-serif">{destination.visaRequirement}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                    <Link href={`/itinerary?destination=${encodeURIComponent(destination.name)}`}>Build Itinerary</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <Link href={`/best-time?destination=${encodeURIComponent(destination.name)}`}>View Best Times</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 bg-card/50 rounded-2xl p-8 border border-border/50">
          <h2 className="text-2xl font-bold font-sans">Not seeing what you're looking for?</h2>
          <p className="text-muted-foreground font-serif max-w-2xl mx-auto">
            Our AI can find even more personalized recommendations based on your specific preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/plan-trip">Try Different Preferences</Link>
            </Button>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="/contact">Get Personal Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
