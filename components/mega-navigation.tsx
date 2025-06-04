"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Search, ChevronDown } from "lucide-react"

export default function MegaNavigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { // Threshold to trigger the change
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call on mount to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll)
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
    Furniture: {
      Seating: [
        { name: "Duchess", path: "/products/duchess-chair" }
      ],
      Tables: [
        { name: "Basilisk", path: "/products/basilisk-bar-counter" }
      ],
      Storage: [
        { name: "Pinetta", path: "/products/pinetta-booze-stand" }
      ],
      Artefacts: [
        { name: "Rise of the Great", path: "/products/rise-of-the-great-artefact" },
        { name: "Vayuvega", path: "/products/vayuvega-night-stand" },
      ]
    }
  }

  const aboutUsLinks = [
    { name: "Our Philosophy", path: "/story#philosophy" },
    { name: "Brand Values", path: "/story#values" },
    { name: "Meet The Directors", path: "/story#directors" },
    { name: "House of Esthete Design Studio", path: "/story#studio" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/[0.75] backdrop-blur-md border-b border-gray-200/50 shadow-md" // 75% opaque white, backdrop blur, semi-transparent border, shadow
          : "bg-transparent backdrop-blur-sm border-b border-transparent" // Transparent with subtle blur initially
      }`}
      ref={dropdownRef}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="relative z-10">
            <Image
              src="/TextLogo.png"
              alt="House of Esthete"
              width={174}
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
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white shadow-lg z-50 p-6 border border-gray-200"> {/* Dropdown remains opaque white */}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-display text-sm uppercase tracking-wider mb-4 text-deep-neutral">Furniture</h3>
                      <div className="grid grid-cols-3 gap-6">
                        {Object.entries(productCategories.Furniture).map(([category, items]) => (
                          <div key={category} className="mb-4">
                            <h4 className="font-display text-xs uppercase tracking-wider mb-2 text-deep-neutral">
                              {category}
                            </h4>
                            <ul className="space-y-1">
                              {items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.path}
                                    className="font-body text-xs hover:text-accent-black transition-colors duration-300 text-deep-neutral"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Placeholder for potential second column in products dropdown */}
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg z-50 p-4 border border-gray-200"> {/* Dropdown remains opaque white */}
                  <ul className="space-y-2">
                    {aboutUsLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.path}
                          className="font-body text-sm hover:text-accent-black transition-colors duration-300 block py-1 text-deep-neutral"
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-deep-neutral hover:text-accent-black transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-house-of-esthete/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
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
              className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                activeDropdown === "mobile" ? "rotate-45 translate-y-[1px]" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current mt-[5px] mb-[5px] transform transition-all duration-300 ease-in-out ${
                activeDropdown === "mobile" ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                activeDropdown === "mobile" ? "-rotate-45 -translate-y-[1px]" : "translate-y-1"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {activeDropdown === "mobile" && (
        <div className="md:hidden fixed inset-0 top-0 bg-white z-40 flex flex-col justify-center items-center pt-16 sm:pt-20"> {/* Full screen opaque white for mobile menu */}
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-deep-neutral hover:text-accent-black transition-colors duration-300"
              aria-label="Instagram"
              onClick={() => setActiveDropdown(null)}
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-house-of-esthete/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-deep-neutral hover:text-accent-black transition-colors duration-300"
              aria-label="LinkedIn"
              onClick={() => setActiveDropdown(null)}
            >
              <Linkedin size={24} />
            </Link>
            <button
              className="text-deep-neutral hover:text-accent-black transition-colors duration-300"
              aria-label="Search"
              onClick={() => {
                setActiveDropdown(null);
              }}
            >
              <Search size={24} />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}