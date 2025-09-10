"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  IconActivity,
  IconClock,
  IconUsers,
  IconUserCheck,
  IconUserX,
  IconCalendarX,
  IconCalendarCheck,
  IconTarget,
  IconPercentage,
  IconTrendingUp,
  IconTrendingDown,
  IconChartBar,
  IconChartLine,
  IconClockHour4,
  IconAlertTriangle,
  IconCheckCircle,
  IconXCircle
} from "@tabler/icons-react"
import { OperationalCharts } from "./operational-charts"

interface OperationalTabProps {
  dateRange: string
}

// Mock data for operational analytics
const operationalData = {
  efficiency: {
    billingsPerHour: 285.50,
    appointmentsPerHour: 2.8,
    patientsPerHour: 2.6,
    dnaRate: 7.2,
    noShowRate: 5.8
  },
  timeBreakdown: [
    { category: "Consulting", hours: 145, percentage: 65, color: "bg-blue-500" },
    { category: "Administrative", hours: 52, percentage: 23, color: "bg-green-500" },
    { category: "Unbooked", hours: 26, percentage: 12, color: "bg-orange-500" }
  ],
  waitTimes: {
    averageWait: 12.5,
    targetWait: 10,
    maxWait: 35,
    onTimeRate: 78.5
  },
  utilization: {
    current: 87.2,
    target: 90,
    peak: 95,
    low: 72
  },
  appointmentMismatches: {
    total: 23,
    billingOverAppointments: 8,
    appointmentsOverBilling: 15,
    resolutionRate: 85.7
  },
  monthlyTrends: [
    { month: "Jan", billingsPerHour: 275, appointmentsPerHour: 2.6, utilization: 82 },
    { month: "Feb", billingsPerHour: 285, appointmentsPerHour: 2.7, utilization: 85 },
    { month: "Mar", billingsPerHour: 290, appointmentsPerHour: 2.8, utilization: 87 },
    { month: "Apr", billingsPerHour: 295, appointmentsPerHour: 2.9, utilization: 89 },
    { month: "May", billingsPerHour: 300, appointmentsPerHour: 3.0, utilization: 91 },
    { month: "Jun", billingsPerHour: 305, appointmentsPerHour: 3.1, utilization: 88 },
    { month: "Jul", billingsPerHour: 310, appointmentsPerHour: 3.2, utilization: 90 },
    { month: "Aug", billingsPerHour: 315, appointmentsPerHour: 3.1, utilization: 92 },
    { month: "Sep", billingsPerHour: 320, appointmentsPerHour: 3.3, utilization: 89 },
    { month: "Oct", billingsPerHour: 325, appointmentsPerHour: 3.2, utilization: 91 },
    { month: "Nov", billingsPerHour: 330, appointmentsPerHour: 3.4, utilization: 93 },
    { month: "Dec", billingsPerHour: 335, appointmentsPerHour: 3.3, utilization: 90 }
  ]
}

