"use client"

import { Button } from "@/components/ui/button"
import { Plus, Calendar, MessageSquare, FileText } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function QuickActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-deep-neutral text-background-light hover:bg-deep-neutral/90 font-body lowercase tracking-wide">
          <Plus className="mr-2 h-4 w-4" />
          quick actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem className="font-body">
          <Plus className="mr-2 h-4 w-4" />
          add customer
        </DropdownMenuItem>
        <DropdownMenuItem className="font-body">
          <Calendar className="mr-2 h-4 w-4" />
          schedule appointment
        </DropdownMenuItem>
        <DropdownMenuItem className="font-body">
          <MessageSquare className="mr-2 h-4 w-4" />
          send message
        </DropdownMenuItem>
        <DropdownMenuItem className="font-body">
          <FileText className="mr-2 h-4 w-4" />
          create order
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
