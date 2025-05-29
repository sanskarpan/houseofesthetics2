"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export function CustomerFilters() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select>
          <SelectTrigger className="border-deep-neutral/20">
            <SelectValue placeholder="Customer Segment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vip">VIP</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="prospect">Prospect</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="border-deep-neutral/20">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="prospect">Prospect</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="border-deep-neutral/20">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ny">New York</SelectItem>
            <SelectItem value="ca">California</SelectItem>
            <SelectItem value="fl">Florida</SelectItem>
            <SelectItem value="ma">Massachusetts</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="border-deep-neutral/20">
            <SelectValue placeholder="Last Interaction" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="quarter">This Quarter</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters */}
      <div className="flex items-center space-x-2">
        <span className="font-body text-sm text-deep-neutral/70">Active filters:</span>
        <Badge variant="secondary" className="bg-deep-neutral/10 text-deep-neutral">
          VIP Customers
          <X className="h-3 w-3 ml-1 cursor-pointer" />
        </Badge>
        <Badge variant="secondary" className="bg-deep-neutral/10 text-deep-neutral">
          New York
          <X className="h-3 w-3 ml-1 cursor-pointer" />
        </Badge>
        <Button variant="ghost" size="sm" className="text-deep-neutral/60 hover:text-deep-neutral">
          Clear all
        </Button>
      </div>
    </div>
  )
}
