"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import RevealSection from "@/components/reveal-section"
import ParallaxImage from "@/components/parallax-image"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0])

  return (
    <div ref={targetRef} className="min-h-screen">
      {/* Hero Section - Intrigue & Anticipation */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Frame 7.png?height=1080&width=1920"
            alt="Ambient light playing across a stone wall"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-deep-neutral/20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] text-background-light mb-8">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Beyond the
              </motion.span>
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Threshold
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
              className="font-body text-background-light/90 text-lg md:text-xl tracking-wider max-w-xl mx-auto"
            >
              A moment. A feeling. Your Curated Encounter.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="w-[1px] h-16 bg-background-light/50 mx-auto"></div>
          <p className="font-body text-background-light/80 text-xs tracking-widest uppercase mt-4">
            Scroll to discover
          </p>
        </motion.div>
      </section>

      {/* Design Philosophy - Origins */}
      <section className="py-24 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <RevealSection>
            <h2 className="section-title text-center mb-16">Design Philosophy</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <RevealSection delay={0.2}>
              <div className="h-[500px] md:h-[600px] relative">
                <ParallaxImage
                  src="/Frame 8.png?height=900&width=600"
                  alt="Archival sketches and design process"
                  className="h-full"
                />
              </div>
            </RevealSection>

            <div className="flex flex-col justify-center">
              <RevealSection delay={0.4}>
                <h3 className="section-subtitle">Origins</h3>
                <p className="body-text mb-8">
                  House of Esthete emerged from a singular vision: to create objects that transcend their function and
                  become vessels of meaning. Each piece begins as a dialogue between material and intent, form and
                  purpose.
                </p>
                <p className="body-text mb-12">
                  Our atelier stands at the intersection of traditional craftsmanship and contemporary design language,
                  creating pieces that honor the past while speaking to the present.
                </p>
                <div className="inline-block relative group">
                  <Link href="/origins" className="font-body text-sm uppercase tracking-widest">
                    Discover our story
                    <span className="block h-[1px] w-0 bg-accent-green absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* Surreal Luxury - Suspended Reality */}
      <section className="py-24 md:py-32 bg-background-dark">
        <div className="container mx-auto px-6">
          <RevealSection>
            <h2 className="section-title text-center">Suspended Reality</h2>
            <p className="body-text text-center max-w-2xl mx-auto mb-16">The Line Between Object and Art</p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <RevealSection key={item} delay={0.2 * index}>
                <div className="group relative overflow-hidden">
                  <div className="h-[400px] md:h-[500px] relative">
                    <ParallaxImage
                      src={`/Frame 9.png?height=800&width=600&text=Vignette ${item}`}
                      alt={`Surreal luxury vignette ${item}`}
                      className="h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-accent-green/0 transition-all duration-500 group-hover:bg-accent-green/20"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="font-display text-xl tracking-wider text-background-light mb-2">
                      Collection {item}
                    </h3>
                    <p className="font-body text-sm text-background-light/90">
                      Sculptural forms in impossible settings, challenging perception and inviting contemplation.
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.6}>
            <div className="text-center mt-16">
              <Link
                href="/collections"
                className="inline-block font-body text-sm uppercase tracking-widest border-b border-transparent hover:border-accent-green transition-colors duration-300"
              >
                View all collections
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Craftsmanship - Process */}
      <section className="py-24 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <RevealSection>
            <h2 className="section-title text-center">Craftsmanship</h2>
            <p className="body-text text-center max-w-2xl mx-auto mb-16">What the machine cannot replicate</p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <RevealSection delay={0.2}>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="section-subtitle">Material Selection</h3>
                  <p className="body-text">
                    Each piece begins with the careful selection of materials. We source only the finest woods, metals,
                    and textiles, each chosen for their unique character and potential.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="section-subtitle">Artisan Technique</h3>
                  <p className="body-text">
                    Our master craftspeople employ techniques passed down through generations, their hands guided by
                    both tradition and innovation.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="section-subtitle">Finishing Touch</h3>
                  <p className="body-text">
                    The final stage is a meticulous process of refinement, where each surface is perfected and every
                    detail considered.
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/process"
                    className="inline-block font-body text-sm uppercase tracking-widest text-accent-green hover:opacity-80 transition-opacity duration-300"
                  >
                    Explore our process
                  </Link>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.4}>
              <div className="h-[600px] md:h-[700px] relative">
                <ParallaxImage
                  src="/Frame 6.png?height=900&width=600&text=Craftsmanship"
                  alt="Artisan hands working on a piece"
                  className="h-full"
                />
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-deep-neutral/80 p-6 md:p-8 max-w-xs text-center">
                  <p className="font-display text-background-light text-lg md:text-xl tracking-wider">
                    "Born of Process. Designed to Endure."
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Manifesto - Brand Identity */}
      <section className="py-24 md:py-32 bg-deep-neutral text-background-light relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/brand.png?height=1080&width=1920&text=Texture"
            alt="Workshop textures"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <RevealSection>
            <h2 className="section-title text-center">Manifesto</h2>
          </RevealSection>

          <RevealSection delay={0.3}>
            <div className="max-w-3xl mx-auto text-center space-y-8 mt-16">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl tracking-wider leading-relaxed">
                House of Esthete is where Form finds Soul.
              </p>

              <p className="body-text opacity-90">
                We believe in the power of objects to transform spaces and experiences. Each piece we create is a
                testament to the enduring value of craftsmanship in an age of mass production.
              </p>

              <p className="body-text opacity-90">
                Our collections are not defined by trends but by a timeless aesthetic that speaks to those who value
                authenticity, quality, and the subtle poetry of well-crafted objects.
              </p>

              <p className="body-text opacity-90">
                We invite you to discover the House of Esthete—a sanctuary for those who seek beauty in its most
                essential form.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.5}>
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-block font-body text-sm uppercase tracking-widest border border-background-light/30 px-8 py-3 hover:bg-background-light hover:text-deep-neutral transition-all duration-300"
              >
                Connect with us
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <RevealSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-subtitle mb-6">Join Our Journal</h2>
              <p className="body-text mb-8">
                Subscribe to receive curated insights into our process, new collections, and exclusive events.
              </p>

              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-transparent border border-deep-neutral/30 focus:border-deep-neutral focus:outline-none font-body text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-accent-green text-background-light font-body text-sm uppercase tracking-widest hover:bg-accent-green/90 transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
