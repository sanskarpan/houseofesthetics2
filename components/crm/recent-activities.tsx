"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    type: "inquiry",
    customer: "alexandra morrison",
    action: "inquired about duchess chair",
    time: "2 minutes ago",
    avatar: "/placeholder.svg?height=32&width=32&text=AM",
  },
  {
    id: 2,
    type: "order",
    customer: "marcus chen",
    action: "placed order for basilisk bar counter",
    time: "1 hour ago",
    avatar: "/placeholder.svg?height=32&width=32&text=MC",
  },
  {
    id: 3,
    type: "visit",
    customer: "isabella rodriguez",
    action: "scheduled atelier visit",
    time: "3 hours ago",
    avatar: "/placeholder.svg?height=32&width=32&text=IR",
  },
  {
    id: 4,
    type: "delivery",
    customer: "james wilson",
    action: "order delivered successfully",
    time: "5 hours ago",
    avatar: "/placeholder.svg?height=32&width=32&text=JW",
  },
  {
    id: 5,
    type: "inquiry",
    customer: "sophia martinez",
    action: "requested product catalog",
    time: "1 day ago",
    avatar: "/placeholder.svg?height=32&width=32&text=SM",
  },
]

const getActivityBadge = (type: string) => {
  switch (type) {
    case "inquiry":
      return (
        <Badge variant="outline" className="text-xs font-body">
          inquiry
        </Badge>
      )
    case "order":
      return (
        <Badge variant="default" className="text-xs font-body">
          order
        </Badge>
      )
    case "visit":
      return (
        <Badge variant="secondary" className="text-xs font-body">
          visit
        </Badge>
      )
    case "delivery":
      return <Badge className="text-xs font-body bg-green-100 text-green-800">delivery</Badge>
    default:
      return (
        <Badge variant="outline" className="text-xs font-body">
          {type}
        </Badge>
      )
  }
}

export function RecentActivities() {
  return (
    <Card className="border-deep-neutral/10">
      <CardHeader>
        <CardTitle className="font-display text-lg lowercase tracking-wide">recent activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.customer} />
                <AvatarFallback className="bg-deep-neutral/10 text-deep-neutral text-xs font-body">
                  {activity.customer
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-body text-sm font-medium">{activity.customer}</p>
                  {getActivityBadge(activity.type)}
                </div>
                <p className="font-body text-xs text-deep-neutral/60">{activity.action}</p>
                <p className="font-body text-xs text-deep-neutral/50">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
