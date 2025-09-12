"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
    IconTrendingUp,
    IconTrendingDown,
    IconCalendar,
    IconCurrencyDollar,
    IconUsers,
    IconFileText,
    IconClock,
    IconCircleCheck,
    IconChartPie,
    IconChartBar
} from "@tabler/icons-react"
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    Pie,
    PieChart,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Line,
    LineChart
} from "recharts"

// Sample data for medical billing overview
const monthlyRevenueData = [
    { month: "Jan", revenue: 125000, claims: 450, avgClaim: 278 },
    { month: "Feb", revenue: 142000, claims: 520, avgClaim: 273 },
    { month: "Mar", revenue: 138000, claims: 480, avgClaim: 288 },
    { month: "Apr", revenue: 156000, claims: 580, avgClaim: 269 },
    { month: "May", revenue: 162000, claims: 620, avgClaim: 261 },
    { month: "Jun", revenue: 148000, claims: 540, avgClaim: 274 },
    { month: "Jul", revenue: 171000, claims: 650, avgClaim: 263 },
    { month: "Aug", revenue: 165000, claims: 610, avgClaim: 270 },
    { month: "Sep", revenue: 178000, claims: 680, avgClaim: 262 },
    { month: "Oct", revenue: 189000, claims: 720, avgClaim: 263 },
    { month: "Nov", revenue: 195000, claims: 750, avgClaim: 260 },
    { month: "Dec", revenue: 203000, claims: 780, avgClaim: 260 }
]

const serviceDistributionData = [
    { name: "Primary Care", value: 35, color: "#3b82f6" },
    { name: "Specialist Care", value: 28, color: "#10b981" },
    { name: "Emergency Services", value: 15, color: "#f59e0b" },
    { name: "Diagnostic Tests", value: 12, color: "#8b5cf6" },
    { name: "Surgical Procedures", value: 10, color: "#ef4444" }
]

const quarterlyData = [
    { quarter: "Q1 2024", revenue: 405000, claims: 1450, avgProcessingTime: 12.5 },
    { quarter: "Q2 2024", revenue: 466000, claims: 1740, avgProcessingTime: 11.8 },
    { quarter: "Q3 2024", revenue: 514000, claims: 1940, avgProcessingTime: 11.2 },
    { quarter: "Q4 2024", revenue: 587000, claims: 2250, avgProcessingTime: 10.5 }
]

const chartConfig = {
    revenue: {
        label: "Revenue",
        color: "#3b82f6"
    },
    claims: {
        label: "Claims",
        color: "#10b981"
    },
    avgClaim: {
        label: "Avg Claim Value",
        color: "#f59e0b"
    }
}

const serviceChartConfig = {
    "Primary Care": {
        label: "Primary Care",
        color: "#3b82f6"
    },
    "Specialist Care": {
        label: "Specialist Care",
        color: "#10b981"
    },
    "Emergency Services": {
        label: "Emergency Services",
        color: "#f59e0b"
    },
    "Diagnostic Tests": {
        label: "Diagnostic Tests",
        color: "#8b5cf6"
    },
    "Surgical Procedures": {
        label: "Surgical Procedures",
        color: "#ef4444"
    }
}

export default function OverviewPage() {
    const currentMonth = monthlyRevenueData[monthlyRevenueData.length - 1]
    const previousMonth = monthlyRevenueData[monthlyRevenueData.length - 2]
    const revenueGrowth = ((currentMonth.revenue - previousMonth.revenue) / previousMonth.revenue) * 100
    const claimsGrowth = ((currentMonth.claims - previousMonth.claims) / previousMonth.claims) * 100

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Billing Overview</h1>
                    <p className="text-gray-600 mt-1">Comprehensive view of your medical billing performance</p>
                </div>
                <div className="flex items-center gap-2">
                    <IconCalendar className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</span>
                </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                        <IconCurrencyDollar className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            $59,800
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                            <IconTrendingUp className="h-3 w-3 mr-1" />
                            <span>+12.3% from last month</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                        <IconUsers className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            168
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                            <IconTrendingUp className="h-3 w-3 mr-1" />
                            <span>+8.7% from last month</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg. per Appointment</CardTitle>
                        <IconCurrencyDollar className="h-4 w-4 text-amber-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            $356
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                            <IconTrendingUp className="h-3 w-3 mr-1" />
                            <span>+3.2% from last month</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Utilisation Rate</CardTitle>
                        <IconChartPie className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            87.5%
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                            <IconTrendingDown className="h-3 w-3 mr-1" />
                            <span>-2.1% from last month</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Monthly Revenue Trend */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <IconChartBar className="h-5 w-5 text-blue-600" />
                            Monthly Revenue Trends
                        </CardTitle>
                        <CardDescription>
                            Revenue and claims processed over the last 12 months
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="h-[300px]">
                            <AreaChart data={monthlyRevenueData}>
                                <defs>
                                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#3b82f6"
                                    fill="url(#revenueGradient)"
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

                {/* Service Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <IconChartPie className="h-5 w-5 text-green-600" />
                            Service Distribution
                        </CardTitle>
                        <CardDescription>
                            Breakdown of services by category
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={serviceChartConfig} className="h-[300px]">
                            <PieChart>
                                <Pie
                                    data={serviceDistributionData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {serviceDistributionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <ChartTooltip content={<ChartTooltipContent />} />
                            </PieChart>
                        </ChartContainer>
                        <div className="mt-4 space-y-2">
                            {serviceDistributionData.map((service, index) => (
                                <div key={index} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: service.color }}
                                        />
                                        <span>{service.name}</span>
                                    </div>
                                    <span className="font-medium">{service.value}%</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Quarterly Comparison */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <IconTrendingUp className="h-5 w-5 text-purple-600" />
                        Quarterly Performance Comparison
                    </CardTitle>
                    <CardDescription>
                        Year-over-year quarterly performance metrics
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {/* Quarterly Revenue Chart */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Revenue by Quarter</h4>
                            <ChartContainer config={chartConfig} className="h-[250px]">
                                <BarChart data={quarterlyData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="quarter" />
                                    <YAxis />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ChartContainer>
                        </div>

                        {/* Quarterly Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {quarterlyData.map((quarter, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-gray-900 mb-2">{quarter.quarter}</h5>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600">Revenue:</span>
                                            <span className="font-medium">${quarter.revenue.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600">Claims:</span>
                                            <span className="font-medium">{quarter.claims.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600">Avg Processing:</span>
                                            <span className="font-medium">{quarter.avgProcessingTime} days</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}
