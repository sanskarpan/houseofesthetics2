"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  UserPlus,
  TrendingUp,
  Package,
  MessageSquare,
  BarChart3,
  Settings,
  Calendar,
  FileText,
  Home,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"

const navigation = [
  {
    title: "Overview",
    items: [
      { name: "dashboard", href: "/crm", icon: LayoutDashboard },
      { name: "analytics", href: "/crm/analytics", icon: BarChart3 },
    ],
  },
  {
    title: "Customer Management",
    items: [
      { name: "customers", href: "/crm/customers", icon: Users },
      { name: "leads", href: "/crm/leads", icon: UserPlus },
      { name: "communications", href: "/crm/communications", icon: MessageSquare },
    ],
  },
  {
    title: "Sales & Orders",
    items: [
      { name: "sales pipeline", href: "/crm/sales", icon: TrendingUp },
      { name: "orders", href: "/crm/orders", icon: FileText },
      { name: "products", href: "/crm/products", icon: Package },
    ],
  },
  {
    title: "Schedule",
    items: [
      { name: "calendar", href: "/crm/calendar", icon: Calendar },
      { name: "appointments", href: "/crm/appointments", icon: Calendar },
    ],
  },
  {
    title: "System",
    items: [{ name: "settings", href: "/crm/settings", icon: Settings }],
  },
]

export function CRMSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-deep-neutral/10 bg-white">
      <SidebarHeader className="border-b border-deep-neutral/10 p-6">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <Home className="h-5 w-5 text-deep-neutral/70 group-hover:text-deep-neutral transition-colors" />
            <span className="font-display text-lg tracking-wider text-deep-neutral lowercase font-bold">
              house of esthete
            </span>
          </Link>
        </div>
        <div className="mt-2">
          <span className="font-body text-sm text-deep-neutral/60 lowercase tracking-wide">
            customer relationship management
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        {navigation.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="font-display text-xs lowercase tracking-wider text-deep-neutral/70 mb-2">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "w-full justify-start font-body text-sm lowercase tracking-wide transition-colors",
                          isActive
                            ? "bg-deep-neutral text-background-light hover:bg-deep-neutral/90"
                            : "text-deep-neutral/70 hover:text-deep-neutral hover:bg-deep-neutral/5",
                        )}
                      >
                        <Link href={item.href}>
                          <item.icon className="mr-3 h-4 w-4" />
                          {item.name}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
