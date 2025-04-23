"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CourseInfo() {
  return(
          <div className="mt-16 text-center bg-blue-50 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Join thousands of successful students who transformed their English skills with MDSL
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get access to free resources, study materials, and daily practice exercises by joining our Youtube
              Channel.
            </p>
            <Link href="https://www.youtube.com/@MDSL_ENGLISH" target="_blank">
              <Button className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 youtube-button">
                Join On Youtube
              </Button>
            </Link>
          </div>
    )
}
