"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react"

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [windowWidth, setWindowWidth] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Bank PO Exam Qualifier",
      content:
        "MDSL English helped me improve my English skills which was crucial for clearing my Bank PO exam. The foundation course was exactly what I needed! The teaching methodology is unique and effective.",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Software Engineer",
      content:
        "I was struggling with communication in my workplace. The Advanced course at MDSL gave me the confidence to express myself clearly in meetings and presentations. The personalized feedback from instructors was invaluable.",
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "UPSC Aspirant",
      content:
        "The structured approach to grammar and vocabulary at MDSL English has been instrumental in my UPSC preparation. Highly recommended for serious aspirants! The study materials are comprehensive and well-organized.",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      role: "College Student",
      content:
        "As a college student, I needed to improve my English for better academic performance. MDSL's teaching methodology made learning enjoyable and effective. I can now confidently participate in class discussions.",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        nextTestimonial()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, activeIndex])

  const visibleTestimonials = () => {
    if (windowWidth < 768) {
      return [testimonials[activeIndex]]
    } else if (windowWidth < 1024) {
      return [testimonials[activeIndex], testimonials[(activeIndex + 1) % testimonials.length]]
    } else {
      return [
        testimonials[activeIndex],
        testimonials[(activeIndex + 1) % testimonials.length],
        testimonials[(activeIndex + 2) % testimonials.length],
      ]
    }
  }

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-2">
          Student Success Stories
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
          See how MDSL English has transformed the lives of our students and helped them achieve their goals
        </p>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {visibleTestimonials().map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden testimonial-card">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 sm:p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                        <User size={24} className="text-blue-500 sm:hidden" />
                        <User size={32} className="text-blue-500 hidden sm:block" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base">{testimonial.name}</h3>
                        <p className="text-xs sm:text-sm text-blue-100">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className="fill-yellow-400 text-yellow-400 sm:hidden" />
                          ))}
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400 hidden sm:block" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 min-h-[100px] sm:min-h-[120px]">
                    <p className="text-gray-700 text-sm sm:text-base">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <button
            className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-4 bg-white rounded-full p-1 sm:p-2 shadow-md cursor-pointer hover:bg-blue-50 transition-all hidden md:block"
            onClick={() => {
              prevTestimonial()
              setAutoplay(false)
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="sm:hidden" />
            <ChevronLeft size={24} className="hidden sm:block" />
          </button>

          <button
            className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-4 bg-white rounded-full p-1 sm:p-2 shadow-md cursor-pointer hover:bg-blue-50 transition-all hidden md:block"
            onClick={() => {
              nextTestimonial()
              setAutoplay(false)
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="sm:hidden" />
            <ChevronRight size={24} className="hidden sm:block" />
          </button>
        </div>

        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-blue-600 w-4 sm:w-6" : "bg-gray-300"
              }`}
              onClick={() => {
                setActiveIndex(index)
                setAutoplay(false)
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
