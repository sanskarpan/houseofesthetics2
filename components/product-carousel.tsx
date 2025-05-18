// File: components/product-carousel.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slidesData = [ // Renamed to slidesData to avoid conflict
  {
    id: 0, 
    image: null, // MODIFIED - No image for the first slide
    alt: "House of Esthete - Beyond The Threshold",
    title: "Beyond the Threshold", 
    description: "A moment. A feeling. Your Curated Encounter.", 
    ctaText: "Discover The Essence", 
    ctaLink: "/story", 
    isPlainWhite: true, // MODIFIED - Flag for special styling
  },
  {
    id: 1,
    image: "/Frame 7.png?height=1080&width=1920&text=Luxury Interior 1", // Original first slide
    alt: "Luxury interior setting with modern furniture",
    title: "Timeless Elegance",
    description: "Meticulously crafted pieces that transform spaces into sanctuaries of refined living.",
    isPlainWhite: false,
  },
  {
    id: 2,
    image: "/Frame 6.png?height=1080&width=1920&text=Luxury Interior 2", // Original second slide
    alt: "Sophisticated living room with handcrafted decor",
    title: "Artisanal Craftsmanship",
    description: "Each object tells a story of tradition, innovation, and uncompromising quality.",
    isPlainWhite: false,
  },
  {
    id: 3,
    image: "/Frame 9.png?height=1080&width=1920&text=Luxury Interior 3", // Original third slide
    alt: "Minimalist interior with statement pieces",
    title: "Curated Encounters",
    description: "Discover objects that transcend function to become vessels of meaning and beauty.",
    isPlainWhite: false,
  },
]

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
    <div className="relative h-screen w-full overflow-hidden"> {/* MODIFIED - Removed bg-deep-neutral, handled by slide */}
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
                  src={slidesData[currentSlide].image!}
                  alt={slidesData[currentSlide].alt}
                  fill
                  priority={currentSlide === 0} 
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-deep-neutral/30"></div>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${currentSlide}`}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={textVariants}
                  className={`max-w-3xl mx-auto ${slidesData[currentSlide].isPlainWhite ? 'text-deep-neutral' : 'text-background-light'}`}
                >
                  {slidesData[currentSlide].isPlainWhite ? (
                    <>
                      <motion.h1 
                        variants={textVariants} 
                        className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-ultra-wide mb-10 max-w-4xl mx-auto leading-tight"
                      >
                        <motion.div variants={childVariants} className="block mb-2 md:mb-4">
                          <span>Beyond the</span>
                        </motion.div>
                        <motion.div variants={childVariants} className="block">
                          <span>Threshold</span>
                        </motion.div>
                      </motion.h1>
                      <motion.p variants={childVariants} className="font-body text-base md:text-lg tracking-body-loose mb-12 opacity-90">
                        {slidesData[currentSlide].description}
                      </motion.p>
                      {slidesData[currentSlide].ctaText && slidesData[currentSlide].ctaLink && (
                        <motion.div variants={childVariants}>
                          <Link
                            href={slidesData[currentSlide].ctaLink!}
                            className="font-body text-sm uppercase tracking-widest text-deep-neutral relative group inline-block"
                          >
                            {slidesData[currentSlide].ctaText}
                            <span className="block h-[1px] w-full bg-deep-neutral absolute bottom-[-3px] left-0 transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <>
                      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] mb-6">
                        {slidesData[currentSlide].title}
                      </h1>
                      <p className="font-body text-lg md:text-xl tracking-wider">{slidesData[currentSlide].description}</p>
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
                    ${slidesData[currentSlide].isPlainWhite ? 'bg-deep-neutral/10 hover:bg-deep-neutral/20 text-deep-neutral' : 'bg-background-light/10 hover:bg-background-light/20 text-background-light'}`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 backdrop-blur-sm transition-all duration-300 z-10
                    ${slidesData[currentSlide].isPlainWhite ? 'bg-deep-neutral/10 hover:bg-deep-neutral/20 text-deep-neutral' : 'bg-background-light/10 hover:bg-background-light/20 text-background-light'}`}
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
                        ${currentSlide === index 
                            ? (slidesData[currentSlide].isPlainWhite ? 'bg-deep-neutral w-8' : 'bg-background-light w-8') 
                            : (slidesData[currentSlide].isPlainWhite ? 'bg-deep-neutral/50' : 'bg-background-light/50')
                        }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}