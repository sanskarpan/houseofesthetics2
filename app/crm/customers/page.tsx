"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Filter, Plus, MoreHorizontal, Mail, Phone, MapPin, Eye, Edit, Trash2 } from "lucide-react"
import { CustomerFilters } from "@/components/crm/customer-filters"
import { AddCustomerDialog } from "@/components/crm/add-customer-dialog"

const customers = [
  {
    id: "1",
    name: "Alexandra Morrison",
    email: "alexandra.morrison@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    segment: "VIP",
    totalSpent: "$45,890",
    lastInteraction: "2 days ago",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40&text=AM",
  },
  {
    id: "2",
    name: "Marcus Chen",
    email: "marcus.chen@email.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA",
    segment: "Premium",
    totalSpent: "$28,450",
    lastInteraction: "1 week ago",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40&text=MC",
  },
  {
    id: "3",
    name: "Isabella Rodriguez",
    email: "isabella.rodriguez@email.com",
    phone: "+1 (555) 345-6789",
    location: "Miami, FL",
    segment: "Standard",
    totalSpent: "$12,750",
    lastInteraction: "3 days ago",
    status: "Prospect",
    avatar: "/placeholder.svg?height=40&width=40&text=IR",
  },
  {
    id: "4",
    name: "James Wellington",
    email: "james.wellington@email.com",
    phone: "+1 (555) 456-7890",
    location: "Boston, MA",
    segment: "VIP",
    totalSpent: "$67,200",
    lastInteraction: "5 days ago",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40&text=JW",
  },
  {
    id: "5",
    name: "Sophie Laurent",
    email: "sophie.laurent@email.com",
    phone: "+1 (555) 567-8901",
    location: "Los Angeles, CA",
    segment: "Premium",
    totalSpent: "$34,680",
    lastInteraction: "1 day ago",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40&text=SL",
  },
]

const getSegmentColor = (segment: string) => {
  switch (segment) {
    case "VIP":
      return "bg-amber-100 text-amber-800 border-amber-200"
    case "Premium":
      return "bg-purple-100 text-purple-800 border-purple-200"
    case "Standard":
      return "bg-blue-100 text-blue-800 border-blue-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800 border-green-200"
    case "Prospect":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "Inactive":
      return "bg-red-100 text-red-800 border-red-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [showAddDialog, setShowAddDialog] = useState(false)

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl tracking-wider text-deep-neutral">Customers</h1>
          <p className="font-body text-deep-neutral/70 mt-2">
            Manage your customer relationships and track interactions.
          </p>
        </div>
        <Button
          onClick={() => setShowAddDialog(true)}
          className="bg-deep-neutral hover:bg-deep-neutral/90 text-background-light"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border-deep-neutral/10">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-deep-neutral/50" />
              <Input
                placeholder="Search customers by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-deep-neutral/20 focus:border-deep-neutral"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-deep-neutral/20 hover:bg-deep-neutral/5"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-deep-neutral/10">
              <CustomerFilters />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Customers Table */}
      <Card className="border-deep-neutral/10">
        <CardHeader>
          <CardTitle className="font-display text-xl tracking-wider text-deep-neutral">
            Customer Directory ({filteredCustomers.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-deep-neutral/10">
                <TableHead className="font-body text-deep-neutral/70">Customer</TableHead>
                <TableHead className="font-body text-deep-neutral/70">Contact</TableHead>
                <TableHead className="font-body text-deep-neutral/70">Segment</TableHead>
                <TableHead className="font-body text-deep-neutral/70">Total Spent</TableHead>
                <TableHead className="font-body text-deep-neutral/70">Status</TableHead>
                <TableHead className="font-body text-deep-neutral/70">Last Interaction</TableHead>
                <TableHead className="font-body text-deep-neutral/70 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id} className="border-deep-neutral/10">
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                        <AvatarFallback className="bg-deep-neutral/10 text-deep-neutral">
                          {customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-body font-medium text-deep-neutral">{customer.name}</div>
                        <div className="font-body text-sm text-deep-neutral/60 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {customer.location}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-body text-sm text-deep-neutral flex items-center">
                        <Mail className="h-3 w-3 mr-2" />
                        {customer.email}
                      </div>
                      <div className="font-body text-sm text-deep-neutral/60 flex items-center">
                        <Phone className="h-3 w-3 mr-2" />
                        {customer.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getSegmentColor(customer.segment)}>{customer.segment}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="font-body font-medium text-deep-neutral">{customer.totalSpent}</div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(customer.status)}>{customer.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="font-body text-sm text-deep-neutral/70">{customer.lastInteraction}</div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Customer
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <AddCustomerDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
    </div>
  )
}
