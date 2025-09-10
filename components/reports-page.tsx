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
  IconReceipt,
  IconClock,
  IconCircleCheck,
  IconAlertCircle,
  IconX
} from "@tabler/icons-react"
import { ReportsTable } from "@/components/reports-table"
import { ReportsFilters } from "@/components/reports-filters"
import { QuickReportTemplates } from "@/components/quick-report-templates"
import { ReportsCharts } from "@/components/reports-charts"
import { ExportDialog } from "@/components/export-dialog"

// Mock data for billing reports
const mockReportsData = [
  {
    id: 1,
    invoiceNumber: "INV-2024-001",
    clientName: "Acme Medical Center",
    amount: 12500.00,
    status: "Paid" as const,
    dueDate: "2024-01-15",
    paidDate: "2024-01-12",
    serviceType: "Consultation",
    provider: "Dr. Sarah Johnson",
    department: "Cardiology",
    paymentMethod: "Bank Transfer",
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    invoiceNumber: "INV-2024-002",
    clientName: "City General Hospital",
    amount: 8750.50,
    status: "Pending" as const,
    dueDate: "2024-01-20",
    paidDate: null,
    serviceType: "Surgery",
    provider: "Dr. Michael Chen",
    department: "Orthopedics",
    paymentMethod: null,
    createdAt: "2024-01-05",
  },
  {
    id: 3,
    invoiceNumber: "INV-2024-003",
    clientName: "Regional Health Clinic",
    amount: 3200.00,
    status: "Overdue" as const,
    dueDate: "2023-12-15",
    paidDate: null,
    serviceType: "Diagnostic",
    provider: "Dr. Emily Rodriguez",
    department: "Radiology",
    paymentMethod: null,
    createdAt: "2023-12-01",
  },
  {
    id: 4,
    invoiceNumber: "INV-2024-004",
    clientName: "Metro Medical Group",
    amount: 15600.75,
    status: "Paid" as const,
    dueDate: "2024-01-25",
    paidDate: "2024-01-20",
    serviceType: "Emergency",
    provider: "Dr. James Wilson",
    department: "Emergency",
    paymentMethod: "Credit Card",
    createdAt: "2024-01-10",
  },
  {
    id: 5,
    invoiceNumber: "INV-2024-005",
    clientName: "Sunshine Healthcare",
    amount: 4200.00,
    status: "Pending" as const,
    dueDate: "2024-02-01",
    paidDate: null,
    serviceType: "Follow-up",
    provider: "Dr. Lisa Park",
    department: "Oncology",
    paymentMethod: null,
    createdAt: "2024-01-15",
  },
  {
    id: 6,
    invoiceNumber: "INV-2024-006",
    clientName: "Valley Medical Center",
    amount: 9800.25,
    status: "Paid" as const,
    dueDate: "2024-01-30",
    paidDate: "2024-01-28",
    serviceType: "Consultation",
    provider: "Dr. Robert Kim",
    department: "Neurology",
    paymentMethod: "Check",
    createdAt: "2024-01-12",
  },
  {
    id: 7,
    invoiceNumber: "INV-2024-007",
    clientName: "Coastal Health Systems",
    amount: 6750.00,
    status: "Overdue" as const,
    dueDate: "2023-12-30",
    paidDate: null,
    serviceType: "Surgery",
    provider: "Dr. Maria Garcia",
    department: "General Surgery",
    paymentMethod: null,
    createdAt: "2023-12-15",
  },
  {
    id: 8,
    invoiceNumber: "INV-2024-008",
    clientName: "Mountain View Hospital",
    amount: 11200.00,
    status: "Paid" as const,
    dueDate: "2024-02-05",
    paidDate: "2024-02-02",
    serviceType: "Emergency",
    provider: "Dr. David Thompson",
    department: "Emergency",
    paymentMethod: "Bank Transfer",
    createdAt: "2024-01-20",
  },
]

const summaryStats = {
  totalRevenue: 72301.50,
  paidAmount: 54051.25,
  pendingAmount: 12950.50,
  overdueAmount: 5299.75,
  totalInvoices: 8,
  paidInvoices: 4,
  pendingInvoices: 2,
  overdueInvoices: 2,
  averageInvoiceAmount: 9037.69,
  collectionRate: 74.7,
}

export function ReportsPage() {
  const [selectedReportType, setSelectedReportType] = useState("all")
  const [dateRange, setDateRange] = useState("30d")
  const [filters, setFilters] = useState({
    status: "all",
    department: "all",
    provider: "all",
    amountRange: "all",
  })
  const [showExportDialog, setShowExportDialog] = useState(false)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid":
        return <IconCircleCheck className="h-4 w-4 text-green-500" />
      case "Pending":
        return <IconClock className="h-4 w-4 text-yellow-500" />
      case "Overdue":
        return <IconX className="h-4 w-4 text-red-500" />
      default:
        return <IconAlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Overdue":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Billing Reports</h1>
          <p className="text-muted-foreground">
            Comprehensive billing analytics and detailed reports
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => setShowExportDialog(true)}>
            <IconDownload className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <IconFileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <IconCurrencyDollar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${summaryStats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <IconTrendingUp className="inline h-3 w-3 mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid Amount</CardTitle>
            <IconCircleCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${summaryStats.paidAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {summaryStats.collectionRate}% collection rate
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Amount</CardTitle>
            <IconClock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${summaryStats.pendingAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {summaryStats.pendingInvoices} invoices pending
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue Amount</CardTitle>
            <IconX className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${summaryStats.overdueAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {summaryStats.overdueInvoices} invoices overdue
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="detailed">Detailed Reports</TabsTrigger>
          <TabsTrigger value="templates">Quick Templates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>Monthly revenue comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <ReportsCharts type="revenue" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Payment Status Distribution</CardTitle>
                <CardDescription>Breakdown by payment status</CardDescription>
              </CardHeader>
              <CardContent>
                <ReportsCharts type="status" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Detailed Billing Reports</CardTitle>
                  <CardDescription>
                    Comprehensive view of all billing transactions with advanced filtering
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <IconFilter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ReportsFilters 
                filters={filters} 
                onFiltersChange={setFilters}
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
              />
              <div className="mt-4">
                <ReportsTable data={mockReportsData} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <QuickReportTemplates />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>Revenue by department</CardDescription>
              </CardHeader>
              <CardContent>
                <ReportsCharts type="department" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Provider Performance</CardTitle>
                <CardDescription>Top performing providers</CardDescription>
              </CardHeader>
              <CardContent>
                <ReportsCharts type="provider" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Export Dialog */}
      <ExportDialog 
        open={showExportDialog} 
        onOpenChange={setShowExportDialog}
        data={mockReportsData}
      />
    </div>
  )
}
