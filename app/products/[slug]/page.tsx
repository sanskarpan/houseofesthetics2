"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductInquiry from "@/components/product-inquiry"
import { motion, useInView } from "framer-motion"

const productSpecificWhatsAppLink = "https://wa.me/919848000000"

// Define custom finish types for better type safety
type StandardFinish = {
  type: "standard"
  categories: {
    [category: string]: string[]
  }
}

type MaterialOptionsFinish = {
  type: "material-options"
  options: {
    title: string
    materials: {
      name: string
      color: string
      image?: string
    }[]
  }[]
}

type SingleOptionFinish = {
  type: "single-option"
  option: string
  color: string
}

type ColorOptionsFinish = {
  type: "color-options"
  options: {
    name: string
    color: string
    textColor?: string
  }[]
}

type WoodOptionsFinish = {
  type: "wood-options"
  options: {
    title: string
    woodType: string
    metalType: string
    woodColor: string
    metalColor: string
    image?: string
  }[]
}

type ProductFinish =
  | StandardFinish
  | MaterialOptionsFinish
  | SingleOptionFinish
  | ColorOptionsFinish
  | WoodOptionsFinish

// Updated product data with specific finish types
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
      type: "material-options",
      options: [
        {
          materials: [
            { name: "Mango Wood", color: "bg-amber-700" },
            { name: "Brushed Steel", color: "bg-gray-400" },
            { name: "Black Leather", color: "bg-gray-900" },
          ],
        },
      ],
    } as MaterialOptionsFinish,
    images: ["/duchess/Duchess_Black.png", "/duchess/Duchess2.jpg", "/duchess/Duchess3.jpg", "/duchess/Duchess4.jpg"],
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
      type: "single-option",
      option: "White",
      color: "bg-white border border-gray-200",
    } as SingleOptionFinish,
    images: [
      "/vayuvega/Vayuvega2.jpg",
      "/vayuvega/Vayuvega1.jpg",
      "/vayuvega/Vayuvega3.jpg",
      "/vayuvega/Vayuvega4.jpg",
    ],
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
      type: "wood-options",
      options: [
        {
          title: "Sheesham",
          woodType: "Sheesham",
          metalType: "Brushed Steel",
          woodColor: "bg-amber-700",
          metalColor: "bg-gray-400",
        },
        {
          title: "Black Oak",
          woodType: "Black Oak",
          metalType: "Satin Chrome",
          woodColor: "bg-gray-800",
          metalColor: "bg-gray-300",
        },
      ],
    } as WoodOptionsFinish,
    images: ["/pinetta/Pinetta_Black.png", "/pinetta/Pinetta2.jpg", "/pinetta/Pinetta3.jpg", "/pinetta/Pinetta4.jpg"],
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
      type: "color-options",
      options: [
        {
          name: "Blaze Red",
          color: "bg-red-600",
          textColor: "text-white",
        },
        {
          name: "Pineapple Yellow",
          color: "bg-yellow-400",
          textColor: "text-black",
        },
        {
          name: "French racing Blue",
          color: "bg-blue-500",
          textColor: "text-white",
        },
      ],
    } as ColorOptionsFinish,
    images: [
      "/rise-of-the-great/Rise_Black.png",
      "/rise-of-the-great/Rise2.jpg",
      "/rise-of-the-great/Rise1.jpg",
      "/rise-of-the-great/Rise3.jpg",
    ],
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
      type: "single-option",
      option: "Black",
      color: "bg-gray-900",
    } as SingleOptionFinish,
    images: [
      "/basilisk/Basilisk_Black.png",
      "/basilisk/Basilisk2.jpg",
      "/basilisk/Basilisk3.jpg",
      "/basilisk/Basilisk1.jpg",
    ],
    slug: "basilisk-bar-counter",
  },
]

// Color mapping for standard finishes
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
  White: "bg-white border border-gray-200",
  Black: "bg-gray-900",
}

