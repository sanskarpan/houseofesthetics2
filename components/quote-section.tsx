"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function QuoteSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wider leading-relaxed mb-8">
            "House of Esthete is where timeless craftsmanship meets contemporary vision, creating objects that transcend
            mere function to become vessels of meaning and beauty."
          </h2>
          <p className="font-body text-lg tracking-wide text-deep-neutral/80">— House of Esthete Design Philosophy</p>
        </motion.div>
      </div>
    </section>
  )
}
