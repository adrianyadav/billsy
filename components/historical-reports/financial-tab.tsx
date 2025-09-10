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

interface FinancialTabProps {
  dateRange: string
}

// Mock data for financial analytics
const financialData = {
  totalBillings: {
    byServiceDate: 485750.50,
    byCreatedDate: 472300.25,
    growth: 8.5
  },
  totalPayments: {
    byPaidDate: 423450.75,
    growth: 12.3
  },
  paymentTypes: [
    { type: "Medicare", amount: 185750.25, percentage: 43.8, color: "bg-blue-500" },
    { type: "Private", amount: 125300.50, percentage: 29.6, color: "bg-green-500" },
    { type: "DVA", amount: 87500.00, percentage: 20.7, color: "bg-purple-500" },
    { type: "Workers Comp", amount: 24900.00, percentage: 5.9, color: "bg-orange-500" }
  ],
  monthlyTrends: [
    { month: "Jan", billings: 38500, payments: 35200, outstanding: 3300 },
    { month: "Feb", billings: 41200, payments: 38800, outstanding: 2400 },
    { month: "Mar", billings: 39800, payments: 36500, outstanding: 3300 },
    { month: "Apr", billings: 45600, payments: 43200, outstanding: 2400 },
    { month: "May", billings: 47200, payments: 44800, outstanding: 2400 },
    { month: "Jun", billings: 48900, payments: 46500, outstanding: 2400 },
    { month: "Jul", billings: 51200, payments: 48800, outstanding: 2400 },
    { month: "Aug", billings: 49800, payments: 47400, outstanding: 2400 },
    { month: "Sep", billings: 52300, payments: 49900, outstanding: 2400 },
    { month: "Oct", billings: 51600, payments: 49200, outstanding: 2400 },
    { month: "Nov", billings: 53400, payments: 51000, outstanding: 2400 },
    { month: "Dec", billings: 54850, payments: 52450, outstanding: 2400 }
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
              +{financialData.totalBillings.growth}% from last period
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
            <p className="text-xs text-muted-foreground">
              Administrative billing date
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Payments</CardTitle>
            <IconCurrencyDollar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(financialData.totalPayments.byPaidDate)}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <IconTrendingUp className="h-3 w-3" />
              +{financialData.totalPayments.growth}% from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding Amount</CardTitle>
            <IconAlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(financialData.totalBillings.byServiceDate - financialData.totalPayments.byPaidDate)}
            </div>
            <p className="text-xs text-muted-foreground">
              Pending collection
            </p>
          </CardContent>
        </Card>
      </div>

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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {financialData.paymentTypes.map((payment) => (
              <div key={payment.type} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${payment.color}`} />
                    <span className="text-sm font-medium">{payment.type}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{payment.percentage}%</span>
                </div>
                <div className="text-lg font-semibold">{formatCurrency(payment.amount)}</div>
                <Progress value={payment.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Financial Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconChartLine className="h-5 w-5" />
            Monthly Financial Trends
          </CardTitle>
          <CardDescription>
            Billings vs Payments trend analysis over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FinancialCharts data={financialData.monthlyTrends} />
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
            Critical financial performance indicators with targets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {financialData.kpis.map((kpi) => (
              <div key={kpi.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{kpi.name}</span>
                    {getTrendIcon(kpi.trend)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-lg font-bold ${getTrendColor(kpi.trend)}`}>
                      {kpi.value}{kpi.unit}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Target: {kpi.target}{kpi.unit}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{Math.round((kpi.value / kpi.target) * 100)}%</span>
                  </div>
                  <Progress 
                    value={Math.min((kpi.value / kpi.target) * 100, 100)} 
                    className="h-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Method Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconCreditCard className="h-5 w-5" />
            Payment Method Analysis
          </CardTitle>
          <CardDescription>
            Breakdown of payment methods and processing times
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <IconBuildingHospital className="h-4 w-4 text-blue-500" />
                <span className="font-medium">Medicare</span>
              </div>
              <div className="text-2xl font-bold">{formatCurrency(185750.25)}</div>
              <div className="text-sm text-muted-foreground">Avg: 14 days</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <IconCreditCard className="h-4 w-4 text-green-500" />
                <span className="font-medium">Private Insurance</span>
              </div>
              <div className="text-2xl font-bold">{formatCurrency(125300.50)}</div>
              <div className="text-sm text-muted-foreground">Avg: 21 days</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <IconCash className="h-4 w-4 text-purple-500" />
                <span className="font-medium">Direct Payment</span>
              </div>
              <div className="text-2xl font-bold">{formatCurrency(112400.00)}</div>
              <div className="text-sm text-muted-foreground">Avg: 0 days</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
