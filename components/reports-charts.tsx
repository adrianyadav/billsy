"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts"

interface ReportsChartsProps {
  type: "revenue" | "status" | "department" | "provider"
}

const revenueData = [
  { month: "Jan", revenue: 45000, previousMonth: 42000 },
  { month: "Feb", revenue: 52000, previousMonth: 45000 },
  { month: "Mar", revenue: 48000, previousMonth: 52000 },
  { month: "Apr", revenue: 61000, previousMonth: 48000 },
  { month: "May", revenue: 55000, previousMonth: 61000 },
  { month: "Jun", revenue: 67000, previousMonth: 55000 },
]

const statusData = [
  { name: "Paid", value: 74.7, count: 4, color: "#10b981" },
  { name: "Pending", value: 17.9, count: 2, color: "#f59e0b" },
  { name: "Overdue", value: 7.4, count: 2, color: "#ef4444" },
]

const departmentData = [
  { department: "Emergency", revenue: 25000, invoices: 12 },
  { department: "Cardiology", revenue: 18000, invoices: 8 },
  { department: "Orthopedics", revenue: 15000, invoices: 6 },
  { department: "Neurology", revenue: 12000, invoices: 5 },
  { department: "Radiology", revenue: 8000, invoices: 4 },
  { department: "Oncology", revenue: 6000, invoices: 3 },
  { department: "General Surgery", revenue: 5000, invoices: 2 },
]

const providerData = [
  { provider: "Dr. Sarah Johnson", revenue: 12500, patients: 15 },
  { provider: "Dr. James Wilson", revenue: 15600, patients: 18 },
  { provider: "Dr. Michael Chen", revenue: 8750, patients: 12 },
  { provider: "Dr. Robert Kim", revenue: 9800, patients: 14 },
  { provider: "Dr. Emily Rodriguez", revenue: 3200, patients: 8 },
  { provider: "Dr. Lisa Park", revenue: 4200, patients: 10 },
  { provider: "Dr. Maria Garcia", revenue: 6750, patients: 9 },
  { provider: "Dr. David Thompson", revenue: 11200, patients: 16 },
]

const chartConfig = {
  revenue: {
    revenue: {
      label: "Current Month",
      color: "hsl(var(--primary))",
    },
    previousMonth: {
      label: "Previous Month",
      color: "hsl(var(--muted-foreground))",
    },
  },
  department: {
    revenue: {
      label: "Revenue",
      color: "hsl(var(--primary))",
    },
  },
  provider: {
    revenue: {
      label: "Revenue",
      color: "hsl(var(--primary))",
    },
  },
} satisfies ChartConfig

export function ReportsCharts({ type }: ReportsChartsProps) {
  const renderChart = () => {
    switch (type) {
      case "revenue":
        return (
          <ChartContainer config={chartConfig.revenue}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                formatter={(value, name) => [
                  `$${Number(value).toLocaleString()}`,
                  name === "revenue" ? "Current Month" : "Previous Month"
                ]}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-revenue)"
                strokeWidth={2}
                dot={{ fill: "var(--color-revenue)", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="previousMonth"
                stroke="var(--color-previousMonth)"
                strokeWidth={1}
                strokeDasharray="5 5"
                dot={{ fill: "var(--color-previousMonth)", strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ChartContainer>
        )

      case "status":
        return (
          <div className="space-y-4">
            <div className="flex justify-center">
              <PieChart width={200} height={200}>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip
                  formatter={(value, name, props) => [
                    `${value}%`,
                    `${props.payload.count} invoices`
                  ]}
                />
              </PieChart>
            </div>
            <div className="space-y-2">
              {statusData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.value}% ({item.count})
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "department":
        return (
          <ChartContainer config={chartConfig.department}>
            <BarChart data={departmentData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                type="number"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <YAxis 
                type="category"
                dataKey="department"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                width={100}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                formatter={(value, name) => [
                  `$${Number(value).toLocaleString()}`,
                  "Revenue"
                ]}
              />
              <Bar 
                dataKey="revenue" 
                fill="var(--color-revenue)"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ChartContainer>
        )

      case "provider":
        return (
          <ChartContainer config={chartConfig.provider}>
            <BarChart data={providerData.slice(0, 5)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="provider" 
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                formatter={(value, name) => [
                  `$${Number(value).toLocaleString()}`,
                  "Revenue"
                ]}
              />
              <Bar 
                dataKey="revenue" 
                fill="var(--color-revenue)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        )

      default:
        return null
    }
  }

  return (
    <div className="h-[300px] w-full">
      {renderChart()}
    </div>
  )
}
