"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  IconCalendar, 
  IconDownload, 
  IconFilter, 
  IconFileText, 
  IconChartBar,
  IconTrendingUp,
  IconTrendingDown,
  IconCurrencyDollar,
  IconUsers,
  IconClock,
  IconCircleCheck,
  IconX,
  IconTarget,
  IconActivity,
  IconStethoscope,
  IconScale,
  IconReceipt,
  IconCalendarStats,
  IconChartLine,
  IconChartPie,
  IconChartDots,
  IconProgress,
  IconPercentage,
  IconClockHour4,
  IconUserCheck,
  IconUserX,
  IconCalendarX,
  IconCalendarCheck,
  IconCash,
  IconCreditCard,
  IconBuildingHospital,
  IconShield,
  IconBriefcase,
  IconAlertTriangle,
  IconEye,
  IconEdit,
  IconRefresh
} from "@tabler/icons-react"
import { FinancialTab } from "@/components/historical-reports/financial-tab"
import { OperationalTab } from "@/components/historical-reports/operational-tab"
import { ClinicalTab } from "@/components/historical-reports/clinical-tab"
import { BenchmarkingTab } from "@/components/historical-reports/benchmarking-tab"
import { OutstandingTab } from "@/components/historical-reports/outstanding-tab"

export function HistoricalReportsPage() {
  const [selectedDateRange, setSelectedDateRange] = useState("12m")
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    setIsExporting(true)
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsExporting(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Historical Reports</h1>
          <p className="text-muted-foreground">
            Comprehensive analytics and performance metrics across all practice areas
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleExport} disabled={isExporting}>
            <IconDownload className="h-4 w-4 mr-2" />
            {isExporting ? "Exporting..." : "Export All"}
          </Button>
          <Button variant="outline">
            <IconFilter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button>
            <IconRefresh className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
        </div>
      </div>

      {/* Date Range Selector */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconCalendar className="h-5 w-5" />
            Report Period
          </CardTitle>
          <CardDescription>
            Select the time period for your historical analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Period:</label>
              <select 
                value={selectedDateRange} 
                onChange={(e) => setSelectedDateRange(e.target.value)}
                className="px-3 py-2 border rounded-md"
              >
                <option value="3m">Last 3 Months</option>
                <option value="6m">Last 6 Months</option>
                <option value="12m">Last 12 Months</option>
                <option value="24m">Last 24 Months</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            <Badge variant="outline" className="ml-4">
              <IconCalendarStats className="h-3 w-3 mr-1" />
              {selectedDateRange === "3m" && "Q1 2024"}
              {selectedDateRange === "6m" && "H1 2024"}
              {selectedDateRange === "12m" && "2024"}
              {selectedDateRange === "24m" && "2023-2024"}
              {selectedDateRange === "custom" && "Custom Period"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Main Analytics Tabs */}
      <Tabs defaultValue="financial" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="financial" className="flex items-center gap-2">
            <IconCurrencyDollar className="h-4 w-4" />
            Financial
          </TabsTrigger>
          <TabsTrigger value="operational" className="flex items-center gap-2">
            <IconActivity className="h-4 w-4" />
            Operational
          </TabsTrigger>
          <TabsTrigger value="clinical" className="flex items-center gap-2">
            <IconStethoscope className="h-4 w-4" />
            Clinical
          </TabsTrigger>
          <TabsTrigger value="benchmarking" className="flex items-center gap-2">
            <IconScale className="h-4 w-4" />
            Benchmarking
          </TabsTrigger>
          <TabsTrigger value="outstanding" className="flex items-center gap-2">
            <IconReceipt className="h-4 w-4" />
            Outstanding
          </TabsTrigger>
        </TabsList>

        <TabsContent value="financial" className="space-y-6">
          <FinancialTab dateRange={selectedDateRange} />
        </TabsContent>

        <TabsContent value="operational" className="space-y-6">
          <OperationalTab dateRange={selectedDateRange} />
        </TabsContent>

        <TabsContent value="clinical" className="space-y-6">
          <ClinicalTab dateRange={selectedDateRange} />
        </TabsContent>

        <TabsContent value="benchmarking" className="space-y-6">
          <BenchmarkingTab dateRange={selectedDateRange} />
        </TabsContent>

        <TabsContent value="outstanding" className="space-y-6">
          <OutstandingTab dateRange={selectedDateRange} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
