"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Search } from "lucide-react"

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
              src={logoVariant === "light" ? "/logo.png" : "/logo.png"}
              alt="House of Esthete"
              width={120}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`ml-1 transition-transform duration-300 ${activeDropdown === "products" ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {activeDropdown === "products" && (
                <div className="absolute left-0 mt-4 w-[800px] bg-background-light shadow-lg p-8 grid grid-cols-2 gap-8">
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
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className={`font-display text-sm tracking-widest uppercase hover:text-accent-green transition-colors duration-300 flex items-center ${textColor}`}
              >
                Our Story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`ml-1 transition-transform duration-300 ${activeDropdown === "about" ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {activeDropdown === "about" && (
                <div className="absolute left-0 mt-4 w-64 bg-background-light shadow-lg p-6">
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
                </div>
              )}
            </div>

            <Link
              href="/media"
              className={`font-display text-sm tracking-widest uppercase hover:text-accent-green transition-colors duration-300 ${textColor}`}
            >
              Media
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
              href="https://linkedin.com"
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
              className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-background-light z-40 flex flex-col justify-center items-center overflow-y-auto">
          <nav className="text-center">
            <ul className="space-y-8">
              <li>
                <Link
                  href="/collections"
                  className="font-display text-2xl tracking-widest uppercase text-deep-neutral hover:text-accent-green transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Our Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/story"
                  className="font-display text-2xl tracking-widest uppercase text-deep-neutral hover:text-accent-green transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="font-display text-2xl tracking-widest uppercase text-deep-neutral hover:text-accent-green transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Media
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
              href="https://linkedin.com"
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
        </div>
      )}
    </header>
  )
}
