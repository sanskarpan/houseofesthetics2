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
    image: "/Frame 8.png",
    slug: "duchess-chair",
  },
  {
    id: "vayuvega",
    name: "Vayuvega",
    type: "Night Stand",
    description: "A sculptural night stand that combines functionality with artistic form.",
    image: "/Frame 6.png",
    slug: "vayuvega-night-stand",
  },
  {
    id: "pinetta",
    name: "Pinetta",
    type: "Booze Stand",
    description: "A sophisticated booze stand crafted with meticulous attention to detail.",
    image: "/Frame 5.png",
    slug: "pinetta-booze-stand",
  },
  {
    id: "rise-of-the-great",
    name: "Rise of the Great",
    type: "Standing Artefact",
    description: "A statement piece that serves as both functional art and conversation starter.",
    image: "/Frame 4.png",
    slug: "rise-of-the-great-artefact",
  },
  {
    id: "basilisk",
    name: "Basilisk",
    type: "Bar Counter",
    description: "An architectural bar counter that transforms any space into a luxurious entertainment area.",
    image: "/Frame 9.png",
    slug: "basilisk-bar-counter",
  },
]

export default function FeaturedProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Explore Our Products</h2>
          <p className="body-text max-w-2xl mx-auto">
            A curated selection of our signature pieces, each embodying the House of Esthete philosophy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
              }}
              className="group"
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative aspect-square overflow-hidden mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-accent-green/0 transition-all duration-500 group-hover:bg-accent-green/20"></div>
                </div>
                <h3 className="font-display text-xl tracking-wider mb-1">{product.name}</h3>
                <p className="font-body text-sm text-deep-neutral/80 mb-2">{product.type}</p>
                <p className="font-body text-sm text-deep-neutral/70">{product.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

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
