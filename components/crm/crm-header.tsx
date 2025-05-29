"use client"

import { Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function CRMHeader() {
  return (
    <header className="border-b border-deep-neutral/10 bg-background-light">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search */}
        <div className="flex items-center space-x-4 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-deep-neutral/50" />
            <Input
              placeholder="Search customers, orders, products..."
              className="pl-10 border-deep-neutral/20 focus:border-deep-neutral bg-white"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4 text-deep-neutral/70" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500 text-white">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="font-display">Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3">
                <div className="font-body text-sm font-medium">New customer inquiry</div>
                <div className="font-body text-xs text-deep-neutral/60">
                  Alexandra Morrison inquired about the Duchess Chair
                </div>
                <div className="font-body text-xs text-deep-neutral/50">2 minutes ago</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3">
                <div className="font-body text-sm font-medium">Order completed</div>
                <div className="font-body text-xs text-deep-neutral/60">
                  Marcus Chen's order #HOE-2024-156 has been delivered
                </div>
                <div className="font-body text-xs text-deep-neutral/50">1 hour ago</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3">
                <div className="font-body text-sm font-medium">Scheduled visit reminder</div>
                <div className="font-body text-xs text-deep-neutral/60">
                  Isabella Rodriguez has an atelier visit tomorrow at 2 PM
                </div>
                <div className="font-body text-xs text-deep-neutral/50">3 hours ago</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32&text=Admin" alt="Admin" />
                  <AvatarFallback className="bg-deep-neutral/10 text-deep-neutral">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="font-display">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Admin User</p>
                  <p className="text-xs leading-none text-deep-neutral/60">admin@houseofesthete.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="font-body">Profile</DropdownMenuItem>
              <DropdownMenuItem className="font-body">Settings</DropdownMenuItem>
              <DropdownMenuItem className="font-body">Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="font-body">Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