// Component for consistent square option display
const OptionSquare = ({ color, image, name }: { color: string; image?: string; name: string }) => (
  <div className="flex flex-col items-center gap-2">
    {image ? (
      <div className="w-24 h-24 overflow-hidden border border-gray-200">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>
    ) : (
      <div className={`w-24 h-24 ${color} border border-gray-200`} title={name}></div>
    )}
    <span className="text-sm font-['Quicksand'] text-center">{name}</span>
  </div>
)

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
          <h1 className="text-2xl font-display mb-4 lowercase tracking-tighter">product not found</h1>
          <Link href="/collections" className="text-accent-black hover:underline">
            view all collections
          </Link>
        </div>
      </div>
    )
  }

  // Use the product's actual images
  const thumbnails = product.images

  // Render finishes based on the finish type
  const renderFinishes = () => {
    const finishes = product.finishes as ProductFinish

    switch (finishes.type) {
      case "standard":
        return (
          <div className="space-y-6">
            {Object.entries(finishes.categories).map(([category, options]) => (
              <div key={category} className="mb-6">
                <h4 className="font-display text-base mb-4 capitalize">{category}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {options.map((option) => (
                    <OptionSquare
                      key={option}
                      color={colorMap[option as keyof typeof colorMap] || "bg-gray-300"}
                      name={option}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )

      case "material-options":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {finishes.options.flatMap((option) =>
              option.materials.map((material, idx) => (
                <OptionSquare
                  key={`${material.name}-${idx}`}
                  color={material.color}
                  image={material.image}
                  name={material.name}
                />
              )),
            )}
          </div>
        )

      case "wood-options":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {finishes.options.map((option, index) => (
              <div key={index} className="space-y-4">
                <OptionSquare color={option.woodColor} image={option.image} name={option.woodType} />
                <div className="w-6 h-0.5 bg-gray-400 mx-auto my-3"></div>
                <OptionSquare color={option.metalColor} name={option.metalType} />
              </div>
            ))}
          </div>
        )

      case "color-options":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {finishes.options.map((option, index) => (
              <OptionSquare key={index} color={option.color} name={option.name} />
            ))}
          </div>
        )

      case "single-option":
        return (
          <div className="flex justify-start">
            <OptionSquare color={finishes.color} name={finishes.option} />
          </div>
        )

      default:
        return null
    }
  }

  // Get the appropriate section title
  const getSectionTitle = () => {
    const finishes = product.finishes as ProductFinish

    if (product.id === "duchess") {
      return "Material Options"
    } else if (finishes.type === "color-options" || finishes.type === "wood-options") {
      return "Colour Options"
    } else {
      return "finishes"
    }
  }

  return (
    <div className="pt-24 min-h-screen bg-background-light">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center text-sm">
          <Link href="/" className="hover:text-accent-black transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <Link href="/collections" className="hover:text-accent-black transition-colors">
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
            {/* Main image container */}
            <div className="aspect-square relative mb-4 bg-gray-100 overflow-hidden">
              <Image
                src={thumbnails[selectedImage] || "/placeholder.svg"}
                alt={`${product.name} ${product.type}`}
                sizes="1000px"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square relative border ${
                    selectedImage === i ? "border-accent-black" : "border-gray-200"
                  } overflow-hidden transition-all duration-300 hover:opacity-90`}
                >
                  <Image
                    src={thumb || "/placeholder.svg"}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover"
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
            <h1 className="brand-title text-3xl md:text-4xl mb-4">
              {product.name} {product.type}
            </h1>

            <p className="font-['Quicksand'] mb-8">{product.description}</p>

            <div className="mb-8">
              <h3 className="section-subtitle">available size (in mm)</h3>
              <p className="font-['Quicksand']">{product.dimensions}</p>
            </div>

            <div className="mb-8">
              <h3 className="section-subtitle">details</h3>
              <ul className="space-y-1">
                {product.details.map((detail, index) => (
                  <li key={index} className="font-['Quicksand']">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="section-subtitle">designed by</h3>
              <p className="font-['Quicksand']">{product.designer}</p>
            </div>

            {/* Options Section */}
            <div className="mb-8">
              {getSectionTitle() === "Colour Options" || getSectionTitle() === "Material Options" ? (
                <h3 className="font-display text-3xl tracking-wide mb-6">{getSectionTitle()}</h3>
              ) : (
                <h3 className="section-subtitle">{getSectionTitle()}</h3>
              )}

              {renderFinishes()}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="inline-block font-['Quicksand'] text-sm uppercase tracking-widest border border-deep-neutral px-8 py-3 hover:bg-accent-black hover:border-accent-black hover:text-background-light transition-all duration-300"
              >
                Enquire
              </button>
              <Link
                href={productSpecificWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 border border-deep-neutral rounded-sm text-deep-neutral hover:bg-black-500 hover:text-white hover:border-black-500 transition-all duration-300"
                aria-label="Inquire on WhatsApp"
                title="Inquire on WhatsApp"
              >
                <Image src="/whatsappIcon.png" alt="Whatsapp" width={24} height={24} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-16 bg-background-dark">
        <div className="container mx-auto px-6">
          <h2 className="section-title">related products</h2>

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
                        src={relatedProduct.images?.[0] || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="brand-title text-lg mb-1">{relatedProduct.name}</h3>
                    <p className="font-['Quicksand'] text-sm">{relatedProduct.type}</p>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <ProductInquiry
        productName={`${product.name} ${product.type}`}
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  )
}
