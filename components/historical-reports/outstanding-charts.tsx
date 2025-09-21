"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
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
  ComposedChart,
} from "recharts";

interface OutstandingChartsProps {
  data: Array<{
    month: string;
    total: number;
    unbilled: number;
    onHold: number;
    outstanding: number;
  }>;
}

const chartConfig = {
  total: {
    label: "Total Appointments",
    color: "hsl(var(--primary))",
  },
  unbilled: {
    label: "Unbilled",
    color: "hsl(var(--chart-2))",
  },
  onHold: {
    label: "On Hold",
    color: "hsl(var(--chart-3))",
  },
  outstanding: {
    label: "Outstanding",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function OutstandingCharts({ data }: OutstandingChartsProps) {
  return (
    <div className="space-y-6">
      {/* Appointment Trends Line Chart */}
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
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value, name) => [
                `${Number(value).toLocaleString()}`,
                name === "total"
                  ? "Total Appointments"
                  : name === "unbilled"
                    ? "Unbilled"
                    : name === "onHold"
                      ? "On Hold"
                      : "Outstanding",
              ]}
            />
            <Line
              type="monotone"
              dataKey="total"
              stroke="var(--color-total)"
              strokeWidth={3}
              dot={{ fill: "var(--color-total)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="unbilled"
              stroke="var(--color-unbilled)"
              strokeWidth={2}
              dot={{ fill: "var(--color-unbilled)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="onHold"
              stroke="var(--color-onHold)"
              strokeWidth={2}
              dot={{ fill: "var(--color-onHold)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="outstanding"
              stroke="var(--color-outstanding)"
              strokeWidth={2}
              dot={{ fill: "var(--color-outstanding)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </div>

      {/* Outstanding Items Bar Chart */}
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
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value, name) => [
                `${Number(value).toLocaleString()}`,
                name === "unbilled"
                  ? "Unbilled"
                  : name === "onHold"
                    ? "On Hold"
                    : "Outstanding",
              ]}
            />
            <Bar
              dataKey="unbilled"
              fill="var(--color-unbilled)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="onHold"
              fill="var(--color-onHold)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="outstanding"
              fill="var(--color-outstanding)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>

      {/* Outstanding vs Total Appointments */}
      <div className="h-[200px] w-full">
        <ChartContainer config={chartConfig}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value, name) => [
                `${Number(value).toLocaleString()}`,
                name === "total" ? "Total Appointments" : "Outstanding Items",
              ]}
            />
            <Bar
              yAxisId="left"
              dataKey="total"
              fill="var(--color-total)"
              radius={[4, 4, 0, 0]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="outstanding"
              stroke="var(--color-outstanding)"
              strokeWidth={3}
              dot={{ fill: "var(--color-outstanding)", strokeWidth: 2, r: 4 }}
            />
          </ComposedChart>
        </ChartContainer>
      </div>
    </div>
  );
}
