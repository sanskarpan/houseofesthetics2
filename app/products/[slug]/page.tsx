"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductInquiry from "@/components/product-inquiry"
import { motion, useInView } from "framer-motion"

const productSpecificWhatsAppLink = "https://wa.me/919848000000";
const products = [
  {
    id: "duchess",
    name: "Duchess",
    type: "Chair",
    description:
      "The Duchess chair has a rigorous geometric volume with elegant proportions. The chair features a comfortable upholstered seat and backrest, supported by a sleek metal frame. The minimal cubist style chair has a simple design with a strong identity and attention to detail.",
    dimensions: "600 L x 550 D x 750 H (mm)",
    details: [
      "Structure - Metal frame",
      "Base - Solid wood",
      "Upholstery - Premium fabric or leather",
      "Cushions - High-density foam",
    ],
    designer: "House of Esthete Design Studio",
    finishes: {
      metal: ["Brass", "Bronze", "Graphite", "Copper"],
      wood: ["Walnut", "Oak", "Ebony"],
      fabric: ["Linen", "Velvet", "Wool", "Leather"],
    },
    image: "/duchess/Duchess1.jpg",
    slug: "duchess-chair",
  },
  {
    id: "vayuvega",
    name: "Vayuvega",
    type: "Night Stand",
    description:
      "The Vayuvega night stand combines functionality with sculptural form. Its geometric silhouette features clean lines and a floating appearance, with a drawer for storage and an open shelf for display. The piece is crafted from premium materials with meticulous attention to detail.",
    dimensions: "450 L x 400 D x 550 H (mm)",
    details: [
      "Structure - Solid wood frame",
      "Drawer - Soft-close mechanism",
      "Base - Metal with adjustable feet",
      "Finish - Hand-applied lacquer",
    ],
    designer: "House of Esthete Design Studio",
    finishes: {
      metal: ["Brass", "Bronze", "Graphite"],
      wood: ["Walnut", "Oak", "Ash", "Maple"],
    },
    image: "/vayuvega/Vayuvega1.jpg",
    slug: "vayuvega-night-stand",
  },
  {
    id: "pinetta",
    name: "Pinetta",
    type: "Booze Stand",
    description:
      "The Pinetta booze stand is a sophisticated bar solution that combines storage and display. Its architectural form features a combination of open shelving and enclosed storage, with integrated lighting to showcase prized bottles. The piece is crafted with premium materials and exceptional attention to detail.",
    dimensions: "900 L x 450 D x 1200 H (mm)",
    details: [
      "Structure - Solid wood and metal",
      "Shelves - Tempered glass",
      "Storage - Soft-close drawers",
      "Lighting - Integrated LED",
    ],
    designer: "House of Esthete Design Studio",
    finishes: {
      metal: ["Brass", "Bronze", "Graphite", "Copper"],
      wood: ["Walnut", "Oak", "Ebony"],
      stone: ["Marble", "Granite", "Travertine"],
    },
    image: "/pinetta/Pinetta1.jpg",
    slug: "pinetta-booze-stand",
  },
  {
    id: "rise-of-the-great",
    name: "Rise of the Great",
    type: "Standing Artefact",
    description:
      "Rise of the Great is a sculptural piece that blurs the line between functional object and art. Its abstract form creates a striking visual presence in any space, while also serving as a unique conversation piece. Crafted from premium materials with a focus on texture and form.",
    dimensions: "400 L x 400 D x 1500 H (mm)",
    details: ["Structure - Cast metal", "Base - Natural stone", "Finish - Hand-applied patina", "Weight - 45 kg"],
    designer: "House of Esthete Design Studio",
    finishes: {
      metal: ["Bronze", "Brass", "Blackened Steel"],
      stone: ["Marble", "Granite", "Limestone", "Travertine"],
    },
    image: "/rise-of-the-great/Rise3.jpg",
    slug: "rise-of-the-great-artefact",
  },
  {
    id: "basilisk",
    name: "Basilisk",
    type: "Bar Counter",
    description:
      "The Basilisk bar counter is an architectural statement piece that transforms any space into a sophisticated entertainment area. Its geometric form combines functionality with sculptural elegance, featuring ample storage and a generous serving surface. Crafted with exceptional materials and attention to detail.",
    dimensions: "1800 L x 600 D x 1050 H (mm)",
    details: [
      "Structure - Solid wood frame",
      "Counter - Natural stone",
      "Storage - Soft-close drawers and cabinets",
      "Shelving - Tempered glass with integrated lighting",
    ],
    designer: "House of Esthete Design Studio",
    finishes: {
      metal: ["Brass", "Bronze", "Graphite", "Copper"],
      wood: ["Walnut", "Oak", "Ebony"],
      stone: ["Marble", "Granite", "Quartzite"],
    },
    image: "/basilisk/Basilisk1.jpg",
    slug: "basilisk-bar-counter",
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display mb-4">Product Not Found</h1>
          <Link href="/collections" className="text-accent-green hover:underline">
            View all collections
          </Link>
        </div>
      </div>
    )
  }

  // Generate thumbnail images (in a real app, these would be actual different views)
  const thumbnails = [product.image, product.image, product.image, product.image, product.image]

  // Generate color swatches for finishes
  const colorMap = {
    Brass: "bg-yellow-700",
    Bronze: "bg-amber-800",
    Graphite: "bg-gray-700",
    Copper: "bg-orange-700",
    Walnut: "bg-amber-900",
    Oak: "bg-yellow-100",
    Ebony: "bg-gray-900",
    Ash: "bg-gray-200",
    Maple: "bg-yellow-50",
    Marble: "bg-gray-100",
    Granite: "bg-gray-500",
    Travertine: "bg-yellow-200",
    Limestone: "bg-gray-300",
    Quartzite: "bg-gray-400",
    Linen: "bg-yellow-50",
    Velvet: "bg-purple-900",
    Wool: "bg-gray-300",
    Leather: "bg-amber-800",
    "Blackened Steel": "bg-gray-800",
  }

  return (
    <div className="pt-24 min-h-screen bg-background-light">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center text-sm">
          <Link href="/" className="hover:text-accent-green transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <Link href="/collections" className="hover:text-accent-green transition-colors">
            Collections
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-deep-neutral/70">
            {product.name} {product.type}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-6 py-8" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-square relative mb-4 bg-gray-100">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={`${product.name} ${product.type}`}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square relative border ${
                    selectedImage === i ? "border-accent-green" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={thumb || "/placeholder.svg"}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h1 className="font-display text-3xl md:text-4xl tracking-wider mb-4">
              {product.name} {product.type}
            </h1>

            <p className="body-text mb-8">{product.description}</p>

            <div className="mb-8">
              <h3 className="font-display text-lg tracking-wider mb-2">Available Size (in mm)</h3>
              <p className="font-body">{product.dimensions}</p>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-lg tracking-wider mb-2">Details</h3>
              <ul className="space-y-1">
                {product.details.map((detail, index) => (
                  <li key={index} className="font-body">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-lg tracking-wider mb-2">Designed By</h3>
              <p className="font-body">{product.designer}</p>
            </div>

            {/* Finishes */}
            <div className="mb-8">
              <h3 className="font-display text-lg tracking-wider mb-4">Finishes</h3>

              {Object.entries(product.finishes).map(([category, options]) => (
                <div key={category} className="mb-6">
                  <h4 className="font-display text-base mb-2 capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {options.map((option:any) => (
                      <div
                        key={option}
                        className={`w-12 h-12 rounded-full ${colorMap[option as keyof typeof colorMap] || "bg-gray-300"} flex items-center justify-center`}
                        title={option}
                      >
                        <span className="sr-only">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="inline-block font-body text-sm uppercase tracking-widest border border-deep-neutral px-8 py-3 hover:bg-accent-green hover:border-accent-green hover:text-background-light transition-all duration-300"
            >
              Enquire
            </button>
            <Link
              href={productSpecificWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 border border-deep-neutral rounded-sm text-deep-neutral hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
              aria-label="Inquire on WhatsApp"
              title="Inquire on WhatsApp"
            >
              <Image
                src="/whatsappIcon.png"
                alt="Whatsapp"
                width={24}
                height={24}
              />
            </Link>
          </div>

          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-16 bg-background-dark">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl tracking-wider mb-8">Related Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2 + index * 0.1,
                  }}
                  className="group"
                >
                  <Link href={`/products/${relatedProduct.slug}`}>
                    <div className="relative aspect-square overflow-hidden mb-4 bg-gray-100">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-display text-lg tracking-wider mb-1">{relatedProduct.name}</h3>
                    <p className="font-body text-sm">{relatedProduct.type}</p>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Product Inquiry Modal */}
      <ProductInquiry
        productName={`${product.name} ${product.type}`}
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  )
}
