"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BestTimePage() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null)

  // Mock data - would be replaced with AI-generated recommendations
  const destination = {
    name: "Santorini, Greece",
    country: "Greece",
    visaRequired: false,
    safetyIndex: "Very Safe",
    currency: "Euro (EUR)",
    language: "Greek, English widely spoken",
  }

  const monthlyData = [
    {
      month: "January",
      status: "poor",
      weather: "Cool & Rainy",
      temperature: "50-60°F",
      cost: "Low",
      crowds: "Very Low",
      notes: "Many attractions closed, ferry schedules limited",
    },
    {
      month: "February",
      status: "poor",
      weather: "Cool & Windy",
      temperature: "52-62°F",
      cost: "Low",
      crowds: "Very Low",
      notes: "Still off-season, limited dining options",
    },
    {
      month: "March",
      status: "okay",
      weather: "Mild",
      temperature: "58-68°F",
      cost: "Low",
      crowds: "Low",
      notes: "Spring begins, some attractions reopen",
    },
    {
      month: "April",
      status: "good",
      weather: "Pleasant",
      temperature: "65-75°F",
      cost: "Medium",
      crowds: "Medium",
      notes: "Great weather begins, Easter celebrations",
    },
    {
      month: "May",
      status: "excellent",
      weather: "Warm & Sunny",
      temperature: "70-80°F",
      cost: "Medium",
      crowds: "Medium",
      notes: "Perfect weather, all attractions open",
    },
    {
      month: "June",
      status: "excellent",
      weather: "Hot & Sunny",
      temperature: "75-85°F",
      cost: "High",
      crowds: "High",
      notes: "Peak season begins, book accommodations early",
    },
    {
      month: "July",
      status: "okay",
      weather: "Very Hot",
      temperature: "80-90°F",
      cost: "Very High",
      crowds: "Very High",
      notes: "Hottest month, very crowded and expensive",
    },
    {
      month: "August",
      status: "okay",
      weather: "Very Hot",
      temperature: "80-90°F",
      cost: "Very High",
      crowds: "Very High",
      notes: "Peak tourist season, extremely busy",
    },
    {
      month: "September",
      status: "excellent",
      weather: "Warm & Pleasant",
      temperature: "75-85°F",
      cost: "High",
      crowds: "Medium-High",
      notes: "Ideal weather, fewer crowds than summer",
    },
    {
      month: "October",
      status: "good",
      weather: "Mild & Sunny",
      temperature: "68-78°F",
      cost: "Medium",
      crowds: "Medium",
      notes: "Great weather, shoulder season pricing",
    },
    {
      month: "November",
      status: "okay",
      weather: "Cool & Variable",
      temperature: "60-70°F",
      cost: "Low",
      crowds: "Low",
      notes: "Some attractions close, ferry schedules reduce",
    },
    {
      month: "December",
      status: "poor",
      weather: "Cool & Rainy",
      temperature: "55-65°F",
      cost: "Low",
      crowds: "Very Low",
      notes: "Off-season, limited services available",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-500 hover:bg-green-600 text-white"
      case "good":
        return "bg-green-400 hover:bg-green-500 text-white"
      case "okay":
        return "bg-yellow-400 hover:bg-yellow-500 text-white"
      case "poor":
        return "bg-red-400 hover:bg-red-500 text-white"
      default:
        return "bg-gray-400 hover:bg-gray-500 text-white"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "excellent":
        return "Excellent"
      case "good":
        return "Good"
      case "okay":
        return "Okay"
      case "poor":
        return "Poor"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10 py-12">
      <div className="container px-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Best Time to Visit
          </h1>
          <h2 className="text-2xl font-serif text-muted-foreground">{destination.name}</h2>
          <p className="text-lg text-muted-foreground font-serif max-w-3xl mx-auto">
            Our AI has analyzed weather patterns, costs, and crowd levels to help you choose the perfect time for your
            trip
          </p>
        </div>

        {/* Destination Info */}
        <Card className="mb-8 shadow-lg border-border/50">
          <CardHeader>
            <CardTitle className="font-sans">Travel Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium font-sans">Visa Requirements</h4>
                <Badge
                  className={destination.visaRequired ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}
                >
                  {destination.visaRequired ? "Visa Required" : "No Visa Required"}
                </Badge>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium font-sans">Safety Index</h4>
                <Badge className="bg-green-100 text-green-800">{destination.safetyIndex}</Badge>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium font-sans">Currency</h4>
                <p className="text-sm text-muted-foreground font-serif">{destination.currency}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium font-sans">Language</h4>
                <p className="text-sm text-muted-foreground font-serif">{destination.language}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {monthlyData.map((month) => (
            <Card
              key={month.month}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedMonth === month.month ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedMonth(selectedMonth === month.month ? null : month.month)}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-sans">{month.month}</CardTitle>
                  <Badge className={getStatusColor(month.status)}>{getStatusLabel(month.status)}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">Weather:</span>
                    <span className="text-muted-foreground">{month.weather}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Temp:</span>
                    <span className="text-muted-foreground">{month.temperature}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Cost:</span>
                    <span className="text-muted-foreground">{month.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Crowds:</span>
                    <span className="text-muted-foreground">{month.crowds}</span>
                  </div>
                </div>
                {selectedMonth === month.month && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground font-serif">{month.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <Card className="mb-8 shadow-lg border-border/50">
          <CardHeader>
            <CardTitle className="font-sans">Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm font-serif">Excellent - Best weather, good value</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded"></div>
                <span className="text-sm font-serif">Good - Great conditions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                <span className="text-sm font-serif">Okay - Acceptable conditions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-400 rounded"></div>
                <span className="text-sm font-serif">Poor - Challenging conditions</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold font-sans">Ready to plan your itinerary?</h3>
          <p className="text-muted-foreground font-serif">
            Choose your preferred travel month and let AI create a personalized day-by-day itinerary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/itinerary">Continue to Itinerary</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/destinations">Back to Destinations</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
