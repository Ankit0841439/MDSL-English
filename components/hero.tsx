import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User } from "lucide-react"

export default function Hero() {
  return (
    <section className="hero-gradient py-8 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Master English with <span className="text-gradient">MDSL</span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              India's No. 1 Spoken English coaching institute for Basic to Advanced level English learning. Transform your
              communication skills and open doors to new opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
              <Link href="/courses" className="w-full sm:w-auto">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full">
                  Explore Our Courses
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="bg-white hover:bg-blue-50 border-2 border-blue-600 text-blue-600 px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                >
                  Join Us
                </Button>
              </Link>
            </div>

            <p className="text-center md:text-left text-sm italic mb-6 bg-white/70 px-4 py-2 rounded-full inline-block">
              "यहाँ पढ़ाया नहीं, सिखाया जाता है"
            </p>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] animate-float">
              <Image
                src="/images/mdsl-banner.png"
                alt="MDSL English Learning"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Trainer Details Section - Now with only one trainer */}
        <div className="mt-8 bg-white/80 p-4 sm:p-6 rounded-xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 text-center">Meet Our Expert Trainer</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 bg-blue-100 flex items-center justify-center">
              <User size={40} className="text-blue-500" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg text-blue-900">Sunny Sir</h3>
              <p className="text-sm text-gray-600">Lead English Trainer | 5+ Years Experience</p>
              <p className="text-sm mt-1">Specializes in IELTS preparation and advanced communication skills</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-6 md:mt-8">
          <div className="bg-white/80 p-2 sm:p-3 rounded-lg text-center shadow-md">
            <div className="text-xl sm:text-3xl font-bold text-blue-600">5K+</div>
            <div className="text-xs sm:text-sm text-gray-600">Students Trained</div>
          </div>
          <div className="bg-white/80 p-2 sm:p-3 rounded-lg text-center shadow-md">
            <div className="text-xl sm:text-3xl font-bold text-blue-600">5+</div>
            <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white/80 p-2 sm:p-3 rounded-lg text-center shadow-md">
            <div className="text-xl sm:text-3xl font-bold text-blue-600">100%</div>
            <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white/80 p-2 sm:p-3 rounded-lg text-center shadow-md">
            <div className="text-xl sm:text-3xl font-bold text-blue-600">24/7</div>
            <div className="text-xs sm:text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
