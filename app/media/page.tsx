"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import RevealSection from "@/components/reveal-section"

const mediaItems = [
  {
    id: 1,
    title: "House of Esthete Featured in Architectural Digest",
    excerpt: "Our Duchess Chair and Basilisk Bar Counter were featured in Architectural Digest's annual design issue.",
    date: "May 2025",
    image: "/Frame 5.png?height=600&width=800&text=Media 1",
    link: "#",
  },
  {
    id: 2,
    title: "The Craft of Luxury: An Interview with Our Founders",
    excerpt:
      "An in-depth conversation about the philosophy and process behind House of Esthete's distinctive approach to design.",
    date: "April 2025",
    image: "/Frame 6.png?height=600&width=800&text=Media 2",
    link: "#",
  },
  {
    id: 3,
    title: "Behind the Scenes: The Making of Rise of the Great",
    excerpt:
      "A photo essay documenting the creation of our signature standing artefact, from initial sketch to final piece.",
    date: "March 2025",
    image: "/Frame 7.png?height=600&width=800&text=Media 3",
    link: "#",
  },
  {
    id: 4,
    title: "House of Esthete Launches New Collection",
    excerpt:
      "Our latest collection, inspired by architectural forms and natural materials, debuts to critical acclaim.",
    date: "February 2025",
    image: "/Frame 8.png?height=600&width=800&text=Media 4",
    link: "#",
  },
  {
    id: 5,
    title: "The Art of Slow Design: A Conversation with Our Design Director",
    excerpt:
      "An exploration of our deliberate approach to design and the value of taking time to create objects of lasting beauty.",
    date: "January 2025",
    image: "/Frame 9.png?height=600&width=800&text=Media 5",
    link: "#",
  },
  {
    id: 6,
    title: "House of Esthete Featured in Design Week",
    excerpt: "Our installation at Design Week was highlighted as one of the standout presentations of the event.",
    date: "December 2024",
    image: "/Frame 4.png?height=600&width=800&text=Media 6",
    link: "#",
  },
]

export default function MediaPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Frame 4.png?height=1080&width=1920&text=Media"
            alt="House of Esthete media coverage"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-deep-neutral/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-background-light">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] mb-6">Media</h1>
          <p className="font-body text-lg md:text-xl tracking-wider max-w-2xl">
            Explore features, interviews, and stories about House of Esthete.
          </p>
        </div>
      </section>

      {/* Media Grid */}
      <section ref={ref} className="py-24 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1,
                }}
                className="group"
              >
                <Link href={item.link} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-accent-green/0 transition-all duration-500 group-hover:bg-accent-green/20"></div>
                  </div>
                  <p className="font-body text-sm text-deep-neutral/70 mb-2">{item.date}</p>
                  <h3 className="font-display text-xl tracking-wider mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-deep-neutral/80">{item.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      {/* <section className="py-24 md:py-32 bg-background-dark text-background">
        <div className="container mx-auto px-6">
          <RevealSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-title mb-6">Press Kit</h2>
              <p className="body-text mb-8">
                Download our press kit for high-resolution images, product information, and brand assets.
              </p>

              <Link
                href="#"
                className="inline-block font-body text-sm uppercase tracking-widest border border-background-light/30 px-8 py-3 hover:bg-background-light hover:text-deep-neutral transition-all duration-300"
              >
                Download Press Kit
              </Link>
            </div>
          </RevealSection>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <RevealSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-title mb-6">Media Inquiries</h2>
              <p className="body-text mb-8">For press and media inquiries, please contact our communications team.</p>

              <div className="font-body text-center">
                <p className="mb-2">press@houseofesthete.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
