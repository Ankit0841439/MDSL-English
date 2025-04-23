import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
          <Image src="/main-banner.png" alt="MDSL English Campus" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="text-white p-8 max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About MDSL English</h1>
              <p className="text-lg">
                India's premier English language coaching institute dedicated to transforming the way students learn and
                master the English language.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <div className="relative w-32 h-32 mx-auto">
              <Image src="/images/logo.png" alt="MDSL Logo" fill className="object-contain" />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              MDSL English is India's premier English language coaching institute, dedicated to transforming the way
              students learn and master the English language. Founded with a vision to make quality English education
              accessible to all, we have grown to become the No. 1 coaching institute for Basic to Advanced level
              English.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Our Philosophy</h2>
            <p>
              At MDSL English, we believe in our motto: "यहाँ पढ़ाया नहीं, सिखाया जाता है" (Here, we don't just teach, we
              make you learn). This philosophy guides our teaching methodology, which focuses on practical application
              rather than rote memorization.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Our Approach</h2>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>Structured curriculum designed by language experts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>Interactive teaching methods that encourage participation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>Regular practice sessions to build confidence</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>Personalized attention to address individual learning needs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span>Comprehensive study materials developed in-house</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Our Success Story</h2>
            <p>
              Since our inception, MDSL English has helped thousands of students achieve their language goals. Our
              alumni have secured positions in prestigious organizations, cleared competitive exams, and pursued higher
              education abroad. Our success is measured by the success of our students.
            </p>

            <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Our Faculty</h2>
            <p>
              Our team consists of experienced language trainers who are passionate about teaching and committed to
              student success. Each faculty member undergoes rigorous training to ensure they deliver the MDSL standard
              of education excellence.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8 text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Join the MDSL Family</h3>
              <p className="mb-6">
                Whether you're a student preparing for competitive exams, a professional looking to enhance your
                communication skills, or someone who simply wants to master the English language, MDSL English has a
                course tailored for you. Join us and experience the difference in our teaching methodology.
              </p>
              <Link href="/courses">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">Explore Our Courses</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
