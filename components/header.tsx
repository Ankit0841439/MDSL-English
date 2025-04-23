"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Close menu when pathname changes (page navigation)
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Function to handle link clicks in mobile menu
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-3"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={handleLinkClick}>
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src="/favicon.png"
              alt="MDSL English Logo"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-blue-900">MDSL English</h1>
            <p className="text-xs text-gray-600 hidden sm:block">Your journey of English Learning begins here!</p>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/courses" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
            Our Courses
          </Link>

          <Link href="/books" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
            MDSL Books
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
            About Us
          </Link>

          <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
            Contact Us
          </Link>

          <Link href="https://api.whatsapp.com/send/?phone=919955855617&text&type=phone_number&app_absent=" target="_blank">
            <Button
              variant="success"
              className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-105"
            >
              Join Us On WhatsApp
            </Button>
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 animate-in slide-in-from-top">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-700 font-medium hover:text-blue-900 py-2" onClick={handleLinkClick}>
              Home
            </Link>

            <Link
              href="/courses"
              className="text-gray-700 font-medium hover:text-blue-900 py-2"
              onClick={handleLinkClick}
            >
              Our Courses
            </Link>

            <Link
              href="/books"
              className="text-gray-700 font-medium hover:text-blue-900 py-2"
              onClick={handleLinkClick}
            >
              MDSL Books
            </Link>

            <Link
              href="/about"
              className="text-gray-700 font-medium hover:text-blue-900 py-2"
              onClick={handleLinkClick}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 font-medium hover:text-blue-900 py-2"
              onClick={handleLinkClick}
            >
              Contact
            </Link>

            <Link
              href="https://api.whatsapp.com/send/?phone=919955855617&text&type=phone_number&app_absent="
              target="_blank"
              className="w-full"
              onClick={handleLinkClick}
            >
              <Button variant="success" className="bg-green-500 hover:bg-green-600 text-white w-full">
                Join Us On WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
