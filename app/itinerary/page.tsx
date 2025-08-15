import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ItineraryPage() {
  // Mock data - would be replaced with AI-generated itinerary
  const tripDetails = {
    destination: "Santorini, Greece",
    duration: "7 days",
    dates: "May 15-22, 2024",
    travelers: "2 adults",
    style: "Romantic & Relaxing",
  }

  const itinerary = [
    {
      day: 1,
      title: "Arrival & Oia Exploration",
      weather: "sunny",
      activities: [
        {
          time: "Morning",
          activity: "Airport Transfer & Hotel Check-in",
          description: "Private transfer from Santorini Airport to your hotel in Oia. Check-in and freshen up.",
          duration: "2 hours",
          type: "transfer",
        },
        {
          time: "Afternoon",
          activity: "Oia Village Walking Tour",
          description:
            "Explore the iconic blue-domed churches and white-washed buildings. Visit local art galleries and shops.",
          duration: "3 hours",
          type: "sightseeing",
        },
        {
          time: "Evening",
          activity: "Sunset Dinner at Ambrosia",
          description: "World-famous sunset views with fine dining. Reservation recommended.",
          duration: "2 hours",
          type: "dining",
        },
      ],
    },
    {
      day: 2,
      title: "Wine Tasting & Beach Day",
      weather: "sunny",
      activities: [
        {
          time: "Morning",
          activity: "Santo Wines Winery Tour",
          description: "Learn about volcanic soil wine production with tastings of local Assyrtiko wines.",
          duration: "3 hours",
          type: "experience",
        },
        {
          time: "Afternoon",
          activity: "Red Beach & Akrotiri",
          description: "Visit the famous Red Beach and explore the ancient Minoan city of Akrotiri.",
          duration: "4 hours",
          type: "sightseeing",
        },
        {
          time: "Evening",
          activity: "Dinner in Fira",
          description: "Traditional Greek taverna experience in the capital with caldera views.",
          duration: "2 hours",
          type: "dining",
        },
      ],
    },
    {
      day: 3,
      title: "Sailing & Hot Springs",
      weather: "sunny",
      activities: [
        {
          time: "Morning",
          activity: "Catamaran Sailing Tour",
          description: "Full-day sailing around the caldera with stops at volcanic islands and hot springs.",
          duration: "8 hours",
          type: "adventure",
        },
        {
          time: "Evening",
          activity: "BBQ Dinner on Board",
          description: "Fresh seafood BBQ dinner included in sailing tour with sunset views.",
          duration: "2 hours",
          type: "dining",
        },
      ],
    },
    {
      day: 4,
      title: "Cultural Immersion",
      weather: "partly-cloudy",
      activities: [
        {
          time: "Morning",
          activity: "Pyrgos Village & Monastery",
          description: "Visit traditional Pyrgos village and the historic Profitis Ilias Monastery.",
          duration: "3 hours",
          type: "culture",
        },
        {
          time: "Afternoon",
          activity: "Cooking Class Experience",
          description: "Learn to prepare traditional Greek dishes with a local family.",
          duration: "4 hours",
          type: "experience",
        },
        {
          time: "Evening",
          activity: "Free Time",
          description: "Relax at your hotel or explore local nightlife in Fira.",
          duration: "Open",
          type: "leisure",
        },
      ],
    },
    {
      day: 5,
      title: "Beach & Relaxation",
      weather: "sunny",
      activities: [
        {
          time: "Morning",
          activity: "Perissa Black Beach",
          description: "Relax on the famous black volcanic sand beach with water sports options.",
          duration: "4 hours",
          type: "beach",
        },
        {
          time: "Afternoon",
          activity: "Spa Treatment",
          description: "Couples massage and spa treatments at your hotel or local spa.",
          duration: "2 hours",
          type: "wellness",
        },
        {
          time: "Evening",
          activity: "Romantic Dinner",
          description: "Private dinner setup with caldera views at Canaves Oia Suites.",
          duration: "3 hours",
          type: "dining",
        },
      ],
    },
    {
      day: 6,
      title: "Adventure & Shopping",
      weather: "sunny",
      activities: [
        {
          time: "Morning",
          activity: "Hiking Fira to Oia",
          description: "Scenic 6-mile hike along the caldera rim with breathtaking views.",
          duration: "4 hours",
          type: "adventure",
        },
        {
          time: "Afternoon",
          activity: "Shopping in Oia",
          description: "Browse local boutiques for jewelry, art, and souvenirs.",
          duration: "2 hours",
          type: "shopping",
        },
        {
          time: "Evening",
          activity: "Farewell Dinner",
          description: "Final dinner at Selene Restaurant, known for modern Greek cuisine.",
          duration: "3 hours",
          type: "dining",
        },
      ],
    },
    {
      day: 7,
      title: "Departure",
      weather: "sunny",
      activities: [
        {
          time: "Morning",
          activity: "Hotel Check-out",
          description: "Late check-out and final moments enjoying hotel amenities.",
          duration: "2 hours",
          type: "leisure",
        },
        {
          time: "Afternoon",
          activity: "Airport Transfer",
          description: "Private transfer to Santorini Airport for departure.",
          duration: "1 hour",
          type: "transfer",
        },
      ],
    },
  ]

  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case "sunny":
        return "☀️"
      case "partly-cloudy":
        return "⛅"
      case "cloudy":
        return "☁️"
      case "rainy":
        return "🌧️"
      default:
        return "☀️"
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "sightseeing":
        return "🏛️"
      case "dining":
        return "🍽️"
      case "adventure":
        return "⛵"
      case "culture":
        return "🎭"
      case "experience":
        return "🍷"
      case "beach":
        return "🏖️"
      case "wellness":
        return "💆"
      case "shopping":
        return "🛍️"
      case "transfer":
        return "🚗"
      case "leisure":
        return "🏨"
      default:
        return "📍"
    }
  }

  const getTimeColor = (time: string) => {
    switch (time) {
      case "Morning":
        return "bg-yellow-100 text-yellow-800"
      case "Afternoon":
        return "bg-blue-100 text-blue-800"
      case "Evening":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10 py-12">
      <div className="container px-4 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Your AI-Generated Itinerary
          </h1>
          <div className="space-y-2">
            <h2 className="text-2xl font-serif text-muted-foreground">{tripDetails.destination}</h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>{tripDetails.duration}</span>
              <span>•</span>
              <span>{tripDetails.dates}</span>
              <span>•</span>
              <span>{tripDetails.travelers}</span>
              <span>•</span>
              <span>{tripDetails.style}</span>
            </div>
          </div>
        </div>

        {/* Itinerary Days */}
        <div className="space-y-8 mb-12">
          {itinerary.map((day) => (
            <Card key={day.day} className="shadow-lg border-border/50 overflow-hidden">
              <CardHeader className="bg-muted/30">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl font-sans">
                      Day {day.day}: {day.title}
                    </CardTitle>
                    <CardDescription className="font-serif mt-1">
                      {day.activities.length} activities planned
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl mb-1">{getWeatherIcon(day.weather)}</div>
                    <Badge variant="outline" className="text-xs">
                      {day.weather}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                {day.activities.map((activity, index) => (
                  <div
                    key={index}
                    className={`p-6 ${index !== day.activities.length - 1 ? "border-b border-border/30" : ""}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h4 className="font-semibold font-sans text-lg">{activity.activity}</h4>
                          <div className="flex gap-2">
                            <Badge className={getTimeColor(activity.time)}>{activity.time}</Badge>
                            <Badge variant="outline" className="text-xs">
                              {activity.duration}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground font-serif leading-relaxed">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <Card className="shadow-lg border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="font-sans">Ready to Book Your Trip?</CardTitle>
            <CardDescription className="font-serif">
              Use these options to turn your itinerary into reality
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="bg-primary hover:bg-primary/90 h-auto py-4 flex flex-col items-center space-y-2">
                <span className="text-lg">🏨</span>
                <span>Book Hotels</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center space-y-2 bg-transparent">
                <span className="text-lg">🎯</span>
                <span>Book Tours</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center space-y-2 bg-transparent">
                <span className="text-lg">📧</span>
                <span>Email Trip</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center space-y-2 bg-transparent">
                <span className="text-lg">📄</span>
                <span>Download PDF</span>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button asChild variant="outline" size="lg">
                <Link href="/destinations">Choose Different Destination</Link>
              </Button>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link href="/">Start Over</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
