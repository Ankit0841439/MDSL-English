import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  const courses = [
    { name: "IELTS Spoken English Course", path: "/courses" },
    { name: "Diamond Spoken English Course", path: "/courses" },
    { name: "Platinum Spoken English Course", path: "/courses" },
    { name: "Gold Spoken English Course", path: "/courses" },
  ]

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-14 h-14">
                <Image src="/favicon.png" alt="MDSL English Logo" width={56} height={56} className="object-contain" />
              </div>
              <h3 className="text-xl font-bold">MDSL English</h3>
            </Link>
            <p className="text-blue-100 mb-6">
              Your journey of English Learning begins here! We provide comprehensive English courses from basic to
              advanced levels, helping students achieve their language goals.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100082642843909&sk=about_details"
                className="hover:text-blue-300 transition-colors bg-blue-800/50 p-2 rounded-full"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/mdsl_english/"
                className="hover:text-blue-300 transition-colors bg-blue-800/50 p-2 rounded-full"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.youtube.com/@MDSL_ENGLISH"
                className="hover:text-blue-300 transition-colors bg-blue-800/50 p-2 rounded-full"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=919955855617&text&type=phone_number&app_absent=0"
                className="hover:text-blue-300 transition-colors bg-blue-800/50 p-2 rounded-full"
              >
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-xs">▶</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">▶</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">▶</span> Our Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">▶</span> MDSL Books
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">▶</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">Our Courses</h3>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link
                    href={course.path}
                    className="text-blue-100 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">▶</span> {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-blue-300" />
                <span>Opposite to LIC Office Maharajganj, Siwan(Bihar) Pin Code-841238</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-blue-300" />
                <a href="tel:+919955855617" className="text-white-600 hover:underline text-sm sm:text-base">
                +91 9955855617
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-blue-300" />
                <a href="mailto:sunnysingh00117@gmail.com" className="text-white-600 hover:underline text-sm sm:text-base">
                sunnysingh00117@gmail.com
                </a>
                
              </li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} MDSL English | All rights reserved.</p>
          <div className="mt-2 flex items-center justify-center">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-medium">
              Designed & Developed with
            </span>
            <Heart size={16} className="mx-1 text-red-500 fill-red-500 animate-pulse" />
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-medium">
              by Ankit Kumar
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
