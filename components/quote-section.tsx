"use client"

import { useRef } from "react"
import Image from "next/image" // Import Image
import { motion, useInView } from "framer-motion"

export default function QuoteSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-background-light">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Frame 4.png" // Your black and white image
          alt="Abstract background texture"
          fill
          className="object-cover filter grayscale brightness-75" // Apply grayscale and adjust brightness for contrast
          priority={false} // Set to true if critical for LCP
        />
        {/* Optional: Add a semi-transparent overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10"> {/* Ensure content is above background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight leading-relaxed mb-8 text-background-light"> {/* Adjusted text color */}
            "House of Esthete is where timeless craftsmanship meets contemporary vision, creating objects that transcend
            mere function to become vessels of meaning and beauty."
          </h2>
          <p className="font-body text-lg tracking-body-loose text-background-light/80"> {/* Adjusted text color */}
            — House of Esthete Design Philosophy
          </p>
        </motion.div>
      </div>
    </section>
  )
}