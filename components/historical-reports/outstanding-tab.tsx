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
  IconPercentage,
} from "@tabler/icons-react";
import { OutstandingCharts } from "./outstanding-charts";

interface OutstandingTabProps {
  dateRange: string;
}

// Mock data for outstanding analytics
const outstandingData = {
  unbilledAppointments: {
    count: 47,
    dollarValue: 12550.0,
    averageAge: 8.5,
    oldestAge: 23,
  },
  billingsOnHold: {
    count: 12,
    dollarValue: 3200.0,
    averageAge: 15.2,
    reasons: [
      { reason: "Missing Information", count: 5, percentage: 41.7 },
      { reason: "Insurance Verification", count: 4, percentage: 33.3 },
      { reason: "Provider Review", count: 2, percentage: 16.7 },
      { reason: "Technical Issues", count: 1, percentage: 8.3 },
    ],
  },
  debtorsOutstanding: {
    count: 89,
    dollarValue: 45650.0,
    averageAge: 22.3,
    ageBuckets: [
      { range: "0-30 days", count: 45, value: 22500, percentage: 49.3 },
      { range: "31-60 days", count: 28, value: 14200, percentage: 31.1 },
      { range: "61-90 days", count: 12, value: 6200, percentage: 13.6 },
      { range: "90+ days", count: 4, value: 2750, percentage: 6.0 },
    ],
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
    { month: "Dec", total: 305, unbilled: 47, onHold: 12, outstanding: 89 },
  ],
  collectionMetrics: {
    collectionRate: 87.5,
    averageCollectionTime: 18.5,
    writeOffRate: 2.3,
    targetCollectionRate: 90.0,
  },
};

export function OutstandingTab({ dateRange }: OutstandingTabProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(amount);
  };

  const getAgeColor = (age: number) => {
    if (age <= 7) return "text-green-600";
    if (age <= 14) return "text-yellow-600";
    if (age <= 30) return "text-orange-600";
    return "text-red-600";
  };

  const getAgeBadge = (age: number) => {
    if (age <= 7)
      return (
        <Badge variant="default" className="bg-green-100 text-green-800">
          Recent
        </Badge>
      );
    if (age <= 14)
      return (
        <Badge variant="outline" className="border-yellow-500 text-yellow-700">
          Moderate
        </Badge>
      );
    if (age <= 30)
      return (
        <Badge variant="outline" className="border-orange-500 text-orange-700">
          Aging
        </Badge>
      );
    return <Badge variant="destructive">Overdue</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Outstanding Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Unbilled Appointments
            </CardTitle>
            <IconCalendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {outstandingData.unbilledAppointments.count}
            </div>
            <p className="text-xs text-muted-foreground">
              Value:{" "}
              {formatCurrency(outstandingData.unbilledAppointments.dollarValue)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Billings on Hold
            </CardTitle>
            <IconClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {outstandingData.billingsOnHold.count}
            </div>
            <p className="text-xs text-muted-foreground">
              Value:{" "}
              {formatCurrency(outstandingData.billingsOnHold.dollarValue)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Debtors Outstanding
            </CardTitle>
            <IconReceipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {outstandingData.debtorsOutstanding.count}
            </div>
            <p className="text-xs text-muted-foreground">
              Value:{" "}
              {formatCurrency(outstandingData.debtorsOutstanding.dollarValue)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Outstanding
            </CardTitle>
            <IconAlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(
                outstandingData.unbilledAppointments.dollarValue +
                  outstandingData.billingsOnHold.dollarValue +
                  outstandingData.debtorsOutstanding.dollarValue,
              )}
            </div>
            <p className="text-xs text-muted-foreground">Combined value</p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Appointment Trends */}
      {/* <Card>
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
      </Card> */}
    </div>
  );
}
