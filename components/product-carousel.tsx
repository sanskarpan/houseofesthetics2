"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/Frame 7.png?height=1080&width=1920&text=Luxury Interior 1",
    alt: "Luxury interior setting with modern furniture",
    title: "Timeless Elegance",
    description: "Meticulously crafted pieces that transform spaces into sanctuaries of refined living.",
  },
  {
    id: 2,
    image: "/Frame 6.png?height=1080&width=1920&text=Luxury Interior 2",
    alt: "Sophisticated living room with handcrafted decor",
    title: "Artisanal Craftsmanship",
    description: "Each object tells a story of tradition, innovation, and uncompromising quality.",
  },
  {
    id: 3,
    image: "/Frame 9.png?height=1080&width=1920&text=Luxury Interior 3",
    alt: "Minimalist interior with statement pieces",
    title: "Curated Encounters",
    description: "Discover objects that transcend function to become vessels of meaning and beauty.",
  },
]

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
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
        x: { type: "tween", duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-deep-neutral">
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
          <div className="relative h-full w-full">
            <Image
              src={slides[currentSlide].image || "/Frame 7.png"}
              alt={slides[currentSlide].alt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-deep-neutral/30"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${currentSlide}`}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={textVariants}
                  className="max-w-3xl mx-auto text-background-light"
                >
                  <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] mb-6">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="font-body text-lg md:text-xl tracking-wider">{slides[currentSlide].description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background-light/10 hover:bg-background-light/20 text-background-light rounded-full p-2 backdrop-blur-sm transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background-light/10 hover:bg-background-light/20 text-background-light rounded-full p-2 backdrop-blur-sm transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-background-light w-8" : "bg-background-light/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
