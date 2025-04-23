import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-2">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions about our courses or want to schedule a free trial class? Get in touch with us and our team
          will get back to you as soon as possible.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-xl font-bold text-blue-800 mb-6">Contact Information</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Our Location</h3>
                  <p className="text-gray-600">Opposite to LIC Office Maharajganj, Siwan(Bihar) Pin Code-841238</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone Number</h3>
                  <a href="tel:+919955855617" className="text-blue-600 hover:underline text-sm sm:text-base">
                    +91 9955855617
                   </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email Address</h3>
                  <a href="mailto:sunnysingh00117@gmail.com" className="text-blue-600 hover:underline text-sm sm:text-base">
                      sunnysingh00117@gmail.com
                     </a>
                  <p className="text-gray-600"></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Working Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-4">Quick Connect</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">For Course Inquiries</h4>
                     <a href="tel:+919955855617" className="text-blue-600 hover:underline text-sm sm:text-base">
                      +91 9955855617
                     </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">For Admissions</h4>
                     <a href="tel:+919955855617" className="text-blue-600 hover:underline text-sm sm:text-base">
                      +91 9955855617
                     </a>
                  </div>
                  
                </div>

                <div className="mt-6">
                  <h3 className="font-medium text-gray-900 mb-2">Connect on WhatsApp</h3>
                  <p className="text-gray-600 mb-4">
                    Get quick responses to your queries by connecting with us on WhatsApp.
                  </p>
                  <Link href="https://api.whatsapp.com/send/?phone=919955855617&text&type=phone_number&app_absent=" target="_blank">
                    <Button className="w-full bg-green-500 hover:bg-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" />
                      </svg>
                      Chat on WhatsApp
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  )
}
