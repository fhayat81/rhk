"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              <span className={isScrolled ? "text-purple-700" : "text-white"}>Rustam Hayat Khan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium hover:text-purple-500 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("competencies")}
              className={`text-sm font-medium hover:text-purple-500 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("technologies")}
              className={`text-sm font-medium hover:text-purple-500 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Technologies
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`text-sm font-medium hover:text-purple-500 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium hover:text-purple-500 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Contact
            </button>
            {/* <Button
              className={`rounded-full px-6 ${
                isScrolled ? "bg-purple-600 hover:bg-purple-700" : "bg-white text-purple-700 hover:bg-white/90"
              }`}
            >
              Login
            </Button> */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? "" : "text-white hover:bg-white/10"}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("competencies")}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("technologies")}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
            >
              Technologies
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
