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
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface FinancialChartsProps {
  data: Array<{
    month: string;
    billings: number;
    payments: number;
    outstanding: number;
  }>;
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
} satisfies ChartConfig;

export function FinancialCharts({ data }: FinancialChartsProps) {
  return (
    <div className="h-[300px] w-full overflow-hidden">
      <ChartContainer config={chartConfig} className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
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
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              domain={[0, 60000]}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              formatter={(value, name) => [
                `$${Number(value).toLocaleString()}`,
                name === "billings"
                  ? "Billings"
                  : name === "payments"
                    ? "Payments"
                    : "Outstanding",
              ]}
            />
            <Line
              type="monotone"
              dataKey="billings"
              stroke="var(--color-billings)"
              strokeWidth={3}
              dot={{ fill: "var(--color-billings)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="payments"
              stroke="var(--color-payments)"
              strokeWidth={3}
              dot={{ fill: "var(--color-payments)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="outstanding"
              stroke="var(--color-outstanding)"
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ fill: "var(--color-outstanding)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
