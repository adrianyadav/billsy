"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
} from "recharts";

const appointmentData = [
    { month: "Jan", count: 120 },
    { month: "Feb", count: 135 },
    { month: "Mar", count: 138 },
    { month: "Apr", count: 130 },
    { month: "May", count: 145 },
    { month: "Jun", count: 165 },
    { month: "Jul", count: 178 },
    { month: "Aug", count: 175 },
];

const chartConfig = {
    count: {
        label: "Appointment Count",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig;

export function AppointmentTrendsChart() {
    return (
        <Card className="w-full overflow-hidden">
            <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-800">Appointment Count Trends</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
                <div className="h-[250px] w-full max-w-full overflow-hidden">
                    <ChartContainer
                        config={chartConfig}
                        className="h-full w-full"
                    >
                        <BarChart
                            data={appointmentData}
                            margin={{
                                top: 20,
                                right: 20,
                                left: 20,
                                bottom: 20,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                fontSize={12}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                fontSize={12}
                            />
                            <ChartTooltip
                                content={<ChartTooltipContent />}
                                formatter={(value) => [
                                    `${Number(value).toLocaleString()}`,
                                    "Appointments"
                                ]}
                            />
                            <Bar
                                dataKey="count"
                                fill="var(--color-count)"
                                radius={[4, 4, 0, 0]}
                                maxBarSize={40}
                            />
                        </BarChart>
                    </ChartContainer>
                </div>
            </CardContent>
        </Card>
    );
}
