import Hero from "@/components/hero"
import CourseBanner from "@/components/course-banner"
import CourseInfo from "@/components/course-info"
import TestimonialSection from "@/components/testimonial-section"
import CTASection from "@/components/cta-section"
import FeedbackSection from "@/components/feedback-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CourseBanner />
      <CourseInfo />

      {/* MDSL Books Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">MDSL Books</h2>
            <Link href="/books">
              <Button variant="ghost" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                View All <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px]">
              <Image
                src="/images/mdsl-books-stack.png"
                alt="MDSL English Books Collection"
                fill
                className="object-contain"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Link href="/books">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-40">
                    <Image
                      src="/images/mdsl-books-stack.png"
                      alt="Grammar Books"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-blue-800">Grammar Books</h3>
                    <p className="text-sm text-gray-600 mb-2">Master English grammar rules</p>
                    <span className="text-blue-600 text-sm font-medium">Coming Soon →</span>
                  </div>
                </div>
              </Link>

              <Link href="/books">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-40">
                    <Image
                      src="/images/mdsl-books-stack.png"
                      alt="Vocabulary Books"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-blue-800">Vocabulary Books</h3>
                    <p className="text-sm text-gray-600 mb-2">Expand your word power</p>
                    <span className="text-blue-600 text-sm font-medium">Coming Soon →</span>
                  </div>
                </div>
              </Link>

              <Link href="/books">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-40">
                    <Image
                      src="/images/mdsl-books-stack.png"
                      alt="Practice Books"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-blue-800">Practice Books</h3>
                    <p className="text-sm text-gray-600 mb-2">Reinforce your learning</p>
                    <span className="text-blue-600 text-sm font-medium">Coming Soon →</span>
                  </div>
                </div>
              </Link>

              <Link href="/books">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-white flex flex-col justify-center items-center p-4 h-full">
                  <h3 className="font-bold text-xl mb-2">MDSL Books</h3>
                  <p className="text-sm text-blue-100 mb-4 text-center">Browse our complete collection</p>
                  <Button variant="outline" className="border-white text-black hover:bg-blue-700 hover:text-white">
                    Coming Soon
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <FeedbackSection />
      <CTASection />
    </div>
  )
}
