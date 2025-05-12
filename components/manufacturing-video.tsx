"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"

export default function ManufacturingVideo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="bg-deep-neutral text-background-light py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Craftsmanship in Motion</h2>
          <p className="body-text max-w-2xl mx-auto">
            Witness the meticulous process behind each House of Esthete creation.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="relative aspect-video max-w-5xl mx-auto overflow-hidden rounded-sm"
        >
          {/* Replace with actual video component when available */}
          <div className="relative w-full h-full">
            <Image
              src="/Frame 6.png?height=1080&width=1920&text=Manufacturing Video"
              alt="Manufacturing process video"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-20 h-20 rounded-full bg-accent-green/80 flex items-center justify-center hover:bg-accent-green transition-colors duration-300"
                aria-label="Play video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
