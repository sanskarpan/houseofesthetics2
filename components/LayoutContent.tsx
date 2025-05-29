"use client"

import { usePathname } from "next/navigation"
import CustomCursor from "@/components/custom-cursor"
import MegaNavigation from "@/components/mega-navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import React from "react"

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isCRMPage = pathname?.startsWith("/crm")

  return (
    <>
      <CustomCursor />
      {!isCRMPage && <MegaNavigation />}
      <main>{children}</main>
      {!isCRMPage && <Footer />}
      {!isCRMPage && <ScrollToTop />}
    </>
  )
}
