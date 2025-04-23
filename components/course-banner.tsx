"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function CourseBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const slides = [
    {
      id: 1,
      title: "IELTS Spoken English Course",
      subtitle: "FOUNDATION BATCH",
      tagline: "English सीखना हुआ आसान",
      blueBanner: "Comprehensive preparation for the IELTS exam",
      greenBanner: "Focus on all four modules: Listening, Reading, Writing, and Speaking",
      batchTime: "06:00AM-8:00AM",
      price: {
        original: "15,999/-",
        final: "14,999/-",
      },
    },
    {
      id: 2,
      title: "Diamond Spoken English Course",
      subtitle: "PREMIUM PROGRAM",
      tagline: "अब English बोलना सीखो, आत्मविश्वास से भरो",
      blueBanner: "Advanced business communication training",
      greenBanner: "Presentation and negotiation skills for professionals",
      batchTime: "08:00AM-10:00AM",
      price: {
        original: "10,999/-",
        final: "8,999/-",
      },
    },
    {
      id: 3,
      title: "Platinum Spoken English Course",
      subtitle: "ADVANCED PROGRAM",
      tagline: "Premium spoken English with native speaker interaction",
      blueBanner: "Advanced pronunciation and accent reduction",
      greenBanner: "Professional vocabulary and expressions",
      batchTime: "10:00AM-12:00AM",
      price: {
        original: "9,999/-",
        final: "6,999/-",
      },
    },
    {
      id: 4,
      title: "Gold Spoken English Course",
      subtitle: "INTERMEDIATE PROGRAM",
      tagline: "Comprehensive spoken English for intermediate learners",
      blueBanner: "Intensive speaking practice sessions",
      greenBanner: "Pronunciation and accent improvement",
      batchTime: "12:00AM-02:00PM",
      price: {
        original: "9,999/-",
        final: "5,999/-",
      },
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, currentSlide])

  const slide = slides[currentSlide]

  return (
    <section className="py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl shadow-xl">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-900 to-red-900/80 w-[60px] sm:w-[120px] flex flex-col justify-center items-center text-white px-1 sm:px-2 z-10">
            <div className="text-center font-bold tracking-wider text-xs sm:text-base">
              <span className="block">A</span>
              <span className="block">D</span>
              <span className="block">M</span>
              <span className="block">I</span>
              <span className="block">S</span>
              <span className="block">S</span>
              <span className="block">I</span>
              <span className="block">O</span>
              <span className="block">N</span>
              <span className="block mt-1 sm:mt-2">O</span>
              <span className="block">P</span>
              <span className="block">E</span>
              <span className="block">N</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 pl-[60px] sm:pl-[120px]">
            <div className="relative">
              <div className="absolute top-0 right-0 bg-red-600 text-white py-1 px-2 sm:px-3 rounded-bl-lg font-bold z-10 text-xs sm:text-sm">
                NEW
              </div>

              <div className="p-2 sm:p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-red-600 mb-1 sm:mb-2">
                      {slide.title}
                    </h2>
                    <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-red-900 mb-2 sm:mb-4">
                      {slide.subtitle}
                    </h3>

                    <p className="text-sm sm:text-lg md:text-xl bg-yellow-300 inline-block px-2 mb-2 sm:mb-4">
                      {slide.tagline}
                    </p>

                    <div className="bg-blue-800 text-white text-sm sm:text-lg md:text-2xl font-bold p-1 sm:p-2 mb-2 sm:mb-4">
                      {slide.blueBanner}
                    </div>

                    <div className="bg-green-600 text-white text-xs sm:text-base md:text-xl p-1 sm:p-2 mb-3 sm:mb-6">
                      {slide.greenBanner}
                    </div>


                    <div className="bg-blue-900 text-white p-2 sm:p-4 rounded-lg">
                      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <Link href="/contact">
                          <Button className="bg-red-600 hover:bg-red-700 text-white text-sm sm:text-xl px-3 sm:px-6 py-2 sm:py-6 animate-pulse">
                            JOIN NOW
                          </Button>
                        </Link>

                        <div className="text-center">
                          <p className="text-sm sm:text-lg">Offline Batch Fees</p>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <span className="text-sm sm:text-xl line-through">{slide.price.original}</span>
                            <span className="text-lg sm:text-3xl text-yellow-300 font-bold">{slide.price.final}</span>
                          </div>
                        </div>

                        <div className="text-center">
                          <p className="text-3xl sm:text-6xl text-yellow-300 font-bold">6</p>
                          <p className="text-sm sm:text-xl font-bold">
                            MONTH
                            <br />
                            TRAINING
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 mt-4 md:mt-0">
                    <div className="text-center bg-blue-100 p-2 rounded-lg mb-2 sm:mb-4">
                      <p className="text-base sm:text-xl font-bold">Batch Live</p>
              
                      <p className="text-sm sm:text-lg">{slide.batchTime}</p>
                    </div>

                    <div className="text-center bg-red-100 p-2 rounded-lg">
                      <p className="text-base sm:text-xl text-red-600 font-bold">Batch Mode</p>
                      <p className="text-base sm:text-xl font-bold"> Offline</p>
                    </div>

                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="absolute top-1/2 -translate-y-1/2 left-[70px] sm:left-[130px] bg-white/80 rounded-full p-1 sm:p-2 cursor-pointer hover:bg-white transition-all z-10"
            onClick={() => {
              prevSlide()
              setAutoplay(false)
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} className="sm:hidden" />
            <ChevronLeft size={24} className="hidden sm:block" />
          </button>

          <button
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/80 rounded-full p-1 sm:p-2 cursor-pointer hover:bg-white transition-all z-10"
            onClick={() => {
              nextSlide()
              setAutoplay(false)
            }}
            aria-label="Next slide"
          >
            <ChevronRight size={16} className="sm:hidden" />
            <ChevronRight size={24} className="hidden sm:block" />
          </button>

          {/* Slide indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-blue-600" : "bg-gray-300"}`}
                onClick={() => {
                  setCurrentSlide(index)
                  setAutoplay(false)
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
