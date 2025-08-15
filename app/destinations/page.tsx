"use client"

import { useEffect, useState } from "react"

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
    <div className="min-h-screen py-12 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Your AI-Picked Destinations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((dest, i) => (
          <div key={i} className="rounded-xl shadow-lg border overflow-hidden bg-white">
            <img
              src={`https://source.unsplash.com/400x300/?${encodeURIComponent(dest.name)}`}
              alt={dest.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{dest.name}, {dest.country}</h2>
              <p className="text-sm text-muted-foreground">{dest.fitReason}</p>
              <div className="mt-2">
                <h3 className="font-medium">Activities:</h3>
                <ul className="list-disc list-inside text-sm">
                  {dest.activities.map((a, idx) => <li key={idx}>{a}</li>)}
                </ul>
              </div>
              <p className="text-sm font-semibold mt-2">
                Estimated Cost: {currency} {dest.estimatedCost.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">Visa: {dest.visaRequirement}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
