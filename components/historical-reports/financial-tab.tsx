"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  IconCurrencyDollar,
  IconTrendingUp,
  IconTrendingDown,
  IconCalendar,
  IconChartLine,
  IconChartPie,
  IconTarget,
  IconPercentage,
  IconBuildingHospital,
  IconShield,
  IconBriefcase,
  IconCreditCard,
  IconCash,
  IconClock
} from "@tabler/icons-react"
import { FinancialCharts } from "./financial-charts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
} from "recharts"

interface FinancialTabProps {
  dateRange: string
}

// Chart configuration for pie chart
const paymentTypeChartConfig = {
  type: {
    label: "Payment Type",
  },
  amount: {
    label: "Amount",
  },
} satisfies ChartConfig

// Mock data for financial analytics
const financialData = {
  totalBillings: {
    byServiceDate: 59800,
    byCreatedDate: 56900,
    serviceDateGrowth: 12.3,
    createdDateGrowth: 8.7
  },
  totalPayments: {
    byPaidDate: 56900,
    collectionRate: 95.2
  },
  billingsPerAppointment: {
    amount: 356,
    growth: 23
  },
  keyPerformanceRatios: {
    bulkBillingPercentage: 68.5,
    medicarePercentage: 68.5,
    nonMedicarePercentage: 31.5,
    cdmBillingsPercentage: 13.3,
    telehealthBillings: 5827,
    telehealthPercentage: 20.5
  },
  paymentTypes: [
    { type: "Medicare", amount: 185750.25, percentage: 43.8, color: "#3b82f6" },
    { type: "Private", amount: 125300.50, percentage: 29.6, color: "#10b981" },
    { type: "DVA", amount: 87500.00, percentage: 20.7, color: "#8b5cf6" },
    { type: "Workers Comp", amount: 24900.00, percentage: 5.9, color: "#f59e0b" }
  ],
  monthlyTrends: [
    { month: "Jan", billings: 45000, payments: 43000, outstanding: 2000 },
    { month: "Feb", billings: 48000, payments: 46000, outstanding: 2000 },
    { month: "Mar", billings: 52000, payments: 48000, outstanding: 4000 },
    { month: "Apr", billings: 50000, payments: 50000, outstanding: 0 },
    { month: "May", billings: 55000, payments: 48000, outstanding: 7000 },
    { month: "Jun", billings: 57000, payments: 52000, outstanding: 5000 },
    { month: "Jul", billings: 59000, payments: 57000, outstanding: 2000 },
    { month: "Aug", billings: 60000, payments: 58000, outstanding: 2000 }
  ],
  kpis: [
    { name: "Collection Rate", value: 87.2, target: 90, unit: "%", trend: "up" },
    { name: "Average Payment Time", value: 18.5, target: 15, unit: "days", trend: "down" },
    { name: "Revenue per Patient", value: 285.50, target: 300, unit: "$", trend: "up" },
    { name: "Outstanding Debt Ratio", value: 12.8, target: 10, unit: "%", trend: "down" }
  ]
}

export function FinancialTab({ dateRange }: FinancialTabProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(amount)
  }

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? (
      <IconTrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <IconTrendingDown className="h-4 w-4 text-red-500" />
    )
  }

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-600" : "text-red-600"
  }

  return (
    <div className="space-y-6">
      {/* Key Financial Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Billings (Service Date)</CardTitle>
            <IconCalendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(financialData.totalBillings.byServiceDate)}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <IconTrendingUp className="h-3 w-3" />
              +{financialData.totalBillings.serviceDateGrowth}% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Billings (Created Date)</CardTitle>
            <IconCalendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(financialData.totalBillings.byCreatedDate)}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <IconTrendingUp className="h-3 w-3" />
              +{financialData.totalBillings.createdDateGrowth}% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Payments (Paid Date)</CardTitle>
            <IconCurrencyDollar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(financialData.totalPayments.byPaidDate)}</div>
            <p className="text-xs text-muted-foreground">
              {financialData.totalPayments.collectionRate}% collection rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Billings per Appointment</CardTitle>
            <IconTarget className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(financialData.billingsPerAppointment.amount)}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <IconTrendingUp className="h-3 w-3" />
              +${financialData.billingsPerAppointment.growth} from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Financial Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconChartLine className="h-5 w-5" />
            Financial Trends - 8 Month History
          </CardTitle>
          <CardDescription>
            Billings vs Payments trend analysis over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FinancialCharts data={financialData.monthlyTrends} />
        </CardContent>
      </Card>

      {/* Payment Type Distribution and Key Performance Ratios */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Payment Type Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconChartPie className="h-5 w-5" />
              Payment Type Distribution
            </CardTitle>
            <CardDescription>
              Revenue breakdown by payment source for {dateRange}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full overflow-hidden">
              <ChartContainer config={paymentTypeChartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={financialData.paymentTypes}
                      dataKey="amount"
                      nameKey="type"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      innerRadius={40}
                      paddingAngle={2}
                    >
                      {financialData.paymentTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      formatter={(value, name) => [
                        formatCurrency(Number(value)),
                        name
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Key Performance Ratios */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconTarget className="h-5 w-5" />
              Key Performance Ratios
            </CardTitle>
            <CardDescription>
              Critical financial performance indicators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Bulk-billing % of total */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Bulk-billing % of total</span>
                  <span className="text-sm font-bold">{financialData.keyPerformanceRatios.bulkBillingPercentage}%</span>
                </div>
                <Progress value={financialData.keyPerformanceRatios.bulkBillingPercentage} className="h-2" />
              </div>

              {/* Medicare % of total */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Medicare % of total</span>
                  <span className="text-sm font-bold">{financialData.keyPerformanceRatios.medicarePercentage}%</span>
                </div>
                <Progress value={financialData.keyPerformanceRatios.medicarePercentage} className="h-2" />
              </div>

              {/* Non-medicare % of total */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Non-medicare % of total</span>
                  <span className="text-sm font-bold">{financialData.keyPerformanceRatios.nonMedicarePercentage}%</span>
                </div>
                <Progress value={financialData.keyPerformanceRatios.nonMedicarePercentage} className="h-2" />
              </div>

              {/* CDM billings as % of total */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">CDM billings as % of total</span>
                  <span className="text-sm font-bold">{financialData.keyPerformanceRatios.cdmBillingsPercentage}%</span>
                </div>
                <Progress value={financialData.keyPerformanceRatios.cdmBillingsPercentage} className="h-2" />
              </div>

              {/* Telehealth billings */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Telehealth billings</span>
                  <span className="text-sm font-bold">{formatCurrency(financialData.keyPerformanceRatios.telehealthBillings)} ({financialData.keyPerformanceRatios.telehealthPercentage}%)</span>
                </div>
                <Progress value={financialData.keyPerformanceRatios.telehealthPercentage} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>


      
    </div>
  )
}
