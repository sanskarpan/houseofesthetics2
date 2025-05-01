import Link from "next/link"

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
            <h4 className="font-display text-base tracking-widest uppercase mb-6">Discover</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/origins"
                  className="font-body text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  Origins
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="font-body text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="font-body text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="font-body text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base tracking-widest uppercase mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/visit"
                  className="font-body text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  Visit Atelier
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="font-body text-sm tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <div className="flex space-x-4 mt-2">
                  <Link
                    href="https://instagram.com"
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </Link>
                  <Link
                    href="https://pinterest.com"
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="sr-only">Pinterest</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" x2="12" y1="8" y2="16" />
                      <line x1="8" x2="16" y1="12" y2="12" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
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
