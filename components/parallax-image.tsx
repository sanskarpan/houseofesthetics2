"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
  className?: string
  priority?: boolean
}

export default function ParallaxImage({ src, alt, speed = 0.3, className = "", priority = false }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const { top } = ref.current.getBoundingClientRect()
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Calculate how far the element is from the viewport center
      const elementCenter = top + ref.current.offsetHeight / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = elementCenter - viewportCenter

      // Calculate parallax offset based on distance from center
      const parallaxOffset = distanceFromCenter * speed

      setOffset(parallaxOffset)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
        className="w-full h-full"
      >
        <Image src={src || "/placeholder.svg"} alt={alt} fill priority={priority} className="object-cover" />
      </div>
    </div>
  )
}
