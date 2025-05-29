"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Search, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const productCategories = {
    indoor: {
      seating: ["Chairs", "Lounge Chairs", "Sofas", "Ottomans | Stools", "Daybeds | Chaises | Benches"],
      tables: ["Side Tables", "Coffee Tables", "Dining Tables", "Consoles", "Desks", "Dressers"],
      lighting: ["Floor Lamps", "Table Lamps", "Wall Sconces", "Suspended Lamps"],
      storage: ["Shelving Units", "Chest Of Drawers", "Sideboards", "Bedside Tables", "Bar Cabinets", "Bar Counters"],
      complements: ["Mirrors", "Trolleys", "Valet Stands", "Magazine Stands"],
      surfaces: ["Panellings", "Partition Screens"],
      beds: ["Beds"],
    },
  }

  const aboutUsLinks = [
    { name: "Our Philosophy", path: "/story#philosophy" },
    { name: "Brand Values", path: "/story#values" },
    { name: "Meet The Directors", path: "/story#directors" },
    { name: "House of Esthete Design Studio", path: "/story#studio" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200" ref={dropdownRef}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="relative z-10">
            <Image
              src="/logo.jpeg"
              alt="House of Esthete"
              width={150}
              height={40}
              className="transition-opacity duration-500"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className="flex items-center font-display text-sm tracking-widest uppercase hover:text-accent-black transition-colors duration-300 text-deep-neutral"
              >
                Our Collections <ChevronDown size={16} className="ml-1" />
              </button>

              {activeDropdown === "products" && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white shadow-lg z-50 p-6 border border-gray-200">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-display text-sm uppercase tracking-wider mb-4 text-deep-neutral">Indoor</h3>
                      <div className="grid grid-cols-3 gap-6">
                        {Object.entries(productCategories.indoor).map(([category, items]) => (
                          <div key={category} className="mb-4">
                            <h4 className="font-display text-xs uppercase tracking-wider mb-2 text-deep-neutral">
                              {category}
                            </h4>
                            <ul className="space-y-1">
                              {items.map((item) => (
                                <li key={item}>
                                  <Link
                                    href={`/collections/${category.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="font-body text-xs hover:text-accent-black transition-colors duration-300"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
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
                className="flex items-center font-display text-sm tracking-widest uppercase hover:text-accent-black transition-colors duration-300 text-deep-neutral"
              >
                Our Story <ChevronDown size={16} className="ml-1" />
              </button>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg z-50 p-4 border border-gray-200">
                  <ul className="space-y-2">
                    {aboutUsLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.path}
                          className="font-body text-sm hover:text-accent-black transition-colors duration-300 block py-1"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/media"
              className="font-display text-sm tracking-widest uppercase hover:text-accent-black transition-colors duration-300 text-deep-neutral"
            >
              Media
            </Link>

            <Link
              href="/contact"
              className="font-display text-sm tracking-widest uppercase hover:text-accent-black transition-colors duration-300 text-deep-neutral"
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://www.instagram.com/thehouseofesthete?igsh=Njk2Y2JyOGpvNDU3"
              className="text-deep-neutral hover:text-accent-black transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-house-of-esthete/?originalSubdomain=in"
              className="text-deep-neutral hover:text-accent-black transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
            <button
              className="text-deep-neutral hover:text-accent-black transition-colors duration-300"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>

          <button
            onClick={() => toggleDropdown("mobile")}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center focus:outline-none text-deep-neutral"
            aria-label={activeDropdown === "mobile" ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${activeDropdown === "mobile" ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${activeDropdown === "mobile" ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${activeDropdown === "mobile" ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {activeDropdown === "mobile" && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col justify-center items-center">
          <nav className="text-center">
            <ul className="space-y-8">
              <li>
                <Link
                  href="/collections"
                  className="font-display text-2xl tracking-widest uppercase text-deep-neutral hover:text-accent-black transition-colors duration-300"
                  onClick={() => setActiveDropdown(null)}
                >
                  Our Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/story"
                  className="font-display text-2xl tracking-widest uppercase text-deep-neutral hover:text-accent-black transition-colors duration-300"
                  onClick={() => setActiveDropdown(null)}
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="font-display text-2xl tracking-widest uppercase text-deep-neutral hover:text-accent-black transition-colors duration-300"
                  onClick={() => setActiveDropdown(null)}
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-display text-2xl tracking-widest uppercase text-deep-neutral hover:text-accent-black transition-colors duration-300"
                  onClick={() => setActiveDropdown(null)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-6 mt-12">
            <Link
              href="https://www.instagram.com/thehouseofesthete?igsh=Njk2Y2JyOGpvNDU3"
              className="text-deep-neutral hover:text-accent-black transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-house-of-esthete/?originalSubdomain=in"
              className="text-deep-neutral hover:text-accent-black transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
            <button
              className="text-deep-neutral hover:text-accent-black transition-colors duration-300"
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