export function OperationalTab({ dateRange }: OperationalTabProps) {
  const getTrendIcon = (current: number, target: number) => {
    return current >= target ? (
      <IconTrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <IconTrendingDown className="h-4 w-4 text-red-500" />
    )
  }

  const getStatusColor = (current: number, target: number) => {
    return current >= target ? "text-green-600" : "text-red-600"
  }

  return (
    <div className="space-y-6">
      {/* Key Efficiency Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Billings per Hour</CardTitle>
            <IconChartBar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${operationalData.efficiency.billingsPerHour}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              {getTrendIcon(operationalData.efficiency.billingsPerHour, 300)}
              Target: $300/hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Appointments per Hour</CardTitle>
            <IconClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{operationalData.efficiency.appointmentsPerHour}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              {getTrendIcon(operationalData.efficiency.appointmentsPerHour, 3)}
              Target: 3.0/hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Patients per Hour</CardTitle>
            <IconUsers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{operationalData.efficiency.patientsPerHour}</div>
            <p className="text-xs text-muted-foreground">
              Actual patient throughput
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">DNA/No-show Rate</CardTitle>
            <IconUserX className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{operationalData.efficiency.dnaRate}%</div>
            <p className="text-xs text-muted-foreground">
              DNA: {operationalData.efficiency.dnaRate}% | No-show: {operationalData.efficiency.noShowRate}%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Time Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconClockHour4 className="h-5 w-5" />
            Time Breakdown Analysis
          </CardTitle>
          <CardDescription>
            Distribution of working hours across different activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {operationalData.timeBreakdown.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="font-medium">{item.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{item.hours} hours</span>
                    <span className="font-semibold">{item.percentage}%</span>
                  </div>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Wait Time Analysis */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconClock className="h-5 w-5" />
              Average Wait Time
            </CardTitle>
            <CardDescription>
              Patient wait time performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{operationalData.waitTimes.averageWait} min</span>
                <Badge variant={operationalData.waitTimes.averageWait <= operationalData.waitTimes.targetWait ? "default" : "destructive"}>
                  {operationalData.waitTimes.averageWait <= operationalData.waitTimes.targetWait ? "On Target" : "Over Target"}
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Target: {operationalData.waitTimes.targetWait} min</span>
                  <span>Max: {operationalData.waitTimes.maxWait} min</span>
                </div>
                <Progress 
                  value={(operationalData.waitTimes.targetWait / operationalData.waitTimes.averageWait) * 100} 
                  className="h-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconCheckCircle className="h-5 w-5" />
              On-Time Performance
            </CardTitle>
            <CardDescription>
              Appointment punctuality rate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{operationalData.waitTimes.onTimeRate}%</span>
                <Badge variant={operationalData.waitTimes.onTimeRate >= 80 ? "default" : "destructive"}>
                  {operationalData.waitTimes.onTimeRate >= 80 ? "Good" : "Needs Improvement"}
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Target: 80%</span>
                  <span>Current: {operationalData.waitTimes.onTimeRate}%</span>
                </div>
                <Progress value={operationalData.waitTimes.onTimeRate} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Utilization Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconPercentage className="h-5 w-5" />
            Utilization Analysis
          </CardTitle>
          <CardDescription>
            Practice capacity utilization and efficiency metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Current Utilization</span>
                <div className="flex items-center gap-2">
                  <span className={`text-2xl font-bold ${getStatusColor(operationalData.utilization.current, operationalData.utilization.target)}`}>
                    {operationalData.utilization.current}%
                  </span>
                  {getTrendIcon(operationalData.utilization.current, operationalData.utilization.target)}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Target: {operationalData.utilization.target}%</span>
                  <span>Peak: {operationalData.utilization.peak}%</span>
                </div>
                <Progress value={operationalData.utilization.current} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{operationalData.utilization.peak}%</div>
                  <div className="text-sm text-muted-foreground">Peak Utilization</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{operationalData.utilization.low}%</div>
                  <div className="text-sm text-muted-foreground">Lowest Utilization</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appointment/Billing Mismatches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconAlertTriangle className="h-5 w-5" />
            Appointment/Billing Mismatches
          </CardTitle>
          <CardDescription>
            Discrepancies between scheduled appointments and billing records
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{operationalData.appointmentMismatches.total}</div>
              <div className="text-sm text-muted-foreground">Total Mismatches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{operationalData.appointmentMismatches.billingOverAppointments}</div>
              <div className="text-sm text-muted-foreground">Billing > Appointments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{operationalData.appointmentMismatches.appointmentsOverBilling}</div>
              <div className="text-sm text-muted-foreground">Appointments > Billing</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Badge variant="outline" className="text-sm">
              Resolution Rate: {operationalData.appointmentMismatches.resolutionRate}%
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Trends Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconChartLine className="h-5 w-5" />
            Monthly Operational Trends
          </CardTitle>
          <CardDescription>
            Efficiency metrics and utilization trends over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OperationalCharts data={operationalData.monthlyTrends} />
        </CardContent>
      </Card>
    </div>
  )
}
