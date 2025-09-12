"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  IconReceipt,
  IconAlertTriangle,
  IconClock,
  IconCalendar,
  IconCurrencyDollar,
  IconTrendingUp,
  IconTrendingDown,
  IconChartLine,
  IconChartBar,
  IconUsers,
  IconCalendarStats,
  IconActivity,
  IconTarget,
  IconPercentage
} from "@tabler/icons-react"
import { OutstandingCharts } from "./outstanding-charts"

interface OutstandingTabProps {
  dateRange: string
}

// Mock data for outstanding analytics
const outstandingData = {
  unbilledAppointments: {
    count: 47,
    dollarValue: 12550.00,
    averageAge: 8.5,
    oldestAge: 23
  },
  billingsOnHold: {
    count: 12,
    dollarValue: 3200.00,
    averageAge: 15.2,
    reasons: [
      { reason: "Missing Information", count: 5, percentage: 41.7 },
      { reason: "Insurance Verification", count: 4, percentage: 33.3 },
      { reason: "Provider Review", count: 2, percentage: 16.7 },
      { reason: "Technical Issues", count: 1, percentage: 8.3 }
    ]
  },
  debtorsOutstanding: {
    count: 89,
    dollarValue: 45650.00,
    averageAge: 22.3,
    ageBuckets: [
      { range: "0-30 days", count: 45, value: 22500, percentage: 49.3 },
      { range: "31-60 days", count: 28, value: 14200, percentage: 31.1 },
      { range: "61-90 days", count: 12, value: 6200, percentage: 13.6 },
      { range: "90+ days", count: 4, value: 2750, percentage: 6.0 }
    ]
  },
  monthlyAppointmentTrends: [
    { month: "Jan", total: 180, unbilled: 12, onHold: 3, outstanding: 8 },
    { month: "Feb", total: 195, unbilled: 15, onHold: 5, outstanding: 12 },
    { month: "Mar", total: 210, unbilled: 18, onHold: 4, outstanding: 15 },
    { month: "Apr", total: 225, unbilled: 22, onHold: 6, outstanding: 18 },
    { month: "May", total: 240, unbilled: 25, onHold: 7, outstanding: 20 },
    { month: "Jun", total: 235, unbilled: 23, onHold: 8, outstanding: 22 },
    { month: "Jul", total: 250, unbilled: 28, onHold: 9, outstanding: 25 },
    { month: "Aug", total: 265, unbilled: 30, onHold: 10, outstanding: 28 },
    { month: "Sep", total: 280, unbilled: 32, onHold: 11, outstanding: 30 },
    { month: "Oct", total: 275, unbilled: 30, onHold: 12, outstanding: 32 },
    { month: "Nov", total: 290, unbilled: 35, onHold: 13, outstanding: 35 },
    { month: "Dec", total: 305, unbilled: 47, onHold: 12, outstanding: 89 }
  ],
  collectionMetrics: {
    collectionRate: 87.5,
    averageCollectionTime: 18.5,
    writeOffRate: 2.3,
    targetCollectionRate: 90.0
  }
}

