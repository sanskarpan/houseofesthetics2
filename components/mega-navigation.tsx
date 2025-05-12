"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Search, ChevronDown, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const productCategories = {
  indoor: {
    seating: [
      { name: "Ottomans | Stools", path: "/collections/ottomans-stools" },
      { name: "Chairs", path: "/collections/chairs" },
      { name: "Lounge Chairs", path: "/collections/lounge-chairs" },
      { name: "Sofas", path: "/collections/sofas" },
      { name: "Daybeds | Chaises | Benches", path: "/collections/daybeds-chaises-benches" },
    ],
    tables: [
      { name: "Side Tables", path: "/collections/side-tables" },
      { name: "Coffee Tables", path: "/collections/coffee-tables" },
      { name: "Dining Tables", path: "/collections/dining-tables" },
      { name: "Consoles", path: "/collections/consoles" },
      { name: "Desks", path: "/collections/desks" },
      { name: "Dressers", path: "/collections/dressers" },
    ],
    lighting: [
      { name: "Floor Lamps", path: "/collections/floor-lamps" },
      { name: "Table Lamps", path: "/collections/table-lamps" },
      { name: "Wall Sconces", path: "/collections/wall-sconces" },
      { name: "Suspended Lamps", path: "/collections/suspended-lamps" },
    ],
    storage: [
      { name: "Shelving Units", path: "/collections/shelving-units" },
      { name: "Chest Of Drawers", path: "/collections/chest-of-drawers" },
      { name: "Sideboards", path: "/collections/sideboards" },
      { name: "Bedside Tables", path: "/collections/bedside-tables" },
      { name: "Bar Cabinets", path: "/collections/bar-cabinets" },
      { name: "Bar Counters", path: "/collections/bar-counters" },
    ],
    complements: [
      { name: "Mirrors", path: "/collections/mirrors" },
      { name: "Trolleys", path: "/collections/trolleys" },
      { name: "Valet Stands", path: "/collections/valet-stands" },
      { name: "Magazine Stands", path: "/collections/magazine-stands" },
    ],
    surfaces: [
      { name: "Panellings", path: "/collections/panellings" },
      { name: "Partition Screens", path: "/collections/partition-screens" },
    ],
    beds: [{ name: "Beds", path: "/collections/beds" }],
  },
  outdoor: {
    seating: [
      { name: "Chairs", path: "/collections/outdoor-chairs" },
      { name: "Daybeds | Chaises | Benches", path: "/collections/outdoor-daybeds-chaises-benches" },
      { name: "Lounge Chairs", path: "/collections/outdoor-lounge-chairs" },
      { name: "Ottomans | Stools", path: "/collections/outdoor-ottomans-stools" },
      { name: "Sofas", path: "/collections/outdoor-sofas" },
    ],
    tables: [
      { name: "Side Tables", path: "/collections/outdoor-side-tables" },
      { name: "Coffee Tables", path: "/collections/outdoor-coffee-tables" },
      { name: "Dining Tables", path: "/collections/outdoor-dining-tables" },
    ],
    complements: [{ name: "Trolleys", path: "/collections/outdoor-trolleys" }],
  },
}

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

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Calculate opacity based on scroll position for gradient effect
  const navbarOpacity = Math.min(scrollPosition / 300, 0.9)
  const textColor = scrollPosition > 100 ? "text-deep-neutral" : "text-background-light"
  const logoVariant = scrollPosition > 100 ? "dark" : "light"

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const toggleMobileSubmenu = (submenu: string) => {
    setMobileSubmenu(mobileSubmenu === submenu ? null : submenu)
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        backgroundColor: `rgba(233, 233, 231, ${navbarOpacity})`,
        backdropFilter: scrollPosition > 50 ? "blur(8px)" : "none",
      }}
      ref={dropdownRef}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="relative z-10">
            <Image
              src={logoVariant === "light" ? "/logo.jpeg" : "/logo.jpeg"}
              alt="House of Esthete"
              width={60}
              height={40}
              className={`transition-opacity duration-500 ${logoVariant === "light" ? "invert" : ""}`}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className={`font-display text-sm tracking-widest uppercase hover:text-accent-green transition-colors duration-300 flex items-center ${textColor}`}
              >
                Our Collections
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-300 ${activeDropdown === "products" ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-4 w-[800px] bg-background-light shadow-lg p-8 grid grid-cols-2 gap-8 z-50"
                  >
                    <div>
                      <h3 className="font-display text-base uppercase tracking-wider mb-4">Indoor</h3>
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-display text-sm uppercase tracking-wider mb-3">Seating</h4>
                          <ul className="space-y-2">
                            {productCategories.indoor.seating.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.path}
                                  className="font-body text-xs hover:text-accent-green transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-display text-sm uppercase tracking-wider mb-3">Tables</h4>
                          <ul className="space-y-2">
                            {productCategories.indoor.tables.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.path}
                                  className="font-body text-xs hover:text-accent-green transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-display text-sm uppercase tracking-wider mb-3">Lighting</h4>
                          <ul className="space-y-2">
                            {productCategories.indoor.lighting.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.path}
                                  className="font-body text-xs hover:text-accent-green transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-base uppercase tracking-wider mb-4">Outdoor</h3>
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-display text-sm uppercase tracking-wider mb-3">Seating</h4>
                          <ul className="space-y-2">
                            {productCategories.outdoor.seating.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.path}
                                  className="font-body text-xs hover:text-accent-green transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-display text-sm uppercase tracking-wider mb-3">Tables</h4>
                          <ul className="space-y-2">
                            {productCategories.outdoor.tables.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.path}
                                  className="font-body text-xs hover:text-accent-green transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-display text-sm uppercase tracking-wider mb-3">Complements</h4>
                          <ul className="space-y-2">
                            {productCategories.outdoor.complements.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.path}
                                  className="font-body text-xs hover:text-accent-green transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className={`font-display text-sm tracking-widest uppercase hover:text-accent-green transition-colors duration-300 flex items-center ${textColor}`}
              >
                Our Story
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-300 ${activeDropdown === "about" ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-4 w-64 bg-background-light shadow-lg p-6 z-50"
                  >
                    <ul className="space-y-3">
                      {aboutUsLinks.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.path}
                            className="font-body text-sm hover:text-accent-green transition-colors"
                            onClick={() => setActiveDropdown(null)}
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
              className={`font-display text-sm tracking-widest uppercase hover:text-accent-green transition-colors duration-300 ${textColor}`}
            >
              Media
            </Link>

            <Link
              href="/contact"
              className={`font-display text-sm tracking-widest uppercase hover:text-accent-green transition-colors duration-300 ${textColor}`}
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://instagram.com"
              className={`${textColor} hover:text-accent-green transition-colors duration-300`}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-house-of-esthete/?originalSubdomain=in"
              className={`${textColor} hover:text-accent-green transition-colors duration-300`}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
            <button
              className={`${textColor} hover:text-accent-green transition-colors duration-300`}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center focus:outline-none ${textColor}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-background-light z-40 flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <nav className="text-left">
              <ul className="space-y-6">
                <li>
                  <div className="relative">
                    <button
                      onClick={() => toggleMobileSubmenu("collections")}
                      className="font-display text-xl tracking-widest uppercase text-deep-neutral hover:text-accent-green transition-colors duration-300 flex items-center justify-between w-full"
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
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pl-4">
                            <h3 className="font-display text-lg uppercase tracking-wider mb-3">Indoor</h3>
                            <ul className="space-y-3 mb-6">
                              <li>
                                <Link
                                  href="/collections/chairs"
                                  className="font-body text-base hover:text-accent-green transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Chairs
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/tables"
                                  className="font-body text-base hover:text-accent-green transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Tables
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/storage"
                                  className="font-body text-base hover:text-accent-green transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Storage
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/artefacts"
                                  className="font-body text-base hover:text-accent-green transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Artefacts
                                </Link>
                              </li>
                            </ul>

                            <h3 className="font-display text-lg uppercase tracking-wider mb-3">Outdoor</h3>
                            <ul className="space-y-3">
                              <li>
                                <Link
                                  href="/collections/outdoor-seating"
                                  className="font-body text-base hover:text-accent-green transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Seating
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/outdoor-tables"
                                  className="font-body text-base hover:text-accent-green transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Tables
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
                <li>
                  <div className="relative">
                    <button
                      onClick={() => toggleMobileSubmenu("story")}
                      className="font-display text-xl tracking-widest uppercase text-deep-neutral hover:text-accent-green transition-colors duration-300 flex items-center justify-between w-full"
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
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-3 pt-4 pl-4">
                            {aboutUsLinks.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.path}
                                  className="font-body text-base hover:text-accent-green transition-colors"
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
                    className="font-display text-xl tracking-widest uppercase text-deep-neutral hover:text-accent-green transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="font-display text-xl tracking-widest uppercase text-deep-neutral hover:text-accent-green transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center space-x-6 mt-12">
              <Link
                href="https://instagram.com"
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
