"use client"

import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import RevealSection from "@/components/reveal-section"
import ProductCarousel from "@/components/product-carousel"
import ManufacturingVideo from "@/components/manufacturing-video"
import QuoteSection from "@/components/quote-section"
import FeaturedProducts from "@/components/featured-products"
import Link from "next/link"
import Image from "next/image"

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
      {/* Hero Section with Product Carousel */}
      <ProductCarousel />

      {/* Design Philosophy - Origins */}
      <section className="py-24 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <RevealSection>
            <h2 className="section-title text-center mb-16">Design Philosophy</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <RevealSection delay={0.2} direction="left">
              <div className="h-[500px] md:h-[600px] relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600&text=Design Process"
                  alt="Archival sketches and design process"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealSection>

            <div className="flex flex-col justify-center">
              <RevealSection delay={0.4} direction="right">
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
                  <Link href="/story" className="font-body text-sm uppercase tracking-widest">
                    Discover our story
                    <span className="block h-[1px] w-0 bg-accent-green absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Video Section */}
      <ManufacturingVideo />

      {/* Quote Section */}
      <QuoteSection />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Manifesto - Brand Identity */}
      <section className="py-24 md:py-32 bg-deep-neutral text-background-light relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Texture"
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
