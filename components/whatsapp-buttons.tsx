"use client"

import { useState, useEffect } from "react"
import { Phone, X, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function WhatsAppButtons() {
  const [showPopup, setShowPopup] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Fixed WhatsApp buttons */}
      <div
        className={`fixed left-2 sm:left-4 bottom-4 z-40 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <a
          href="tel:+919955855617"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg whatsapp-button"
          aria-label="Call us"
        >
          <Phone size={20} className="sm:hidden" />
          <Phone size={24} className="hidden sm:block" />
        </a>
      </div>

      <div
        className={`fixed right-2 sm:right-4 bottom-4 z-40 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <Link
          href="https://api.whatsapp.com/send/?phone=919955855617&text&type=phone_number&app_absent="
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg whatsapp-button"
          aria-label="WhatsApp us"
        >
          <MessageCircle size={20} className="sm:hidden" />
          <MessageCircle size={24} className="hidden sm:block" />
        </Link>
      </div>

      {/* WhatsApp popup */}
      {showPopup && (
        <div className="fixed bottom-16 sm:bottom-20 left-2 sm:left-4 z-50 bg-white rounded-lg shadow-xl w-64 sm:w-72 overflow-hidden animate-in slide-in-from-left">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 sm:p-4 flex justify-between items-center">
            <h3 className="font-bold text-sm sm:text-base">Contact Us</h3>
            <button onClick={() => setShowPopup(false)} aria-label="Close popup">
              <X size={18} className="sm:hidden" />
              <X size={20} className="hidden sm:block" />
            </button>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
              Get in touch with us for more information about our courses and special offers.
            </p>
            <Link
              href="https://api.whatsapp.com/send/?phone=919955855617&text&type=phone_number&app_absent="
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-3 sm:px-4 rounded flex items-center justify-center gap-2 w-full transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:hidden"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" />
              </svg>
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
                className="hidden sm:block mr-2"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" />
              </svg>
              WhatsApp Us
            </Link>
            <div className="mt-3 text-center">
              <a href="tel:+919955855617" className="text-blue-600 hover:underline text-sm sm:text-base">
                +91 9955855617
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
