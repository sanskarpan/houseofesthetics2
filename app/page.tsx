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
            <h2 className="section-title text-center mb-16">design philosophy</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <RevealSection delay={0.2} direction="left">
              <div className="h-[500px] md:h-[600px] relative overflow-hidden">
                <Image
                  src="/plantImages/plantImg1.jpeg?height=800&width=600&query=Design Process"
                  alt="Archival sketches and design process"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealSection>

            <div className="flex flex-col justify-center">
              <RevealSection delay={0.4} direction="right">
                <h3 className="section-subtitle">origins</h3>
                <p className="body-text mb-8">
                  house of esthete emerged from a singular vision: to create objects that transcend their function and
                  become vessels of meaning. each piece begins as a dialogue between material and intent, form and
                  purpose.
                </p>
                <p className="body-text mb-12">
                  our atelier stands at the intersection of traditional craftsmanship and contemporary design language,
                  creating pieces that honor the past while speaking to the present.
                </p>
                <div className="inline-block relative group">
                  <Link href="/story" className="font-body text-sm lowercase tracking-wide">
                    discover our story
                    <span className="block h-[1px] w-0 bg-accent-black absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
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
            src="/brand.png?height=1080&width=1920&query=Texture"
            alt="Workshop textures"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <RevealSection>
            <h2 className="section-title text-center">manifesto</h2>
          </RevealSection>

          <RevealSection delay={0.3}>
            <div className="max-w-3xl mx-auto text-center space-y-8 mt-16">
              <p className="brand-title">house of esthete is where form finds soul.</p>

              <p className="body-text opacity-90">
                we believe in the power of objects to transform spaces and experiences. each piece we create is a
                testament to the enduring value of craftsmanship in an age of mass production.
              </p>

              <p className="body-text opacity-90">
                our collections are not defined by trends but by a timeless aesthetic that speaks to those who value
                authenticity, quality, and the subtle poetry of well-crafted objects.
              </p>

              <p className="body-text opacity-90">
                we invite you to discover the house of esthete—a sanctuary for those who seek beauty in its most
                essential form.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.5}>
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-block font-body text-sm lowercase tracking-wide border border-background-light/30 px-8 py-3 hover:bg-background-light hover:text-deep-neutral transition-all duration-300"
              >
                connect with us
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
