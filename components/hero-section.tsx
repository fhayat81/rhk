"use client"

import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center px-4 py-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpeg"
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Rustam Hayat Khan
            </h1>
            <h2 className="text-xl font-medium text-white/90 sm:text-2xl md:text-3xl">
              MEP Design Engineer
            </h2>
            <p className="text-lg text-white/80 md:text-xl max-w-md">
              Specializing in energy-efficient HVAC systems that optimize comfort, sustainability, and operational costs
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="bg-white text-purple-700 hover:bg-white/90 rounded-full px-8"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/profile.jpg"
                alt="Rustam Hayat Khan"
                width={320}
                height={320}
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
