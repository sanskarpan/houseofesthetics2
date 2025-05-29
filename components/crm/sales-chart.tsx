"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "jan", revenue: 45000, orders: 12 },
  { month: "feb", revenue: 52000, orders: 15 },
  { month: "mar", revenue: 48000, orders: 13 },
  { month: "apr", revenue: 61000, orders: 18 },
  { month: "may", revenue: 55000, orders: 16 },
  { month: "jun", revenue: 67000, orders: 21 },
  { month: "jul", revenue: 72000, orders: 24 },
  { month: "aug", revenue: 69000, orders: 22 },
  { month: "sep", revenue: 78000, orders: 26 },
  { month: "oct", revenue: 84000, orders: 28 },
  { month: "nov", revenue: 91000, orders: 32 },
  { month: "dec", revenue: 95000, orders: 35 },
]

export function SalesChart() {
  return (
    <Card className="border-deep-neutral/10">
      <CardHeader>
        <CardTitle className="font-display text-lg lowercase tracking-wide">sales performance</CardTitle>
        <p className="font-body text-sm text-deep-neutral/60">monthly revenue and order trends</p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--deep-neutral))" opacity={0.1} />
              <XAxis
                dataKey="month"
                stroke="hsl(var(--deep-neutral))"
                opacity={0.7}
                fontSize={12}
                fontFamily="var(--font-quicksand)"
              />
              <YAxis stroke="hsl(var(--deep-neutral))" opacity={0.7} fontSize={12} fontFamily="var(--font-quicksand)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid hsl(var(--deep-neutral))",
                  borderRadius: "8px",
                  fontFamily: "var(--font-quicksand)",
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--deep-neutral))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--deep-neutral))", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
