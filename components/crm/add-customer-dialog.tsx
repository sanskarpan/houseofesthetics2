"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AddCustomerDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddCustomerDialog({ open, onOpenChange }: AddCustomerDialogProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    segment: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Customer data:", formData)
    onOpenChange(false)
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      segment: "",
      notes: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl tracking-wider text-deep-neutral">Add New Customer</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-deep-neutral">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="font-body text-sm text-deep-neutral">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="border-deep-neutral/20 focus:border-deep-neutral"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="font-body text-sm text-deep-neutral">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="border-deep-neutral/20 focus:border-deep-neutral"
                  required
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-deep-neutral">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-body text-sm text-deep-neutral">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-deep-neutral/20 focus:border-deep-neutral"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-body text-sm text-deep-neutral">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border-deep-neutral/20 focus:border-deep-neutral"
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-deep-neutral">Address</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address" className="font-body text-sm text-deep-neutral">
                  Street Address
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="border-deep-neutral/20 focus:border-deep-neutral"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="font-body text-sm text-deep-neutral">
                    City
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="border-deep-neutral/20 focus:border-deep-neutral"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="font-body text-sm text-deep-neutral">
                    State
                  </Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className="border-deep-neutral/20 focus:border-deep-neutral"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="font-body text-sm text-deep-neutral">
                    ZIP Code
                  </Label>
                  <Input
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    className="border-deep-neutral/20 focus:border-deep-neutral"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Customer Segment */}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-deep-neutral">Customer Classification</h3>
            <div className="space-y-2">
              <Label htmlFor="segment" className="font-body text-sm text-deep-neutral">
                Customer Segment
              </Label>
              <Select value={formData.segment} onValueChange={(value) => handleInputChange("segment", value)}>
                <SelectTrigger className="border-deep-neutral/20">
                  <SelectValue placeholder="Select customer segment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="prospect">Prospect</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="vip">VIP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-deep-neutral">Additional Information</h3>
            <div className="space-y-2">
              <Label htmlFor="notes" className="font-body text-sm text-deep-neutral">
                Notes
              </Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                className="border-deep-neutral/20 focus:border-deep-neutral"
                rows={3}
                placeholder="Any additional notes about this customer..."
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-deep-neutral/10">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-deep-neutral/20 hover:bg-deep-neutral/5"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-deep-neutral hover:bg-deep-neutral/90 text-background-light">
              Add Customer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
