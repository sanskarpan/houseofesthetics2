"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductInquiry from "@/components/product-inquiry"

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
    image: "/prod1.png",
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
    image: "/prod2.png",
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
    image: "/prod3.png",
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
    image: "/prod4.png",
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
    image: "/prod5.png",
    slug: "basilisk-bar-counter",
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)

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

  return (
    <div className="pt-24 min-h-screen">
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
          <span className="text-deep-neutral/70">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square relative mb-4">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-display text-3xl md:text-4xl tracking-wider mb-2">
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
                    {options.map((option) => (
                      <div
                        key={option}
                        className="w-12 h-12 rounded-full bg-background-dark flex items-center justify-center"
                      >
                        <span className="sr-only">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsInquiryOpen(true)}
              className="inline-block font-body text-sm uppercase tracking-widest border border-deep-neutral px-8 py-3 hover:bg-accent-green hover:border-accent-green hover:text-background-light transition-all duration-300"
            >
              Enquire
            </button>
          </div>
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
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="group">
                  <Link href={`/products/${relatedProduct.slug}`}>
                    <div className="relative aspect-square overflow-hidden mb-4">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-display text-lg tracking-wider mb-1">{relatedProduct.name}</h3>
                    <p className="font-body text-sm">{relatedProduct.type}</p>
                  </Link>
                </div>
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
