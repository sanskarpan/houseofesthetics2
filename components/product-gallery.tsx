"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

const products = [
  {
    id: 1,
    name: "Sculptural Vase",
    description: "Hand-thrown ceramic with a textured matte finish.",
    image: "/placeholder.svg?height=800&width=600&text=Product 1",
  },
  {
    id: 2,
    name: "Woven Armchair",
    description: "Natural rattan with brass-finished steel frame.",
    image: "/placeholder.svg?height=800&width=600&text=Product 2",
  },
  {
    id: 3,
    name: "Marble Coffee Table",
    description: "Carrara marble with hand-finished brass details.",
    image: "/placeholder.svg?height=800&width=600&text=Product 3",
  },
  {
    id: 4,
    name: "Linen Throw Pillow",
    description: "Hand-loomed linen with natural vegetable dyes.",
    image: "/placeholder.svg?height=800&width=600&text=Product 4",
  },
]

export default function ProductGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-24 md:py-32 bg-background-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Collection</h2>
          <p className="body-text max-w-2xl mx-auto">
            Each piece is a testament to our commitment to timeless design and exceptional craftsmanship.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="group">
              <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accent-green/0 transition-all duration-500 group-hover:bg-accent-green/20"></div>
              </div>
              <h3 className="font-display text-xl tracking-wider mb-2">{product.name}</h3>
              <p className="font-body text-sm text-deep-neutral/80 mb-4">{product.description}</p>
              <Link
                href={`/collections/${product.id}`}
                className="inline-block font-body text-xs uppercase tracking-widest text-accent-green hover:opacity-80 transition-opacity duration-300"
              >
                Discover
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
