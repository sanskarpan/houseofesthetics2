"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "vip clients", value: 15, color: "hsl(var(--deep-neutral))" },
  { name: "premium customers", value: 35, color: "hsl(var(--deep-neutral))" },
  { name: "standard customers", value: 40, color: "hsl(var(--deep-neutral))" },
  { name: "prospects", value: 10, color: "hsl(var(--deep-neutral))" },
]

export function CustomerSegmentation() {
  return (
    <Card className="border-deep-neutral/10">
      <CardHeader>
        <CardTitle className="font-display text-lg lowercase tracking-wide">customer segmentation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} opacity={1 - index * 0.15} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid hsl(var(--deep-neutral))",
                  borderRadius: "8px",
                  fontFamily: "var(--font-quicksand)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2 mt-4">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: item.color,
                    opacity: 1 - index * 0.15,
                  }}
                />
                <span className="font-body text-sm">{item.name}</span>
              </div>
              <span className="font-body text-sm font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
