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

interface OperationalChartsProps {
  data: Array<{
    month: string
    billingsPerHour: number
    appointmentsPerHour: number
    utilization: number
  }>
}

const chartConfig = {
  billingsPerHour: {
    label: "Billings per Hour",
    color: "hsl(var(--primary))",
  },
  appointmentsPerHour: {
    label: "Appointments per Hour",
    color: "hsl(var(--chart-2))",
  },
  utilization: {
    label: "Utilization %",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function OperationalCharts({ data }: OperationalChartsProps) {
  return (
    <div className="space-y-6">
      {/* Efficiency Trends Line Chart */}
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
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value, name) => [
                `${Number(value).toFixed(1)}${name === "utilization" ? "%" : ""}`,
                name === "billingsPerHour" ? "Billings/Hour" : 
                name === "appointmentsPerHour" ? "Appointments/Hour" : "Utilization %"
              ]}
            />
            <Line
              type="monotone"
              dataKey="billingsPerHour"
              stroke="var(--color-billingsPerHour)"
              strokeWidth={2}
              dot={{ fill: "var(--color-billingsPerHour)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="appointmentsPerHour"
              stroke="var(--color-appointmentsPerHour)"
              strokeWidth={2}
              dot={{ fill: "var(--color-appointmentsPerHour)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </div>

      {/* Utilization Bar Chart */}
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
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value, name) => [
                `${Number(value).toFixed(1)}%`,
                "Utilization"
              ]}
            />
            <Bar 
              dataKey="utilization" 
              fill="var(--color-utilization)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>

      {/* Combined Efficiency Area Chart */}
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
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value, name) => [
                `${Number(value).toFixed(1)}${name === "utilization" ? "%" : ""}`,
                name === "billingsPerHour" ? "Billings/Hour" : 
                name === "appointmentsPerHour" ? "Appointments/Hour" : "Utilization %"
              ]}
            />
            <Area
              type="monotone"
              dataKey="billingsPerHour"
              stackId="1"
              stroke="var(--color-billingsPerHour)"
              fill="var(--color-billingsPerHour)"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="appointmentsPerHour"
              stackId="1"
              stroke="var(--color-appointmentsPerHour)"
              fill="var(--color-appointmentsPerHour)"
              fillOpacity={0.4}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  )
}
