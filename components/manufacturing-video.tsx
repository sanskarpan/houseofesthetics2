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
      className="w-full py-0 relative overflow-hidden min-h-[70vh] md:min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/videos/manufacturing_video.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

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
          className="text-center"
        >
          <h2 className="section-title !text-3xl md:!text-5xl lg:!text-6xl !mb-4 md:!mb-6 text-background-light">
            Craftsmanship in Motion
          </h2>
          {/* MODIFIED DESCRIPTION BELOW */}
          <p className="body-text max-w-2xl mx-auto text-background-light/90 tracking-body-loose">
            Witness the meticulous process and passion poured into each House of Esthete creation. 
            From raw material selection to the final polish, our artisans blend traditional techniques 
            with innovative design to craft pieces of enduring beauty and soul.
          </p>
        </motion.div>
      </div>
    </section>
  )
}