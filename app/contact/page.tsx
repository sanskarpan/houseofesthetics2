"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  const formRef = useRef(null)
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 })

  const infoRef = useRef(null)
  const isInfoInView = useInView(infoRef, { once: true, amount: 0.3 })

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/carousel/Carousel3.jpeg?height=1080&width=1920&text=Contact Us"
            alt="House of Esthete contact"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-deep-neutral/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-background-light">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] mb-6">Contact Us</h1>
          <p className="font-body text-lg md:text-xl tracking-wider max-w-2xl">
            We'd love to hear from you. Reach out to discuss our collections or schedule a visit to our atelier.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="font-display text-2xl md:text-3xl tracking-wider mb-8">Get in Touch</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-body text-sm mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full border border-deep-neutral/30 p-3 font-body focus:outline-none focus:border-accent-green bg-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-body text-sm mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border border-deep-neutral/30 p-3 font-body focus:outline-none focus:border-accent-green bg-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-body text-sm mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full border border-deep-neutral/30 p-3 font-body focus:outline-none focus:border-accent-green bg-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full border border-deep-neutral/30 p-3 font-body focus:outline-none focus:border-accent-green bg-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-block font-body text-sm uppercase tracking-widest border border-deep-neutral px-8 py-3 hover:bg-accent-green hover:border-accent-green hover:text-background-light transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div ref={infoRef}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <h2 className="font-display text-2xl md:text-3xl tracking-wider mb-8">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <MapPin className="mr-4 text-accent-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-lg mb-2">Visit Our Atelier</h3>
                      <p className="font-body">
                        123 Design District
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="mr-4 text-accent-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-lg mb-2">Email Us</h3>
                      <p className="font-body">info@houseofesthete.com</p>
                      <p className="font-body mt-1">press@houseofesthete.com (For Media Inquiries)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="mr-4 text-accent-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-lg mb-2">Call Us</h3>
                      <p className="font-body">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-lg mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/thehouseofesthete?igsh=Njk2Y2JyOGpvNDU3"
                        className="w-10 h-10 rounded-full border border-deep-neutral/30 flex items-center justify-center hover:border-accent-green hover:text-accent-green transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram size={18} />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/the-house-of-esthete/?originalSubdomain=in"
                        className="w-10 h-10 rounded-full border border-deep-neutral/30 flex items-center justify-center hover:border-accent-green hover:text-accent-green transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="h-[800px] w-[1920px] relative">
        <div className="absolute inset-0 bg-gray-300">
          <Image src="/Hyderabad.jpeg?height=800&width=1920&text=Map" alt="Map" fill className="object-cover" />
        </div>
      </section> */}
    </div>
  )
}
