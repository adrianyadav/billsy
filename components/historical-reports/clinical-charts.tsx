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

interface ClinicalChartsProps {
  data: Array<{
    month: string;
    consultations: number;
    procedures: number;
    investigations: number;
    revenue: number;
  }>;
}

const chartConfig = {
  consultations: {
    label: "Consultations",
    color: "hsl(var(--primary))",
  },
  procedures: {
    label: "Procedures",
    color: "hsl(var(--chart-2))",
  },
  investigations: {
    label: "Investigations",
    color: "hsl(var(--chart-3))",
  },
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function ClinicalCharts({ data }: ClinicalChartsProps) {
  return (
    <div className="space-y-6">
      {/* Service Volume Trends */}
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
                name === "consultations"
                  ? "Consultations"
                  : name === "procedures"
                    ? "Procedures"
                    : "Investigations",
              ]}
            />
            <Line
              type="monotone"
              dataKey="consultations"
              stroke="var(--color-consultations)"
              strokeWidth={2}
              dot={{ fill: "var(--color-consultations)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="procedures"
              stroke="var(--color-procedures)"
              strokeWidth={2}
              dot={{ fill: "var(--color-procedures)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="investigations"
              stroke="var(--color-investigations)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-investigations)",
                strokeWidth: 2,
                r: 4,
              }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </div>

      {/* Service Volume Bar Chart */}
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
                name === "consultations"
                  ? "Consultations"
                  : name === "procedures"
                    ? "Procedures"
                    : "Investigations",
              ]}
            />
            <Bar
              dataKey="consultations"
              fill="var(--color-consultations)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="procedures"
              fill="var(--color-procedures)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="investigations"
              fill="var(--color-investigations)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>

      {/* Revenue vs Service Volume */}
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
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value, name) => [
                name === "revenue"
                  ? `$${Number(value).toLocaleString()}`
                  : `${Number(value).toLocaleString()}`,
                name === "revenue" ? "Revenue" : "Total Services",
              ]}
            />
            <Bar
              yAxisId="left"
              dataKey="consultations"
              fill="var(--color-consultations)"
              radius={[4, 4, 0, 0]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-revenue)"
              strokeWidth={3}
              dot={{ fill: "var(--color-revenue)", strokeWidth: 2, r: 4 }}
            />
          </ComposedChart>
        </ChartContainer>
      </div>
    </div>
  );
}
