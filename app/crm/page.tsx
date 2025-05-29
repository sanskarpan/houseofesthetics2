"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, MessageSquare, Target } from "lucide-react"
import { SalesChart } from "@/components/crm/sales-chart"
import { RecentActivities } from "@/components/crm/recent-activities"
import { CustomerSegmentation } from "@/components/crm/customer-segmentation"
import { QuickActions } from "@/components/crm/quick-actions"

const stats = [
  {
    title: "total customers",
    value: "2,847",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "monthly revenue",
    value: "$847,290",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "active inquiries",
    value: "156",
    change: "+23.1%",
    changeType: "positive" as const,
    icon: MessageSquare,
  },
  {
    title: "conversion rate",
    value: "24.8%",
    change: "-2.4%",
    changeType: "negative" as const,
    icon: Target,
  },
]

const recentOrders = [
  {
    id: "HOE-2024-156",
    customer: "alexandra morrison",
    product: "duchess chair",
    amount: "$12,500",
    status: "confirmed",
    date: "2024-01-15",
  },
  {
    id: "HOE-2024-157",
    customer: "marcus chen",
    product: "basilisk bar counter",
    amount: "$28,900",
    status: "in production",
    date: "2024-01-14",
  },
  {
    id: "HOE-2024-158",
    customer: "isabella rodriguez",
    product: "vayuvega night stand",
    amount: "$8,750",
    status: "delivered",
    date: "2024-01-13",
  },
]

export default function CRMDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="section-title">crm dashboard</h1>
          <p className="body-text text-deep-neutral/70">overview of customer relationships and business performance</p>
        </div>
        <QuickActions />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-deep-neutral/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-body text-sm lowercase tracking-wide text-deep-neutral/70">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-deep-neutral/50" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-display font-bold text-deep-neutral">{stat.value}</div>
              <p className="text-xs text-deep-neutral/60 flex items-center mt-1">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-body ${
                    stat.changeType === "positive" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="ml-2 font-body">from last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2">
          <SalesChart />
        </div>

        {/* Customer Segmentation */}
        <div>
          <CustomerSegmentation />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card className="border-deep-neutral/10">
          <CardHeader>
            <CardTitle className="font-display text-lg lowercase tracking-wide">recent orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-3 border border-deep-neutral/10 rounded-lg"
                >
                  <div className="space-y-1">
                    <p className="font-body text-sm font-medium">{order.customer}</p>
                    <p className="font-body text-xs text-deep-neutral/60">{order.product}</p>
                    <p className="font-body text-xs text-deep-neutral/50">{order.date}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-display font-bold text-deep-neutral">{order.amount}</p>
                    <Badge
                      variant={
                        order.status === "delivered"
                          ? "default"
                          : order.status === "confirmed"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs font-body"
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <RecentActivities />
      </div>
    </div>
  )
}
