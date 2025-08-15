"use client";

import { useState } from "react";
import Link from "next/link";
import { getNames } from "country-list";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

export default function PlanTripPage() {
  const countries = getNames().sort();

  const [budget, setBudget] = useState([2000]);
  const [currency, setCurrency] = useState("USD");
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [destinationCountry, setDestinationCountry] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [travelStyle, setTravelStyle] = useState("");
  const [openCitizenship, setOpenCitizenship] = useState(false);
  const [openDestination, setOpenDestination] = useState(false);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const interests = [
    { id: "nature", label: "Nature & Wildlife" },
    { id: "beaches", label: "Beaches & Islands" },
    { id: "culture", label: "Culture & Museums" },
    { id: "food", label: "Food & Cuisine" },
    { id: "shopping", label: "Shopping & Cities" },
    { id: "adventure", label: "Adventure Sports" },
    { id: "history", label: "History & Architecture" },
  ];

  const travelStyles = [
    { value: "luxury", label: "Luxury", description: "Premium accommodations and experiences" },
    { value: "budget", label: "Budget", description: "Cost-effective travel with great value" },
    { value: "adventure", label: "Adventure", description: "Outdoor activities and exploration" },
    { value: "family", label: "Family", description: "Kid-friendly activities and accommodations" },
    { value: "solo", label: "Solo", description: "Perfect for independent travelers" },
    { value: "relaxing", label: "Relaxing", description: "Peaceful and rejuvenating experiences" },
  ];

  const handleMonthToggle = (month: string) => {
    setSelectedMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId) ? prev.filter((i) => i !== interestId) : [...prev, interestId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      budget: budget[0],
      currency,
      months: selectedMonths,
      interests: selectedInterests,
      destinationCountry,
      citizenship,
      travelStyle,
    };

    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      localStorage.setItem("travelResults", JSON.stringify(result));
      window.location.href = "/destinations";
    } catch (error) {
      console.error("Failed to plan trip", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10 py-12">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-sans bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Plan Your Perfect Trip
          </h1>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            Tell us about your travel preferences and let AI find the perfect destinations for you
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="shadow-2xl border-border/50">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-sans">Trip Preferences</CardTitle>
              <CardDescription className="font-serif">
                Fill out your travel details to get personalized recommendations
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Budget */}
              <div className="space-y-4">
                <Label className="text-lg font-medium font-sans">Budget Range</Label>
                <div className="flex items-center gap-4">
                  <Slider value={budget} onValueChange={setBudget} max={10000} min={500} step={100} className="w-full" />
                  <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="border rounded px-2 py-1">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="AUD">AUD</option>
                    <option value="FJD">FJD</option>
                    <option value="INR">INR</option>
                    <option value="SGD">SGD</option>
                  </select>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{currency} 500</span>
                  <span className="font-medium text-primary">
                    {currency} {budget[0].toLocaleString()}
                  </span>
                  <span>{currency} 10,000+</span>
                </div>
              </div>

              {/* Months */}
              <div className="space-y-4">
                <Label className="text-lg font-medium font-sans">Preferred Travel Months</Label>
                <p className="text-sm text-muted-foreground font-serif">
                  Select one or more months when you'd like to travel
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {months.map((month) => (
                    <div key={month} className="flex items-center space-x-2">
                      <Checkbox
                        id={month}
                        checked={selectedMonths.includes(month)}
                        onCheckedChange={() => handleMonthToggle(month)}
                      />
                      <Label htmlFor={month} className="text-sm font-serif cursor-pointer">
                        {month}
                      </Label>
                    </div>
                  ))}
                </div>
                {selectedMonths.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedMonths.map((month) => (
                      <Badge key={month} variant="secondary" className="bg-primary/10 text-primary">
                        {month}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Destination Country */}
              <div className="space-y-4">
                <Label className="text-lg font-medium font-sans">Destination Country</Label>
                <Popover open={openDestination} onOpenChange={setOpenDestination}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" className="w-full justify-between">
                      {destinationCountry || "Select destination country"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0 max-h-60 overflow-y-auto">
                    <Command>
                      <CommandInput placeholder="Search country..." />
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countries.map((country) => (
                          <CommandItem
                            key={country}
                            value={country}
                            onSelect={(value) => {
                              setDestinationCountry(value);
                              setOpenDestination(false);
                            }}
                          >
                            {country}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Travel Style */}
              <div className="space-y-4">
                <Label className="text-lg font-medium font-sans">Travel Style</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {travelStyles.map((style) => (
                    <Card
                      key={style.value}
                      className="cursor-pointer hover:shadow-md transition-all border-border/50 hover:border-primary/50"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="travelStyle"
                            value={style.value}
                            className="w-4 h-4 text-primary"
                            checked={travelStyle === style.value}
                            onChange={() => setTravelStyle(style.value)}
                          />
                          <div>
                            <h4 className="font-medium font-sans">{style.label}</h4>
                            <p className="text-sm text-muted-foreground font-serif">{style.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <Label className="text-lg font-medium font-sans">Your Interests</Label>
                <p className="text-sm text-muted-foreground font-serif">
                  Select all that apply to personalize your recommendations
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div
                      key={interest.id}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors"
                    >
                      <Checkbox
                        id={interest.id}
                        checked={selectedInterests.includes(interest.id)}
                        onCheckedChange={() => handleInterestToggle(interest.id)}
                      />
                      <Label htmlFor={interest.id} className="font-serif cursor-pointer flex-1">
                        {interest.label}
                      </Label>
                    </div>
                  ))}
                </div>
                {selectedInterests.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedInterests.map((interestId) => {
                      const interest = interests.find((i) => i.id === interestId);
                      return (
                        <Badge key={interestId} variant="secondary" className="bg-secondary/10 text-secondary">
                          {interest?.label}
                        </Badge>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Citizenship */}
              <div className="space-y-4">
                <Label className="text-lg font-medium font-sans">Citizenship</Label>
                <p className="text-sm text-muted-foreground font-serif">
                  This helps us provide visa requirements and travel advisories
                </p>
                <Popover open={openCitizenship} onOpenChange={setOpenCitizenship}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" className="w-full justify-between">
                      {citizenship || "Select your citizenship"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0 max-h-60 overflow-y-auto">
                    <Command>
                      <CommandInput placeholder="Search country..." />
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countries.map((country) => (
                          <CommandItem
                            key={country}
                            value={country}
                            onSelect={(value) => {
                              setCitizenship(value);
                              setOpenCitizenship(false);
                            }}
                          >
                            {country}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Submit */}
              <div className="pt-6 space-y-4">
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Find My Best Destinations
                </Button>
                <p className="text-center text-sm text-muted-foreground font-serif">
                  Our AI will analyze your preferences and find the perfect destinations for you
                </p>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}
