"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Search, ChevronDown, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Updated product structure for "Our Collections" dropdown
const collectionsNavProducts = {
  Furniture: {
    Seating: [
      { name: "Duchess", path: "/products/duchess-chair" }
    ],
    Tables: [
      { name: "Basilisk", path: "/products/basilisk-bar-counter" }
    ],
    Storage: [
      { name: "Pinetta", path: "/products/pinetta-booze-stand" }
    ]
  },
  Artefacts: {
    "Standing Artefacts": [ // Sub-category title for structure
        { name: "Rise of the Great", path: "/products/rise-of-the-great-artefact" }
    ]
  }
};

const aboutUsLinks = [
  { name: "Our Philosophy", path: "/story#philosophy" },
  { name: "Brand Values", path: "/story#values" },
  { name: "Meet The Directors", path: "/story#directors" },
  { name: "House of Esthete Design Studio", path: "/story#studio" },
  { name: "Meet The Designers", path: "/story#designers" },
]

export default function MegaNavigation() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navbarOpacity = Math.min(scrollPosition / 300, 0.9)
  const navLinkTextColor = scrollPosition > 50 ? "text-deep-neutral" : "text-background-light"
  
  // Logo style based on scroll position
  // TextLogo.png is black text on transparent BG
  // Initial state (transparent navbar): invert to white text
  // Scrolled state (light navbar): original black text
  const logoFilterStyle = scrollPosition <= 50 
    ? { filter: "invert(1) brightness(1.5) saturate(0)", transition: "filter 0.3s ease-in-out" } 
    : { filter: "none", transition: "filter 0.3s ease-in-out" };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const toggleMobileSubmenu = (submenu: string) => {
    setMobileSubmenu(mobileSubmenu === submenu ? null : submenu)
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-[60] transition-colors duration-300 ease-out"
      style={{
        backgroundColor: `hsla(var(--background-light), ${navbarOpacity})`,
        backdropFilter: scrollPosition > 20 ? "blur(8px)" : "none",
      }}
      ref={dropdownRef}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-2">
          <Link href="/" className="relative z-10 block">
            <Image
              src="/TextLogo.png" // Updated to TextLogo.png
              alt="House of Esthete"
              width={174} 
              height={38} 
              priority
              className="transition-filter duration-300 ease-in-out" // Class for transition
              style={logoFilterStyle} // Apply dynamic filter style
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => toggleDropdown("collections")}
                className={`font-display text-sm tracking-normal uppercase hover:text-accent-green transition-colors duration-300 flex items-center ${navLinkTextColor}`}
              >
                Our Collections
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-300 ${activeDropdown === "collections" ? "rotate-180" : ""} ${navLinkTextColor}`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "collections" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    // Adjusted width and layout for simpler content
                    className="absolute left-0 mt-3 w-auto min-w-[500px] max-w-[700px] bg-background-light shadow-lg p-6 grid grid-cols-2 gap-x-8 gap-y-6 z-50 rounded-sm"
                  >
                    {Object.entries(collectionsNavProducts).map(([mainCategory, subCategories]) => (
                      <div key={mainCategory}>
                        <h3 className="font-display text-base uppercase tracking-normal mb-3 text-deep-neutral">{mainCategory}</h3>
                        {Object.entries(subCategories).map(([subCategoryName, items]) => (
                          <div key={subCategoryName} className="mb-3">
                            <h4 className="font-display text-sm uppercase tracking-tight mb-2 text-deep-neutral/80">{subCategoryName}</h4>
                            <ul className="space-y-1.5">
                              {(items as { name: string; path: string }[]).map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.path}
                                    className="font-body text-xs hover:text-accent-green transition-colors text-deep-neutral/70 tracking-body-loose"
                                    onClick={() => { setActiveDropdown(null); setIsOpen(false);}}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Us, Media, Contact Us links remain the same */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className={`font-display text-sm tracking-normal uppercase hover:text-accent-green transition-colors duration-300 flex items-center ${navLinkTextColor}`}
              >
                Our Story
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-300 ${activeDropdown === "about" ? "rotate-180" : ""} ${navLinkTextColor}`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 w-64 bg-background-light shadow-lg p-6 z-50 rounded-sm"
                  >
                    <ul className="space-y-2">
                      {aboutUsLinks.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.path}
                            className="font-body text-sm hover:text-accent-green transition-colors text-deep-neutral tracking-body-loose"
                            onClick={() => { setActiveDropdown(null); setIsOpen(false);}}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/media"
              className={`font-display text-sm tracking-normal uppercase hover:text-accent-green transition-colors duration-300 ${navLinkTextColor}`}
              onClick={() => { setActiveDropdown(null); setIsOpen(false);}}
            >
              Media
            </Link>

            <Link
              href="/contact"
              className={`font-display text-sm tracking-normal uppercase hover:text-accent-green transition-colors duration-300 ${navLinkTextColor}`}
              onClick={() => { setActiveDropdown(null); setIsOpen(false);}}
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://www.instagram.com/thehouseofesthete?igsh=Njk2Y2JyOGpvNDU3"
              className={`${navLinkTextColor} hover:text-accent-green transition-colors duration-300`}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-house-of-esthete/?originalSubdomain=in"
              className={`${navLinkTextColor} hover:text-accent-green transition-colors duration-300`}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
            <button
              className={`${navLinkTextColor} hover:text-accent-green transition-colors duration-300`}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>

          <button
            onClick={() => {setIsOpen(!isOpen); setActiveDropdown(null);}}
            className={`md:hidden relative z-[70] w-10 h-10 flex flex-col justify-center items-center focus:outline-none ${navLinkTextColor}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-1"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 my-[3px] ${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[1px]" : "translate-y-1"}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-background-light z-[50] flex flex-col pt-20 px-6 overflow-y-auto"
          >
            <nav className="text-left">
              <ul className="space-y-4">
                <li>
                  <div className="relative">
                    <button
                      onClick={() => toggleMobileSubmenu("collections")}
                      className="font-display text-xl tracking-tight uppercase text-deep-neutral hover:text-accent-green transition-colors duration-300 flex items-center justify-between w-full py-2"
                    >
                      Our Collections
                      <ChevronRight
                        size={20}
                        className={`transition-transform duration-300 ${mobileSubmenu === "collections" ? "rotate-90" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileSubmenu === "collections" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden pl-4"
                        >
                          <div className="pt-2">
                            {Object.entries(collectionsNavProducts).map(([mainCategory, subCategories]) => (
                              <div key={mainCategory} className="mb-3">
                                <h3 className="font-display text-lg uppercase tracking-tight mb-1.5 text-deep-neutral">{mainCategory}</h3>
                                {Object.entries(subCategories).map(([subCategoryName, items]) => (
                                <div key={subCategoryName} className="mb-1.5">
                                  <h4 className="font-display text-base uppercase tracking-tight mb-1 text-deep-neutral/80 pl-2">{subCategoryName}</h4>
                                  <ul className="space-y-1 pl-4">
                                    {(items as { name: string; path: string }[]).map((item) => (
                                      <li key={item.name}>
                                        <Link
                                          href={item.path}
                                          className="font-body text-sm hover:text-accent-green transition-colors text-deep-neutral/70 tracking-body-loose py-1 block"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
                {/* Story, Media, Contact links for mobile */}
                 <li>
                  <div className="relative">
                    <button
                      onClick={() => toggleMobileSubmenu("story")}
                      className="font-display text-xl tracking-tight uppercase text-deep-neutral hover:text-accent-green transition-colors duration-300 flex items-center justify-between w-full py-2"
                    >
                      Our Story
                      <ChevronRight
                        size={20}
                        className={`transition-transform duration-300 ${mobileSubmenu === "story" ? "rotate-90" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileSubmenu === "story" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden pl-4"
                        >
                          <ul className="space-y-2 pt-2">
                            {aboutUsLinks.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.path}
                                  className="font-body text-base hover:text-accent-green transition-colors text-deep-neutral tracking-body-loose py-1 block"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
                <li>
                  <Link
                    href="/media"
                    className="font-display text-xl tracking-tight uppercase text-deep-neutral hover:text-accent-green transition-colors duration-300 py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="font-display text-xl tracking-tight uppercase text-deep-neutral hover:text-accent-green transition-colors duration-300 py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center space-x-6 mt-10">
              <Link
                href="https://www.instagram.com/thehouseofesthete?igsh=Njk2Y2JyOGpvNDU3"
                className="text-deep-neutral hover:text-accent-green transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/the-house-of-esthete/?originalSubdomain=in"
                className="text-deep-neutral hover:text-accent-green transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
              <button
                className="text-deep-neutral hover:text-accent-green transition-colors duration-300"
                aria-label="Search"
              >
                <Search size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}