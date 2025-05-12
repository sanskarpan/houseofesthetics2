import type React from "react"
import "./globals.css"
import { League_Spartan, Quicksand } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import MegaNavigation from "@/components/mega-navigation"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ScrollToTop from "@/components/scroll-to-top"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
})

export const metadata = {
  title: "House of Esthete | Timeless Luxury Home Decor",
  description:
    "House of Esthete is where Form finds Soul. Discover our collection of unique, timeless, and meticulously handcrafted home decor pieces.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${quicksand.variable}`}>
      <body className="bg-background-light text-deep-neutral antialiased">
        <ThemeProvider attribute="class" defaultTheme="light">
          <CustomCursor />
          <MegaNavigation />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
