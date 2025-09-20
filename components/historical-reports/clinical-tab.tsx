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
  IconStethoscope,
  IconChartBar,
  IconChartPie,
  IconTrendingUp,
  IconTrendingDown,
  IconTarget,
  IconPercentage,
  IconCurrencyDollar,
  IconActivity,
  IconUsers,
  IconCalendar,
  IconChartLine,
} from "@tabler/icons-react";
import { ClinicalCharts } from "./clinical-charts";

interface ClinicalTabProps {
  dateRange: string;
}

// Mock data for clinical analytics
const clinicalData = {
  topMBSItems: [
    {
      code: "23",
      description: "Level C consultation",
      count: 145,
      revenue: 6378.25,
      percentage: 21.5,
      color: "bg-blue-500",
    },
    {
      code: "36",
      description: "Level B consultation",
      count: 98,
      revenue: 7374.5,
      percentage: 14.7,
      color: "bg-green-500",
    },
    {
      code: "44",
      description: "Level A consultation",
      count: 87,
      revenue: 3523.5,
      percentage: 13.1,
      color: "bg-purple-500",
    },
    {
      code: "91800",
      description: "Telehealth consultation",
      count: 65,
      revenue: 5827.25,
      percentage: 9.8,
      color: "bg-orange-500",
    },
    {
      code: "701",
      description: "Health assessment 45-49",
      count: 32,
      revenue: 7515.2,
      percentage: 4.8,
      color: "bg-pink-500",
    },
    {
      code: "721",
      description: "CDM plan review",
      count: 28,
      revenue: 4016.6,
      percentage: 4.2,
      color: "bg-indigo-500",
    },
    {
      code: "30071",
      description: "Minor procedure",
      count: 18,
      revenue: 2813.4,
      percentage: 2.7,
      color: "bg-red-500",
    },
    {
      code: "2713",
      description: "ECG recording",
      count: 24,
      revenue: 858.0,
      percentage: 3.6,
      color: "bg-yellow-500",
    },
    {
      code: "10987",
      description: "Practice nurse service",
      count: 35,
      revenue: 978.25,
      percentage: 5.3,
      color: "bg-teal-500",
    },
    {
      code: "75870",
      description: "Direct billing incentive",
      count: 142,
      revenue: 3102.7,
      percentage: 21.4,
      color: "bg-cyan-500",
    },
  ],
  revenueByItem: [
    { item: "Consultations", revenue: 357800, percentage: 67.2, count: 2540 },
    { item: "Procedures", revenue: 120450, percentage: 22.6, count: 244 },
    { item: "Investigations", revenue: 14700, percentage: 2.8, count: 98 },
    { item: "Other Services", revenue: 40150, percentage: 7.5, count: 156 },
  ],
  clinicalServiceAnalysis: {
    totalServices: 3038,
    averageRevenuePerService: 175.5,
    mostUsedItem: "23 - Standard Consultation",
    highestRevenueItem: "44 - Long Consultation",
    growthRate: 12.5,
  },
  monthlyTrends: [
    {
      month: "Jan",
      consultations: 180,
      procedures: 18,
      investigations: 8,
      revenue: 42500,
    },
    {
      month: "Feb",
      consultations: 195,
      procedures: 22,
      investigations: 9,
      revenue: 46200,
    },
    {
      month: "Mar",
      consultations: 210,
      procedures: 20,
      investigations: 7,
      revenue: 48900,
    },
    {
      month: "Apr",
      consultations: 225,
      procedures: 25,
      investigations: 10,
      revenue: 52800,
    },
    {
      month: "May",
      consultations: 240,
      procedures: 28,
      investigations: 12,
      revenue: 56700,
    },
    {
      month: "Jun",
      consultations: 235,
      procedures: 26,
      investigations: 11,
      revenue: 55200,
    },
    {
      month: "Jul",
      consultations: 250,
      procedures: 30,
      investigations: 13,
      revenue: 59100,
    },
    {
      month: "Aug",
      consultations: 265,
      procedures: 32,
      investigations: 14,
      revenue: 62400,
    },
    {
      month: "Sep",
      consultations: 280,
      procedures: 35,
      investigations: 15,
      revenue: 65700,
    },
    {
      month: "Oct",
      consultations: 275,
      procedures: 33,
      investigations: 14,
      revenue: 64200,
    },
    {
      month: "Nov",
      consultations: 290,
      procedures: 36,
      investigations: 16,
      revenue: 67500,
    },
    {
      month: "Dec",
      consultations: 305,
      procedures: 38,
      investigations: 17,
      revenue: 70800,
    },
  ],
};

