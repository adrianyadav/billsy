"use client"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"

interface FinancialChartsProps {
  data: Array<{
    month: string
    billings: number
    payments: number
    outstanding: number
  }>
}

const chartConfig = {
  billings: {
    label: "Billings",
    color: "hsl(var(--primary))",
  },
  payments: {
    label: "Payments",
    color: "hsl(var(--chart-2))",
  },
  outstanding: {
    label: "Outstanding",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function FinancialCharts({ data }: FinancialChartsProps) {
  return (
    <div className="space-y-6">
      {/* Monthly Trends Line Chart */}
      <div className="h-[300px] w-full">
        <ChartContainer config={chartConfig}>
          <LineChart data={data}>
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
                name === "billings" ? "Billings" : name === "payments" ? "Payments" : "Outstanding"
              ]}
            />
            <Line
              type="monotone"
              dataKey="billings"
              stroke="var(--color-billings)"
              strokeWidth={2}
              dot={{ fill: "var(--color-billings)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="payments"
              stroke="var(--color-payments)"
              strokeWidth={2}
              dot={{ fill: "var(--color-payments)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="outstanding"
              stroke="var(--color-outstanding)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: "var(--color-outstanding)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </div>

      {/* Monthly Comparison Bar Chart */}
      <div className="h-[250px] w-full">
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
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
                name === "billings" ? "Billings" : name === "payments" ? "Payments" : "Outstanding"
              ]}
            />
            <Bar 
              dataKey="billings" 
              fill="var(--color-billings)"
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="payments" 
              fill="var(--color-payments)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>

      {/* Revenue Growth Area Chart */}
      <div className="h-[200px] w-full">
        <ChartContainer config={chartConfig}>
          <AreaChart data={data}>
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
                name === "billings" ? "Billings" : "Payments"
              ]}
            />
            <Area
              type="monotone"
              dataKey="billings"
              stackId="1"
              stroke="var(--color-billings)"
              fill="var(--color-billings)"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="payments"
              stackId="1"
              stroke="var(--color-payments)"
              fill="var(--color-payments)"
              fillOpacity={0.4}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  )
}
