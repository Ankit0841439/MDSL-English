import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your English Skills?</h2>
            <p className="text-blue-100 mb-6">
              Join MDSL English today and take the first step towards fluent English communication. Our expert
              instructors and proven methodology will help you achieve your language goals faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Our Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Why Choose MDSL English?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Experienced instructors with proven track record</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Flexible batch timings for working professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Comprehensive study materials included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Offline learning options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Personalized attention and feedback</span>
                </li>
              </ul>
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded-lg rotate-6 shadow-lg">
              Limited Time Offer!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
