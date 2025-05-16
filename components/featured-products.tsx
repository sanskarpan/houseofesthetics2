"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

const products = [
  {
    id: "duchess",
    name: "Duchess",
    type: "Chair",
    description: "An elegant chair with refined proportions and timeless appeal.",
    image: "/duchess/Duchess6.jpg", // Assuming this is /public/duchess/Duchess6.jpg
    slug: "duchess-chair",
  },
  {
    id: "vayuvega",
    name: "Vayuvega",
    type: "Night Stand",
    description: "A sculptural night stand that combines functionality with artistic form.",
    image: "/vayuvega/Vayuvega2.jpg",
    slug: "vayuvega-night-stand",
  },
  {
    id: "pinetta",
    name: "Pinetta",
    type: "Booze Stand",
    description: "A sophisticated booze stand crafted with meticulous attention to detail.",
    image: "/pinetta/Pinetta3.jpg",
    slug: "pinetta-booze-stand",
  },
  {
    id: "rise-of-the-great",
    name: "Rise of the Great",
    type: "Standing Artefact",
    description: "A statement piece that serves as both functional art and conversation starter.",
    image: "/rise-of-the-great/Rise2.jpg",
    slug: "rise-of-the-great-artefact",
  },
  {
    id: "basilisk",
    name: "Basilisk",
    type: "Bar Counter",
    description: "An architectural bar counter that transforms any space into a luxurious entertainment area.",
    image: "/basilisk/Basilisk2.jpg",
    slug: "basilisk-bar-counter",
  },
]

export default function FeaturedProducts() {
  const ref = useRef(null)
  // Consider a slightly larger amount for when the animation triggers
  const isInView = useInView(ref, { once: true, amount: 0.2 }) 

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Changed to y for consistency
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Explore Our Products</h2>
          <p className="body-text max-w-2xl mx-auto tracking-body-loose">
            A curated selection of our signature pieces, each embodying the House of Esthete philosophy.
          </p>
        </motion.div>

        {/* Option 1: Animate the grid container once, children fade in with stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15, // Stagger children if they have their own simple variants
                delayChildren: 0.2, // Delay children slightly after parent is visible
                duration: 0.5,
              },
            },
          }}
        >
          {products.map((product) => (
            // Simpler animation for each card, or rely on parent's staggerChildren
            <motion.div
              key={product.id}
              className="group"
              variants={{ // Child variants for staggerChildren
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative aspect-square overflow-hidden mb-4 bg-gray-100"> {/* Added bg for loading placeholder */}
                  <Image
                    src={product.image || "/placeholder.svg"} // Ensure placeholder.svg exists
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    // CRITICAL: Add sizes prop for images with fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false} // Set true only for above-the-fold critical images
                  />
                  <div className="absolute inset-0 bg-accent-green/0 transition-all duration-500 group-hover:bg-accent-green/20"></div>
                </div>
                <h3 className="font-display text-xl tracking-wider mb-1">{product.name}</h3>
                <p className="font-body text-sm text-deep-neutral/80 mb-2 tracking-body-loose">{product.type}</p>
                <p className="font-body text-sm text-deep-neutral/70 tracking-body-loose">{product.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link
            href="/collections"
            className="inline-block font-body text-sm uppercase tracking-widest border border-deep-neutral/30 px-8 py-3 hover:bg-accent-green hover:border-accent-green hover:text-background-light transition-all duration-300"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  )
}