"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Cell,
} from "recharts";

interface BenchmarkingChartsProps {
  data: Array<{
    practice: string;
    billings: number;
    patients: number;
    efficiency: number;
  }>;
}

const chartConfig = {
  billings: {
    label: "Billings",
    color: "hsl(var(--primary))",
  },
  patients: {
    label: "Patients",
    color: "hsl(var(--chart-2))",
  },
  efficiency: {
    label: "Efficiency",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
];

export function BenchmarkingCharts({ data }: BenchmarkingChartsProps) {
  return (
    <div className="space-y-6">
      {/* Billings Comparison */}
      <div className="h-[300px] w-full">
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="practice"
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
                "Billings",
              ]}
            />
            <Bar
              dataKey="billings"
              fill="var(--color-billings)"
              radius={[4, 4, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>

      {/* Efficiency vs Billings Scatter Plot */}
      <div className="h-[250px] w-full">
        <ChartContainer config={chartConfig}>
          <ScatterChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="efficiency"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis
              dataKey="billings"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value, name) => [
                name === "efficiency"
                  ? `${Number(value).toFixed(1)}%`
                  : `$${Number(value).toLocaleString()}`,
                name === "efficiency" ? "Efficiency" : "Billings",
              ]}
            />
            <Scatter dataKey="billings" fill="var(--color-billings)">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ChartContainer>
      </div>

      {/* Patients vs Billings Comparison */}
      <div className="h-[200px] w-full">
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="practice"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value, name) => [
                `${Number(value).toLocaleString()}`,
                name === "patients" ? "Patients" : "Efficiency %",
              ]}
            />
            <Bar
              dataKey="patients"
              fill="var(--color-patients)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="efficiency"
              fill="var(--color-efficiency)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
