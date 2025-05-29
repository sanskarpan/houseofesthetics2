import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { CRMSidebar } from "@/components/crm/crm-sidebar"
import { CRMHeader } from "@/components/crm/crm-header"

export const metadata = {
  title: "House of Esthete CRM | Customer Relationship Management",
  description: "Comprehensive CRM system for managing customer relationships, sales, and interactions.",
}

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background-light">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <CRMSidebar />
          <div className="flex-1 flex flex-col">
            <CRMHeader />
            <main className="flex-1 p-6 bg-background-light">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}
