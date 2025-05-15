"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function ManufacturingVideo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      videoRef.current?.play().catch(error => console.log("Video autoplay prevented:", error));
    } else {
      controls.start("hidden")
      videoRef.current?.pause();
    }
  }, [isInView, controls])

  return (
    <section 
      ref={ref} 
      className="w-full py-0 relative overflow-hidden min-h-[70vh] md:min-h-screen flex items-center justify-center" // Removed bg-deep-neutral, py-24/32
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/videos/manufacturing_video.mp4" //  YOUR ACTUAL VIDEO PATH
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Optional: Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text Overlay Content */}
      <div className="relative z-10 container mx-auto px-6 text-background-light">
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
          className="text-center" // Removed mb-16 as text is overlaid
        >
          <h2 className="section-title !text-3xl md:!text-5xl lg:!text-6xl !mb-4 md:!mb-6 text-background-light"> {/* Ensure text is light */}
            Craftsmanship in Motion
          </h2>
          <p className="body-text max-w-2xl mx-auto text-background-light/90 tracking-body-loose"> {/* Ensure text is light */}
            Witness the meticulous process behind each House of Esthete creation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}