"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface ProductInquiryProps {
  productName: string
  isOpen: boolean
  onClose: () => void
}

export default function ProductInquiry({ productName, isOpen, onClose }: ProductInquiryProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      }, 3000)
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-800 hover:text-accent-green transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <h2 className="font-display text-xl tracking-wider mb-4 border-b pb-2">{productName}</h2>

          {!isSubmitted ? (
            <>
              <p className="font-body text-sm mb-6">
                We are happy to see your interest in our product. Please fill the form below & our team will reach out
                to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-body text-xs mb-1">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-2 font-body text-sm focus:outline-none focus:border-accent-green"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-xs mb-1">
                    Email ID*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-2 font-body text-sm focus:outline-none focus:border-accent-green"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-xs mb-1">
                    Phone No.*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-2 font-body text-sm focus:outline-none focus:border-accent-green"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-xs mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-300 p-2 font-body text-sm focus:outline-none focus:border-accent-green"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-deep-neutral text-white py-3 font-body text-sm uppercase tracking-wider hover:bg-accent-green transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8 border border-gray-200 my-4">
              <p className="font-body text-lg mb-2">Thank you for your enquiry.</p>
              <p className="font-body text-sm">Someone from House of Esthete team will contact you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
