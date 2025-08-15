"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { LoginForm } from "@/components/auth/login-form" // create this component separately
import { SignupForm } from "@/components/auth/signup-form"

export function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <svg className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl font-sans bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TravelGenie.ai
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={() => setLoginOpen(true)}>
              Login
            </Button>
            <Button variant="outline" size="sm" onClick={() => setSignupOpen(true)}>
              Sign Up
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/plan-trip">Plan a Trip</Link>
            </Button>
          </div>
        </div>
      </nav>

      <Modal open={loginOpen} onOpenChange={setLoginOpen} title="Login to TravelGenie">
        <LoginForm />
      </Modal>

      <Modal open={signupOpen} onOpenChange={setSignupOpen} title="Create a TravelGenie Account">
        <SignupForm />
      </Modal>
    </>
  )
}
