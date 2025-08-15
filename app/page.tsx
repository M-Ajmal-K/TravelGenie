import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/20 py-20 md:py-32">
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-sans bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Let AI Plan Your Next Trip
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-serif max-w-2xl mx-auto">
                Discover perfect destinations, find the best time to travel, and get personalized itineraries powered by
                AI
              </p>
            </div>

            {/* Trip Discovery Search Bar */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium font-sans">Budget Range</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget ($500-1500)</SelectItem>
                      <SelectItem value="mid">Mid-range ($1500-3000)</SelectItem>
                      <SelectItem value="luxury">Luxury ($3000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium font-sans">Travel Month</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="When to travel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jan">January</SelectItem>
                      <SelectItem value="feb">February</SelectItem>
                      <SelectItem value="mar">March</SelectItem>
                      <SelectItem value="apr">April</SelectItem>
                      <SelectItem value="may">May</SelectItem>
                      <SelectItem value="jun">June</SelectItem>
                      <SelectItem value="jul">July</SelectItem>
                      <SelectItem value="aug">August</SelectItem>
                      <SelectItem value="sep">September</SelectItem>
                      <SelectItem value="oct">October</SelectItem>
                      <SelectItem value="nov">November</SelectItem>
                      <SelectItem value="dec">December</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium font-sans">Interests</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What you love" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nature">Nature & Wildlife</SelectItem>
                      <SelectItem value="beaches">Beaches & Islands</SelectItem>
                      <SelectItem value="culture">Culture & History</SelectItem>
                      <SelectItem value="food">Food & Cuisine</SelectItem>
                      <SelectItem value="adventure">Adventure Sports</SelectItem>
                      <SelectItem value="shopping">Shopping & Cities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90 text-lg py-6">
                <Link href="/plan-trip">Start Planning</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-sans">AI-Powered Travel Planning</h2>
              <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
                Our intelligent system analyzes millions of data points to create the perfect trip for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Smart Destination Finder */}
              <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="font-sans">Smart Destination Finder</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-serif text-center">
                    AI analyzes your preferences, budget, and travel style to recommend destinations you'll love,
                    including hidden gems you might never have considered.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Feature 2: Best Time to Travel */}
              <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <CardTitle className="font-sans">Best Time to Travel</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-serif text-center">
                    Get optimal timing recommendations based on weather patterns, crowd levels, prices, and local events
                    to maximize your travel experience.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Feature 3: AI-Powered Itinerary */}
              <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <CardTitle className="font-sans">AI-Powered Itinerary</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-serif text-center">
                    Receive detailed day-by-day plans with activities, restaurants, and experiences tailored to your
                    interests and optimized for efficiency.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">Ready for Your Next Adventure?</h2>
            <p className="text-lg text-muted-foreground font-serif">
              Join thousands of travelers who trust AI to plan their perfect trips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Link href="/plan-trip">Start Planning Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