export function ClinicalTab({ dateRange }: ClinicalTabProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(amount);
  };

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? (
      <IconTrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <IconTrendingDown className="h-4 w-4 text-red-500" />
    );
  };

  return (
    <div className="space-y-6">
      {/* Clinical Service Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Services
            </CardTitle>
            <IconActivity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {clinicalData.clinicalServiceAnalysis.totalServices.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              {getTrendIcon("up")}+
              {clinicalData.clinicalServiceAnalysis.growthRate}% from last
              period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg Revenue per Service
            </CardTitle>
            <IconCurrencyDollar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(
                clinicalData.clinicalServiceAnalysis.averageRevenuePerService,
              )}
            </div>
            <p className="text-xs text-muted-foreground">Per service average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Most Used Item
            </CardTitle>
            <IconTarget className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">Item 23</div>
            <p className="text-xs text-muted-foreground">
              Standard Consultation
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Highest Revenue
            </CardTitle>
            <IconTrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">Item 44</div>
            <p className="text-xs text-muted-foreground">Long Consultation</p>
          </CardContent>
        </Card>
      </div>

      {/* Top 10 MBS Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconChartBar className="h-5 w-5" />
            Top 10 MBS Items
          </CardTitle>
          <CardDescription>
            Most frequently used MBS items with usage statistics and revenue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2 font-medium text-sm text-muted-foreground">
                    Item Code
                  </th>
                  <th className="text-left py-3 px-2 font-medium text-sm text-muted-foreground">
                    Description
                  </th>
                  <th className="text-right py-3 px-2 font-medium text-sm text-muted-foreground">
                    Count
                  </th>
                  <th className="text-right py-3 px-2 font-medium text-sm text-muted-foreground">
                    Revenue
                  </th>
                  <th className="text-right py-3 px-2 font-medium text-sm text-muted-foreground">
                    % of Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {clinicalData.topMBSItems.map((item, index) => (
                  <tr key={item.code} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-2 font-mono text-sm">{item.code}</td>
                    <td className="py-3 px-2 text-sm">{item.description}</td>
                    <td className="py-3 px-2 text-right text-sm font-medium">
                      {item.count}
                    </td>
                    <td className="py-3 px-2 text-right text-sm font-medium">
                      {formatCurrency(item.revenue)}
                    </td>
                    <td className="py-3 px-2 text-right text-sm font-medium">
                      {item.percentage}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Breakdown by Item Category */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconChartPie className="h-5 w-5" />
            Revenue Breakdown by Item Category
          </CardTitle>
          <CardDescription>
            Revenue distribution across different service categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {clinicalData.revenueByItem.map((item) => (
              <div key={item.item} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.item}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.percentage}%
                  </span>
                </div>
                <div className="text-lg font-semibold">
                  {formatCurrency(item.revenue)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.count} services
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Clinical Service Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconStethoscope className="h-5 w-5" />
            Clinical Service Analysis
          </CardTitle>
          <CardDescription>
            Detailed analysis of clinical service patterns and performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold">Service Distribution</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Consultations</span>
                  <span className="font-semibold">2,540 (83.6%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Procedures</span>
                  <span className="font-semibold">244 (8.0%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Investigations</span>
                  <span className="font-semibold">98 (3.2%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Other Services</span>
                  <span className="font-semibold">156 (5.1%)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Performance Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Average Services per Day</span>
                  <span className="font-semibold">12.2</span>
                </div>
                <div className="flex justify-between">
                  <span>Peak Service Day</span>
                  <span className="font-semibold">Friday</span>
                </div>
                <div className="flex justify-between">
                  <span>Most Productive Hour</span>
                  <span className="font-semibold">10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Growth Rate</span>
                  <span className="font-semibold text-green-600">+12.5%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Clinical Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconChartLine className="h-5 w-5" />
            Monthly Clinical Trends
          </CardTitle>
          <CardDescription>
            Service volume and revenue trends over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ClinicalCharts data={clinicalData.monthlyTrends} />
        </CardContent>
      </Card>
    </div>
  );
}
