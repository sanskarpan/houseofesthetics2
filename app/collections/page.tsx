"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

const categories = [
  { id: "all", name: "All" },
  { id: "seating", name: "Seating" },
  { id: "tables", name: "Tables" },
  { id: "storage", name: "Storage" },
  { id: "artefacts", name: "Artefacts" },
]

const products = [
  {
    id: "duchess",
    name: "Duchess",
    type: "Chair",
    category: "seating",
    description: "An elegant chair with refined proportions and timeless appeal.",
    image: "/duchess/Duchess1.jpg",
    slug: "duchess-chair",
  },
  {
    id: "vayuvega",
    name: "Vayuvega",
    type: "Night Stand",
    category: "storage",
    description: "A sculptural night stand that combines functionality with artistic form.",
    image: "/vayuvega/Vayuvega2.jpg",
    slug: "vayuvega-night-stand",
  },
  {
    id: "pinetta",
    name: "Pinetta",
    type: "Booze Stand",
    category: "storage",
    description: "A sophisticated booze stand crafted with meticulous attention to detail.",
    image: "/pinetta/Pinetta2.jpg",
    slug: "pinetta-booze-stand",
  },
  {
    id: "rise-of-the-great",
    name: "Rise of the Great",
    type: "Standing Artefact",
    category: "artefacts",
    description: "A statement piece that serves as both functional art and conversation starter.",
    image: "/rise-of-the-great/Rise3.jpg",
    slug: "rise-of-the-great-artefact",
  },
  {
    id: "basilisk",
    name: "Basilisk",
    type: "Bar Counter",
    category: "storage",
    description: "An architectural bar counter that transforms any space into a luxurious entertainment area.",
    image: "/basilisk/Basilisk3.jpg",
    slug: "basilisk-bar-counter",
  },
]

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/carousel/Carousel2.jpeg?height=1080&width=1920&text=Our Collections"
            alt="House of Esthete collections"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-deep-neutral/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-background-light">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] mb-6">
            Our Collections
          </h1>
          <p className="font-body text-lg md:text-xl tracking-wider max-w-2xl">
            Discover our curated selection of timeless pieces, each embodying the House of Esthete philosophy.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background-light border-b border-deep-neutral/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`font-display text-sm tracking-wider uppercase transition-colors duration-300 pb-2 relative ${
                  activeCategory === category.id ? "text-accent-green" : "text-deep-neutral hover:text-accent-green"
                }`}
              >
                {category.name}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-green"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={ref} className="py-24 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1,
                }}
                className="group"
              >
                <Link href={`/products/${product.slug}`} className="block">
                  <div className="relative aspect-square overflow-hidden mb-6 bg-gray-100">
                    <Image
                      src={product.image || "/carousel/Carousel2.jpeg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-accent-green/0 transition-all duration-500 group-hover:bg-accent-green/10"></div>
                  </div>
                  <h3 className="font-display text-xl tracking-wider mb-1">{product.name}</h3>
                  <p className="font-body text-sm text-deep-neutral/80 mb-2">{product.type}</p>
                  <p className="font-body text-sm text-deep-neutral/70">{product.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      {/* <section className="py-24 md:py-32 bg-deep-neutral text-background-light">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-6">Complete Catalog</h2>
            <p className="font-body text-lg mb-8">
              Download our complete catalog to explore our full range of collections and discover the craftsmanship
              behind each piece.
            </p>
            <a
              href="#"
              className="inline-block font-body text-sm uppercase tracking-widest border border-background-light/30 px-8 py-3 hover:bg-background-light hover:text-deep-neutral transition-all duration-300"
            >
              Download Catalog
            </a>
          </div>
        </div>
      </section> */}
    </div>
  )
}
