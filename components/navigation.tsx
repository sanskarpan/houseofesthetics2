"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  }

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Origins", path: "/origins" },
    { name: "Process", path: "/process" },
    { name: "Collections", path: "/collections" },
    { name: "Journal", path: "/journal" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4 bg-background-light/90 backdrop-blur-sm" : "py-6"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="font-display text-xl tracking-widest uppercase">
            House of Esthete
          </Link>

          <button
            onClick={toggleMenu}
            className="relative z-50 w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-0.5 bg-deep-neutral transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-deep-neutral transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-deep-neutral transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}
            ></span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background-dark"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="h-full flex flex-col justify-center items-center">
              <nav className="text-center">
                <ul className="space-y-8">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.3 + index * 0.1,
                          duration: 0.5,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        y: 20,
                        transition: {
                          duration: 0.3,
                        },
                      }}
                    >
                      <Link
                        href={item.path}
                        className="font-display text-2xl md:text-3xl tracking-widest uppercase hover:text-accent-green transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <motion.div
                className="absolute bottom-10 left-0 w-full text-center"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.8, duration: 0.5 },
                }}
                exit={{ opacity: 0 }}
              >
                <p className="micro-text">A moment. A feeling. Your Curated Encounter.</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
