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
    <header
  className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md border-b border-gray-200"
  ref={dropdownRef}
>


      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.jpeg" alt="House of Esthete" width={140} height={35} className="h-8 w-auto" priority />
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className="flex items-center text-sm font-medium tracking-wide uppercase text-gray-900 hover:text-gray-600 transition-colors duration-200"
              >
                PRODUCTS
                <ChevronDown size={14} className="ml-1 transition-transform duration-200" />
              </button>

              {activeDropdown === "products" && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[800px] z-50 border border-gray-100"
                  style={{ backgroundColor: "#ffffff", boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {Object.entries(productCategories.indoor).map(([category, items]) => (
                        <div key={category}>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-3">
                            {category}
                          </h4>
                          <ul className="space-y-2">
                            {items.map((item) => (
                              <li key={item}>
                                <Link
                                  href={`/collections/${category.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 block"
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
              )}
            </div>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center text-sm font-medium tracking-wide uppercase text-gray-900 hover:text-gray-600 transition-colors duration-200"
              >
                ABOUT US
                <ChevronDown size={14} className="ml-1 transition-transform duration-200" />
              </button>

              {activeDropdown === "about" && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-64 z-50 border border-gray-100"
                  style={{ backgroundColor: "#ffffff", boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="p-4">
                    <ul className="space-y-2">
                      {aboutUsLinks.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.path}
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 block py-1"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/media"
              className="text-sm font-medium tracking-wide uppercase text-gray-900 hover:text-gray-600 transition-colors duration-200"
            >
              MEDIA
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium tracking-wide uppercase text-gray-900 hover:text-gray-600 transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://www.instagram.com/thehouseofesthete?igsh=Njk2Y2JyOGpvNDU3"
              className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-house-of-esthete/?originalSubdomain=in"
              className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <button className="text-gray-900 hover:text-gray-600 transition-colors duration-200" aria-label="Search">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => toggleDropdown("mobile")}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
            aria-label={activeDropdown === "mobile" ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
                activeDropdown === "mobile" ? "rotate-45 translate-y-0.5" : "-translate-y-1"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
                activeDropdown === "mobile" ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
                activeDropdown === "mobile" ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {activeDropdown === "mobile" && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen z-40" style={{ backgroundColor: "#ffffff" }}>
          <div className="flex flex-col justify-center items-center h-full">
            <nav className="text-center space-y-8">
              <Link
                href="/collections"
                className="block text-xl font-medium tracking-wide uppercase text-gray-900 hover:text-gray-600 transition-colors duration-200"
                onClick={() => setActiveDropdown(null)}
              >
                PRODUCTS
              </Link>
              <Link
                href="/story"
                className="block text-xl font-medium tracking-wide uppercase text-gray-900 hover:text-gray-600 transition-colors duration-200"
                onClick={() => setActiveDropdown(null)}
              >
                ABOUT US
              </Link>
              <Link
                href="/media"
                className="block text-xl font-medium tracking-wide uppercase text-gray-900 hover:text-gray-600 transition-colors duration-200"
                onClick={() => setActiveDropdown(null)}
              >
                MEDIA
              </Link>
              <Link
                href="/contact"
                className="block text-xl font-medium tracking-wide uppercase text-gray-900 hover:text-gray-600 transition-colors duration-200"
                onClick={() => setActiveDropdown(null)}
              >
                CONTACT US
              </Link>
            </nav>

            <div className="flex items-center space-x-6 mt-12">
              <Link
                href="https://www.instagram.com/thehouseofesthete?igsh=Njk2Y2JyOGpvNDU3"
                className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/the-house-of-esthete/?originalSubdomain=in"
                className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
              <button className="text-gray-900 hover:text-gray-600 transition-colors duration-200" aria-label="Search">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
