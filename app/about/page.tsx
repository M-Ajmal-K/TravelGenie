"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const elements = [heroRef.current, statsRef.current, missionRef.current, featuresRef.current]
    elements.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-teal-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative px-4 py-16 md:py-24 overflow-hidden opacity-0 translate-y-8 transition-all duration-700"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sunset-orange rounded-full blur-xl"></div>
          <div className="absolute top-32 right-16 w-24 h-24 bg-sky-teal rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-palm-green rounded-full blur-2xl"></div>
        </div>

        {/* Travel Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-8 text-4xl animate-bounce" style={{ animationDelay: "0s" }}>
            ✈️
          </div>
          <div className="absolute top-40 left-8 text-3xl animate-bounce" style={{ animationDelay: "1s" }}>
            🧳
          </div>
          <div className="absolute bottom-32 right-16 text-3xl animate-bounce" style={{ animationDelay: "2s" }}>
            🧭
          </div>
          <div className="absolute bottom-20 left-12 text-4xl animate-bounce" style={{ animationDelay: "0.5s" }}>
            🗺️
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Planning a trip shouldn't feel <span className="text-sunset-orange">more exhausting</span> than the trip
            itself.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We're here to change that — with <span className="font-semibold text-sky-teal">AI-powered, effortless</span>{" "}
            travel planning.
          </p>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-gradient-to-r from-sunset-orange/20 to-sky-teal/20">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="px-4 py-16 bg-gradient-to-r from-sunset-orange/5 to-sky-teal/5 opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            The Travel Planning Problem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📊", stat: "16-18 hours", desc: "The average traveler spends just planning a trip" },
              { icon: "💭", stat: "3× more time", desc: "Google says we spend planning than traveling" },
              { icon: "😫", stat: "20% say", desc: "Planning is as frustrating as the DMV" },
              { icon: "💼", stat: "Millennials joke", desc: "It's worse than doing taxes" },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-md"
              >
                <div className="text-4xl mb-4 animate-pulse">{item.icon}</div>
                <div className="text-2xl font-bold text-sunset-orange mb-2">{item.stat}</div>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="px-4 py-16 opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why We Built TravelGenie.ai</h2>
          <div className="bg-gradient-to-r from-sky-teal/10 to-palm-green/10 rounded-3xl p-8 md:p-12">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We believe the joy of travel starts long before takeoff — with{" "}
              <span className="font-semibold text-sky-teal">curiosity and freedom</span>, not frustration. TravelGenie
              uses AI to replace stress with simplicity, giving you{" "}
              <span className="font-semibold text-sunset-orange">fast, smart, and joyful</span> travel planning.
            </p>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section
        ref={featuresRef}
        className="px-4 py-16 bg-gradient-to-br from-palm-green/5 to-ocean-blue/5 opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What We Solve</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌍",
                title: "Where to Go?",
                desc: "Based on budget, season, interests",
                gradient: "from-sunset-orange/20 to-sunset-orange/5",
              },
              {
                icon: "📅",
                title: "When to Travel?",
                desc: "Based on crowds, weather, flight prices",
                gradient: "from-sky-teal/20 to-sky-teal/5",
              },
              {
                icon: "🧳",
                title: "What to Do?",
                desc: "Personalized itinerary, AI-generated",
                gradient: "from-palm-green/20 to-palm-green/5",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-3 bg-gradient-to-br ${feature.gradient} border-0 shadow-lg group`}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-r from-ocean-blue/10 to-sky-teal/10 border-0 shadow-lg text-center">
            <div className="text-4xl mb-6">🤖✨</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
              "Travel planning isn't just logistics — it's emotional. That's why we trained our AI to think like a{" "}
              <span className="font-semibold text-ocean-blue">global travel expert</span> — not a robot."
            </blockquote>
          </Card>
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-sunset-orange/5 to-palm-green/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Built by a Solo Founder (For Real)</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-5xl mb-6">👨‍💻</div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              This isn't a corporate travel platform. It's crafted by{" "}
              <span className="font-semibold text-sunset-orange">one person</span> who was tired of spreadsheets and
              travel stress. Every update is made to help{" "}
              <span className="font-semibold text-sky-teal italic">you</span> explore more and stress less.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-sky-teal/10 via-sunset-orange/5 to-palm-green/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Let's make travel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange to-sky-teal">
              exciting again
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Ready to turn your travel dreams into reality? Start planning your next adventure with AI.
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sunset-orange to-sky-teal hover:from-sunset-orange/90 hover:to-sky-teal/90 text-white px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Start Planning ✈️
            </Button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  )
}
