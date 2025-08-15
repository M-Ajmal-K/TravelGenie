import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Region-to-country mapping
const regionMap: Record<string, string[]> = {
  Africa: ["South Africa", "Kenya", "Morocco", "Egypt", "Tanzania", "Ghana", "Namibia"],
  Asia: ["Thailand", "Japan", "Vietnam", "Indonesia", "India", "Malaysia", "Philippines", "Nepal"],
  Europe: ["France", "Italy", "Germany", "Spain", "Greece", "Switzerland", "Netherlands", "Portugal"],
  "North America": ["USA", "Canada", "Mexico"],
  "South America": ["Brazil", "Argentina", "Peru", "Chile", "Colombia"],
  Oceania: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
  "Middle East": ["UAE", "Turkey", "Jordan", "Saudi Arabia", "Qatar", "Oman"],
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      budget,
      months,
      interests,
      region,
      travelStyle,
      citizenship,
      currency,
    } = body

    if (
      typeof budget !== "number" ||
      !Array.isArray(months) ||
      !Array.isArray(interests) ||
      typeof citizenship !== "string" ||
      typeof currency !== "string"
    ) {
      return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 })
    }

    // Convert budget to USD using exchangerate.host
    let convertedBudget = budget
    if (currency.toLowerCase() !== "usd") {
      try {
        const res = await fetch(`https://api.exchangerate.host/convert?from=${currency}&to=USD&amount=${budget}`)
        const data = await res.json()
        if (data?.result) {
          convertedBudget = data.result
        }
      } catch (err) {
        console.error("❌ Currency conversion failed. Using original budget.")
      }
    }

    // Region fallback
    const countriesInRegion = regionMap[region] || []

    const prompt = `
You are a smart travel planner. Based on the user's preferences, suggest 3 amazing travel destinations from the following countries only: ${countriesInRegion.join(", ")}.

Respond ONLY in valid JSON array format:

[
  {
    "name": "Destination Name",
    "country": "Country Name",
    "fitReason": "Why it's a great fit",
    "activities": ["Activity 1", "Activity 2"],
    "estimatedCost": 0,
    "visaRequirement": "Visa requirement for ${citizenship} citizens"
  }
]

User Preferences:
- Budget: $${convertedBudget} USD
- Preferred Travel Months: ${months.join(", ") || "Any"}
- Interests: ${interests.join(", ") || "Any"}
- Travel Style: ${travelStyle || "Any"}
- Citizenship: ${citizenship}
- Region: ${region}
`

    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI travel assistant that returns only clean, structured JSON output.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
    })

    const aiText = chatResponse.choices[0]?.message?.content?.trim() || ""

    let destinations
    try {
      destinations = JSON.parse(aiText)
      if (!Array.isArray(destinations)) {
        throw new Error("Parsed response is not an array")
      }
    } catch (err) {
      console.error("❌ JSON parse error from AI:", aiText)
      return NextResponse.json({ error: "AI response is not valid JSON" }, { status: 500 })
    }

    return NextResponse.json({
      currency,
      originalBudget: budget,
      convertedBudgetUSD: convertedBudget,
      result: destinations,
    })
  } catch (error) {
    console.error("❌ API Error:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
