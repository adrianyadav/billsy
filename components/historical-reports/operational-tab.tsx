"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
} from "@tabler/icons-react";

interface OperationalTabProps {
  dateRange: string;
}

// Mock data for operational analytics
const operationalData = {
  efficiency: {
    billingsPerHour: 82.25,
    billingsPerHourTarget: 85,
    appointmentsPerHour: 2.25,
    appointmentsPerHourTarget: 2.5,
    patientsPerHour: 0.88,
    patientsPerHourTarget: 1.0,
    dnaRate: 8.5,
    missedAppointments: 14,
  },
  timeBreakdown: [
    {
      category: "Consulting",
      hours: 145,
      percentage: 75.2,
      color: "bg-blue-500",
    },
    { category: "Admin", hours: 52, percentage: 18.3, color: "bg-green-500" },
    {
      category: "Unbooked",
      hours: 26,
      percentage: 6.5,
      color: "bg-orange-500",
    },
  ],
  practiceEfficiency: {
    averageWaitTime: 12.8,
    daysUntilNextAppointment: 4.2,
    utilisation: 87.3,
    appointmentBillingMismatch: 15,
  },
};

export function OperationalTab({ dateRange }: OperationalTabProps) {
  const getTrendIcon = (current: number, target: number) => {
    return current >= target ? (
      <IconTrendingUp className="h-4 w-4 text-green-600" />
    ) : (
      <IconTrendingDown className="h-4 w-4 text-red-600" />
    );
  };

  const getTrendColor = (current: number, target: number) => {
    return current >= target ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Key Efficiency Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Billings per Consulting Hour
            </CardTitle>
            <IconChartBar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${operationalData.efficiency.billingsPerHour}
            </div>
            <p className="text-xs text-muted-foreground">
              Target: ${operationalData.efficiency.billingsPerHourTarget}/hr
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Appointments per Hour
            </CardTitle>
            <IconClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {operationalData.efficiency.appointmentsPerHour}
            </div>
            <p className="text-xs text-muted-foreground">
              Target: {operationalData.efficiency.appointmentsPerHourTarget}/hr
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Patients per Hour
            </CardTitle>
            <IconUsers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {operationalData.efficiency.patientsPerHour}
            </div>
            <p className="text-xs text-muted-foreground">
              Target: {operationalData.efficiency.patientsPerHourTarget}/hr
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              DNA / No-show Rate
            </CardTitle>
            <IconUserX className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {operationalData.efficiency.dnaRate}%
            </div>
            <p className="text-xs text-muted-foreground">
              {operationalData.efficiency.missedAppointments} missed
              appointments
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Time Breakdown and Practice Efficiency Metrics */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Time Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconClockHour4 className="h-5 w-5" />
              Time Breakdown
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
                    <span className="font-semibold">{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Practice Efficiency Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconActivity className="h-5 w-5" />
              Practice Efficiency Metrics
            </CardTitle>
            <CardDescription>
              Key operational performance indicators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Average Patient Wait Time
                  </span>
                  <span className="text-sm font-bold">
                    {operationalData.practiceEfficiency.averageWaitTime} mins
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Days until 3rd Next Available Appointment
                  </span>
                  <span className="text-sm font-bold">
                    {
                      operationalData.practiceEfficiency
                        .daysUntilNextAppointment
                    }{" "}
                    days
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Utilisation %</span>
                  <span className="text-sm font-bold">
                    {operationalData.practiceEfficiency.utilisation}%
                  </span>
                </div>
                <Progress
                  value={operationalData.practiceEfficiency.utilisation}
                  className="h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Appointment/Billing Length Mismatch
                  </span>
                  <span className="text-sm font-bold">
                    {
                      operationalData.practiceEfficiency
                        .appointmentBillingMismatch
                    }{" "}
                    cases
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
