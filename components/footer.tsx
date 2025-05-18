// File: components/footer.tsx
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

// Define WhatsApp link
const generalWhatsAppLink = "https://wa.me/919848000000";

export default function Footer() {
  return (
    <footer className="bg-deep-neutral text-background-light py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-xl tracking-widest uppercase mb-6">House of Esthete</h3>
            <p className="font-body text-sm tracking-wide leading-relaxed opacity-80 max-w-xs">
              Where form finds soul. A curated collection of timeless objects that transcend the ordinary.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base tracking-widest uppercase mb-6">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/collections"
                  className="font-body text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  Our Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/story"
                  className="font-body text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="font-body text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base tracking-widest uppercase mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <div className="flex space-x-4 mt-2">
                  <Link
                    href="https://www.instagram.com/thehouseofesthete?igsh=Njk2Y2JyOGpvNDU3"
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram size={18} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/the-house-of-esthete/?originalSubdomain=in"
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin size={18} />
                  </Link>
                  <Link
                    href={generalWhatsAppLink}
                    target="_blank" rel="noopener noreferrer"
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                    aria-label="WhatsApp"
                  >
                    <Image
                      src="/whatsappIcon.png"
                      alt="Whatsapp"
                      width={24}
                      height={24}
                      className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background-light/20 text-center">
          <p className="font-body text-xs tracking-widest uppercase opacity-70">
            Crafted to be collected. Curated to endure.
          </p>
          <p className="font-body text-xs mt-4 opacity-50">
            © {new Date().getFullYear()} House of Esthete. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}