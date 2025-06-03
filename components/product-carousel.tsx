"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slidesData = [
  // {
  //   id: 0,
  //   image: null,
  //   alt: "House of Esthete - Beyond The Threshold",
  //   title: "beyond the threshold",
  //   ctaText: "discover the essence",
  //   ctaLink: "/story",
  //   isPlainWhite: true,
  // },
  {
    id: 1,
    image: "/Basilisk_Carousel.png?text=Basilisk+Bar+Counter",
    alt: "Basilisk - Luxury Bar Counter",
    title: "",
    ctaText: "",
    ctaLink: "/products/basilisk-bar-counter",
    isPlainWhite: false,
  },
  {
    id: 2,
    image: "/Vayuvega_Carousel.png?text=VayuVega+Night+Stand",
    alt: "VayuVega - Elegant Night Stand",
    title: "",
    ctaText: "",
    ctaLink: "/products/vayuvega-night-stand",
    isPlainWhite: false,
  },
  {
    id: 3,
    image: "/Duchess_Carousel.png?text=Duchess+Luxury+Chair",
    alt: "Duchess - Luxury Chair",
    title: "",
    ctaText: "",
    ctaLink: "/products/duchess-chair",
    isPlainWhite: false,
  },
]

// Helper function to get product name from ctaLink
const getProductName = (ctaLink: string) => {
  const segments = ctaLink.split("/")
  const productSlug = segments[segments.length - 1]

  // Convert slug to display name
  switch (productSlug) {
    case "basilisk-bar-counter":
      return "Basilisk"
    case "vayuvega-night-stand":
      return "Vayuvega"
    case "duchess-chair":
      return "Duchess"
    default:
      return "Product"
  }
}

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1))
  }

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }

    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 6000)
    }
  }

  useEffect(() => {
    resetAutoPlay()
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [currentSlide, isAutoPlaying])

  const handleDotClick = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween", duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "tween", duration: 0.1, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.1 },
      },
    }),
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: "blur(2px)",
      transition: {
        duration: 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <div className="relative h-screen w-full overflow-hidden -mt-[40px] pt-[40px]">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {slidesData[currentSlide].isPlainWhite ? (
            <div className="relative h-full w-full bg-background-light flex items-center justify-center">
              {/* Text content for plain white slide */}
            </div>
          ) : (
            <div className="relative h-full w-full">
              {slidesData[currentSlide].image && (
                <Image
                  src={slidesData[currentSlide].image! || "/placeholder.svg"}
                  alt={slidesData[currentSlide].alt}
                  fill
                  priority={currentSlide === 0}
                  className="object-cover object-center"
                  style={{ border: "none", outline: "none" }}
                />
              )}
              <div className="absolute inset-0 bg-black/20"></div>
              {/* Explore Product Button - positioned in bottom-right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-8 right-8 z-20"
              >
                <Link
                  href={slidesData[currentSlide].ctaLink}
                  className="bg-deep-neutral text-background-light px-6 py-3 rounded-full font-['Quicksand'] text-sm font-medium tracking-wide hover:bg-deep-neutral/90 transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm"
                >
                  Explore {getProductName(slidesData[currentSlide].ctaLink)}
                </Link>
              </motion.div>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: "15vh" }}>
            <div className="container mx-auto px-6 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${currentSlide}`}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={textVariants}
                  className={`max-w-3xl mx-auto text-deep-neutral`}
                >
                  {slidesData[currentSlide].isPlainWhite ? (
                    <>
                      <motion.h1
                        variants={textVariants}
                        className="brand-title text-5xl md:text-7xl lg:text-8xl mb-8 max-w-4xl mx-auto"
                      >
                        <motion.div variants={childVariants} className="block mb-2 md:mb-4">
                          <span>beyond the</span>
                        </motion.div>
                        <motion.div variants={childVariants} className="block">
                          <span>threshold</span>
                        </motion.div>
                      </motion.h1>
                      {slidesData[currentSlide].ctaText && slidesData[currentSlide].ctaLink && (
                        <motion.div variants={childVariants}>
                          <Link
                            href={slidesData[currentSlide].ctaLink!}
                            className="font-['Quicksand'] text-sm uppercase tracking-widest text-deep-neutral relative group inline-block"
                          >
                            {slidesData[currentSlide].ctaText}
                            <span className="block h-[1px] w-full bg-deep-neutral absolute bottom-[-3px] left-0 transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <>
                      <motion.h1
                        variants={childVariants}
                        className="brand-title text-6xl md:text-8xl lg:text-9xl mb-8 max-w-4xl mx-auto"
                      >
                        {slidesData[currentSlide].title}
                      </motion.h1>
                      {slidesData[currentSlide].ctaText && slidesData[currentSlide].ctaLink && (
                        <motion.div variants={childVariants}>
                          <Link
                            href={slidesData[currentSlide].ctaLink!}
                            className="font-['Quicksand'] text-sm uppercase tracking-widest text-deep-neutral relative group inline-block"
                          >
                            {slidesData[currentSlide].ctaText}
                            <span className="block h-[1px] w-full bg-deep-neutral absolute bottom-[-3px] left-0 transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </motion.div>
                      )}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 backdrop-blur-sm transition-all duration-300 z-10 
                    ${slidesData[currentSlide].isPlainWhite ? "bg-deep-neutral/10 hover:bg-deep-neutral/20 text-deep-neutral" : "bg-background-light/10 hover:bg-background-light/20 text-background-light"}`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 backdrop-blur-sm transition-all duration-300 z-10
                    ${slidesData[currentSlide].isPlainWhite ? "bg-deep-neutral/10 hover:bg-deep-neutral/20 text-deep-neutral" : "bg-background-light/10 hover:bg-background-light/20 text-background-light"}`}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                        ${
                          currentSlide === index
                            ? slidesData[currentSlide].isPlainWhite
                              ? "bg-deep-neutral w-8"
                              : "bg-background-light w-8"
                            : slidesData[currentSlide].isPlainWhite
                              ? "bg-deep-neutral/50"
                              : "bg-background-light/50"
                        }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