export function OutstandingTab({ dateRange }: OutstandingTabProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(amount)
  }

  const getAgeColor = (age: number) => {
    if (age <= 7) return "text-green-600"
    if (age <= 14) return "text-yellow-600"
    if (age <= 30) return "text-orange-600"
    return "text-red-600"
  }

  const getAgeBadge = (age: number) => {
    if (age <= 7) return <Badge variant="default" className="bg-green-100 text-green-800">Recent</Badge>
    if (age <= 14) return <Badge variant="outline" className="border-yellow-500 text-yellow-700">Moderate</Badge>
    if (age <= 30) return <Badge variant="outline" className="border-orange-500 text-orange-700">Aging</Badge>
    return <Badge variant="destructive">Overdue</Badge>
  }

  return (
    <div className="space-y-6">
      {/* Outstanding Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unbilled Appointments</CardTitle>
            <IconCalendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{outstandingData.unbilledAppointments.count}</div>
            <p className="text-xs text-muted-foreground">
              Value: {formatCurrency(outstandingData.unbilledAppointments.dollarValue)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Billings on Hold</CardTitle>
            <IconClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{outstandingData.billingsOnHold.count}</div>
            <p className="text-xs text-muted-foreground">
              Value: {formatCurrency(outstandingData.billingsOnHold.dollarValue)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Debtors Outstanding</CardTitle>
            <IconReceipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{outstandingData.debtorsOutstanding.count}</div>
            <p className="text-xs text-muted-foreground">
              Value: {formatCurrency(outstandingData.debtorsOutstanding.dollarValue)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Outstanding</CardTitle>
            <IconAlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(
                outstandingData.unbilledAppointments.dollarValue + 
                outstandingData.billingsOnHold.dollarValue + 
                outstandingData.debtorsOutstanding.dollarValue
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Combined value
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Unbilled Appointments Detail */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconCalendar className="h-5 w-5" />
            Unbilled Appointments Analysis
          </CardTitle>
          <CardDescription>
            Appointments that have not yet been billed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold">Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Count:</span>
                  <span className="font-semibold">{outstandingData.unbilledAppointments.count}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Value:</span>
                  <span className="font-semibold">{formatCurrency(outstandingData.unbilledAppointments.dollarValue)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Age:</span>
                  <span className={`font-semibold ${getAgeColor(outstandingData.unbilledAppointments.averageAge)}`}>
                    {outstandingData.unbilledAppointments.averageAge} days
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Oldest:</span>
                  <span className={`font-semibold ${getAgeColor(outstandingData.unbilledAppointments.oldestAge)}`}>
                    {outstandingData.unbilledAppointments.oldestAge} days
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Age Distribution</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Recent (0-7 days)</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">15</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Moderate (8-14 days)</span>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-700">18</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Aging (15-30 days)</span>
                  <Badge variant="outline" className="border-orange-500 text-orange-700">12</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Overdue (30+ days)</span>
                  <Badge variant="destructive">2</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Billings on Hold Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconClock className="h-5 w-5" />
            Billings on Hold Analysis
          </CardTitle>
          <CardDescription>
            Billings that are temporarily suspended and their reasons
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total on Hold:</span>
                  <span className="font-semibold">{outstandingData.billingsOnHold.count}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Value:</span>
                  <span className="font-semibold">{formatCurrency(outstandingData.billingsOnHold.dollarValue)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Age:</span>
                  <span className={`font-semibold ${getAgeColor(outstandingData.billingsOnHold.averageAge)}`}>
                    {outstandingData.billingsOnHold.averageAge} days
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Hold Reasons</h4>
                {outstandingData.billingsOnHold.reasons.map((reason) => (
                  <div key={reason.reason} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{reason.reason}</span>
                      <span className="text-sm font-semibold">{reason.count} ({reason.percentage}%)</span>
                    </div>
                    <Progress value={reason.percentage} className="h-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Debtors Outstanding Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconReceipt className="h-5 w-5" />
            Debtors Outstanding Analysis
          </CardTitle>
          <CardDescription>
            Outstanding debtors categorized by age buckets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Debtors:</span>
                  <span className="font-semibold">{outstandingData.debtorsOutstanding.count}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Value:</span>
                  <span className="font-semibold">{formatCurrency(outstandingData.debtorsOutstanding.dollarValue)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Age:</span>
                  <span className={`font-semibold ${getAgeColor(outstandingData.debtorsOutstanding.averageAge)}`}>
                    {outstandingData.debtorsOutstanding.averageAge} days
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Age Buckets</h4>
                {outstandingData.debtorsOutstanding.ageBuckets.map((bucket) => (
                  <div key={bucket.range} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{bucket.range}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">{bucket.count}</span>
                        <span className="text-sm text-muted-foreground">({bucket.percentage}%)</span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Value: {formatCurrency(bucket.value)}
                    </div>
                    <Progress value={bucket.percentage} className="h-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Collection Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconTarget className="h-5 w-5" />
            Collection Performance Metrics
          </CardTitle>
          <CardDescription>
            Key performance indicators for debt collection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{outstandingData.collectionMetrics.collectionRate}%</div>
              <div className="text-sm text-muted-foreground">Collection Rate</div>
              <div className="text-xs text-muted-foreground mt-1">
                Target: {outstandingData.collectionMetrics.targetCollectionRate}%
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{outstandingData.collectionMetrics.averageCollectionTime} days</div>
              <div className="text-sm text-muted-foreground">Avg Collection Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{outstandingData.collectionMetrics.writeOffRate}%</div>
              <div className="text-sm text-muted-foreground">Write-off Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {formatCurrency(outstandingData.debtorsOutstanding.dollarValue * (1 - outstandingData.collectionMetrics.collectionRate / 100))}
              </div>
              <div className="text-sm text-muted-foreground">At Risk Amount</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Appointment Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconChartLine className="h-5 w-5" />
            Monthly Appointment Count Trends
          </CardTitle>
          <CardDescription>
            Trends in total appointments and outstanding items over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OutstandingCharts data={outstandingData.monthlyAppointmentTrends} />
        </CardContent>
      </Card>
    </div>
  )
}
