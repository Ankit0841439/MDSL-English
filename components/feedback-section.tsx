"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Star, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FeedbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    rating: "5",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showForm, setShowForm] = useState(false)

  // Initial feedback data
  const initialFeedback = [
    {
      name: "Vikram Singh",
      role: "IT Professional",
      rating: 5,
      message: "The Diamond course helped me improve my communication skills for client meetings. Highly recommended!",
    },
    {
      name: "Neha Gupta",
      role: "MBA Student",
      rating: 5,
      message: "MDSL English's IELTS preparation was excellent. I achieved my target band score on the first attempt.",
    },
    {
      name: "Rajesh Kumar",
      role: "Bank Employee",
      rating: 4,
      message: "The Gold course provided me with the confidence to speak English fluently in my workplace.",
    },
  ]

  const [feedbackList, setFeedbackList] = useState(initialFeedback)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRatingChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      rating: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create new feedback object from form data
    const newFeedback = {
      name: formData.name,
      role: formData.role,
      rating: Number.parseInt(formData.rating),
      message: formData.message,
    }

    // Simulate form submission
    setTimeout(() => {
      // Remove the oldest feedback and add the new one at the beginning
      const updatedFeedback = [newFeedback, ...feedbackList.slice(0, 2)]

      setFeedbackList(updatedFeedback)
      setIsSubmitting(false)
      setSubmitted(true)
      setShowForm(false)
      setFormData({
        name: "",
        email: "",
        role: "",
        rating: "5",
        message: "",
      })

      // Reset submitted state after 5 seconds to allow submitting another feedback
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-2">
          Share Your Experience
        </h2>
        <p className="text-center text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          We value your feedback! Let us know about your experience with MDSL English
        </p>

        {!showForm && !submitted ? (
          <div className="text-center">
            <Button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3"
            >
              Leave Your Feedback
            </Button>
          </div>
        ) : null}

        {showForm && !submitted ? (
          <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Role/Profession *
                  </Label>
                  <Input
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Student, Professional, etc."
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-1">Your Rating *</Label>
                  <RadioGroup
                    value={formData.rating}
                    onValueChange={handleRatingChange}
                    className="flex space-x-1 sm:space-x-2"
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <div key={value} className="flex flex-col items-center">
                        <RadioGroupItem value={value.toString()} id={`rating-${value}`} className="sr-only" />
                        <Label
                          htmlFor={`rating-${value}`}
                          className={`cursor-pointer p-1 sm:p-2 ${formData.rating >= value.toString() ? "text-yellow-400" : "text-gray-300"}`}
                        >
                          <Star
                            className={`h-6 w-6 sm:h-8 sm:w-8 ${formData.rating >= value.toString() ? "fill-yellow-400" : ""}`}
                          />
                        </Label>
                        <span className="text-xs">{value}</span>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Feedback *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Share your experience with MDSL English..."
                    rows={5}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="button" variant="outline" className="mr-2" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </div>
            </form>
          </div>
        ) : null}

        {submitted && (
          <div className="max-w-2xl mx-auto bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-4">
            <p className="font-medium">Thank you for your feedback!</p>
            <p>We appreciate you taking the time to share your experience with us.</p>
          </div>
        )}

        <div className="mt-8 sm:mt-12">
          <h3 className="text-lg sm:text-xl font-bold text-center mb-6 sm:mb-8">Recent Feedback from Our Students</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {feedbackList.map((feedback, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 sm:p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                        <User size={24} className="text-blue-500 sm:hidden" />
                        <User size={32} className="text-blue-500 hidden sm:block" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base">{feedback.name}</h3>
                        <p className="text-xs sm:text-sm text-blue-100">{feedback.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={`sm:hidden ${i < feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`hidden sm:inline ${i < feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 min-h-[100px] sm:min-h-[120px]">
                    <p className="text-gray-700 text-sm sm:text-base">{feedback.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
