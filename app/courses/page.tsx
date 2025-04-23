import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "IELTS Spoken English Course",
      image: "/images/ielts-course.png",
      description:
        "Comprehensive preparation for the IELTS exam with focus on all four modules: Listening, Reading, Writing, and Speaking.",
      features: [
        "Expert guidance for all IELTS modules",
        "Regular mock tests with detailed feedback",
        "Proven strategies to achieve your target band score",
        "Small batch sizes for personalized attention",
      ],
      duration: "6 months",
      schedule: "Weekdays (Mon-Fri) - 2 hours/day",
      price: "₹14,999",
      popular: true,
    },
    {
      id: 2,
      title: "Diamond Spoken English Course",
      image: "/images/diamond-course.png",
      description:
        "Our premium English course designed for professionals who need advanced communication skills for international business settings.",
      features: [
        "Advanced business communication training",
        "Presentation and negotiation skills",
        "Cross-cultural communication techniques",
        "Executive-level English proficiency",
        "One-on-one mentoring sessions",
      ],
      duration: "6 months",
      schedule: "Weekdays (Mon-Fri) - 2 hours/day",
      price: "₹8,999",
      popular: false,
    },
    {
      id: 3,
      title: "Platinum Spoken English Course",
      image: "/images/platinum-course.png",
      description:
        "Premium spoken English course with native speaker interaction and advanced fluency training for professional contexts.",
      features: [
        "Sessions with native English speakers",
        "Advanced pronunciation and accent reduction",
        "Professional vocabulary and expressions",
        "Public speaking and presentation mastery",
      ],
      duration: "6 months",
      schedule: "Weekdays (Mon-Fri) - 2 hours/day",
      price: "₹6,999",
      popular: false,
    },
    {
      id: 4,
      title: "Gold Spoken English Course",
      image: "/images/gold-course.png",
      description:
        "Comprehensive spoken English course for intermediate learners focusing on fluency, pronunciation, and confidence building.",
      features: [
        "Intensive speaking practice sessions",
        "Pronunciation and accent improvement",
        "Conversational fluency development",
        "Confidence building through role plays",
      ],
      duration: "6 months",
      schedule: "Weekdays (Mon-Fri) - 2 hours/day",
      price: "₹5,999",
      popular: false,
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-2">Our Courses</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          MDSL English offers a variety of courses designed to meet your specific English learning needs, from basic to
          advanced levels, including specialized courses for IELTS preparation and professional communication.
        </p>

        <div className="space-y-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden ${
                course.popular ? "border-2 border-blue-500 relative" : ""
              }`}
            >
              {course.popular && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                  Most Popular
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-800 mb-2">{course.title}</h2>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h3 className="font-medium text-gray-900">Duration</h3>
                      <p className="text-gray-600">{course.duration}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Schedule</h3>
                      <p className="text-gray-600">{course.schedule}</p>
                    </div>
                  </div>

                  <h3 className="font-medium text-gray-900 mb-2">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Course Fee</span>
                      <p className="text-2xl font-bold text-blue-600">{course.price}</p>
                    </div>
                    <Link href="/contact">
                      <Button className="bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-50 p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Not sure which course is right for you?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Take our free assessment test or schedule a consultation with our counselors to find the perfect course for
            your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">Schedule Consultation</Button>
            </Link>
            <Link href="https://api.whatsapp.com/send/?phone=919955855617&text&type=phone_number&app_absent=" target="_blank">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2">Join On Whatsapp</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
