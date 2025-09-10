"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  IconDownload,
  IconFileText,
  IconFileSpreadsheet,
  IconFile,
  IconMail,
  IconCalendar,
  IconFilter,
  IconCheck,
} from "@tabler/icons-react"

interface BillingReport {
  id: number
  invoiceNumber: string
  clientName: string
  amount: number
  status: "Paid" | "Pending" | "Overdue"
  dueDate: string
  paidDate: string | null
  serviceType: string
  provider: string
  department: string
  paymentMethod: string | null
  createdAt: string
}

interface ExportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  data: BillingReport[]
}

export function ExportDialog({ open, onOpenChange, data }: ExportDialogProps) {
  const [exportFormat, setExportFormat] = useState("pdf")
  const [exportType, setExportType] = useState("detailed")
  const [includeCharts, setIncludeCharts] = useState(true)
  const [includeSummary, setIncludeSummary] = useState(true)
  const [dateRange, setDateRange] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [emailExport, setEmailExport] = useState(false)
  const [emailAddress, setEmailAddress] = useState("")
  const [fileName, setFileName] = useState("billing-report")
  const [isExporting, setIsExporting] = useState(false)

  const formatOptions = [
    {
      value: "pdf",
      label: "PDF Document",
      description: "Professional formatted report",
      icon: <IconFile className="h-5 w-5 text-red-500" />,
    },
    {
      value: "excel",
      label: "Excel Spreadsheet",
      description: "Data analysis and calculations",
      icon: <IconFileSpreadsheet className="h-5 w-5 text-green-500" />,
    },
    {
      value: "csv",
      label: "CSV File",
      description: "Raw data for import",
      icon: <IconFileText className="h-5 w-5 text-blue-500" />,
    },
  ]

  const reportTypes = [
    {
      value: "detailed",
      label: "Detailed Report",
      description: "Complete transaction details with all fields",
    },
    {
      value: "summary",
      label: "Summary Report",
      description: "High-level metrics and totals only",
    },
    {
      value: "custom",
      label: "Custom Report",
      description: "Select specific fields and sections",
    },
  ]

  const dateRangeOptions = [
    { value: "all", label: "All Time" },
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
    { value: "1y", label: "Last year" },
  ]

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "paid", label: "Paid Only" },
    { value: "pending", label: "Pending Only" },
    { value: "overdue", label: "Overdue Only" },
  ]

  const handleExport = async () => {
    setIsExporting(true)
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real application, this would:
    // 1. Filter data based on selected criteria
    // 2. Generate the report in the selected format
    // 3. Download the file or send via email
    
    console.log("Exporting report with options:", {
      format: exportFormat,
      type: exportType,
      includeCharts,
      includeSummary,
      dateRange,
      statusFilter,
      emailExport,
      emailAddress,
      fileName,
    })
    
    setIsExporting(false)
    onOpenChange(false)
  }

  const getFilteredDataCount = () => {
    let filteredData = data
    
    if (statusFilter !== "all") {
      filteredData = filteredData.filter(item => 
        item.status.toLowerCase() === statusFilter
      )
    }
    
    // Additional filtering logic would go here based on dateRange
    
    return filteredData.length
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <IconDownload className="h-5 w-5" />
            Export Billing Report
          </DialogTitle>
          <DialogDescription>
            Choose your export format and customize the report content
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* File Name */}
          <div className="space-y-2">
            <Label htmlFor="filename">File Name</Label>
            <Input
              id="filename"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="billing-report"
            />
          </div>

          {/* Export Format */}
          <div className="space-y-3">
            <Label>Export Format</Label>
            <RadioGroup value={exportFormat} onValueChange={setExportFormat}>
              {formatOptions.map((format) => (
                <div key={format.value} className="flex items-center space-x-3">
                  <RadioGroupItem value={format.value} id={format.value} />
                  <div className="flex items-center gap-3 flex-1">
                    {format.icon}
                    <div>
                      <Label htmlFor={format.value} className="font-medium">
                        {format.label}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {format.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Report Type */}
          <div className="space-y-3">
            <Label>Report Type</Label>
            <RadioGroup value={exportType} onValueChange={setExportType}>
              {reportTypes.map((type) => (
                <div key={type.value} className="flex items-center space-x-3">
                  <RadioGroupItem value={type.value} id={type.value} />
                  <div>
                    <Label htmlFor={type.value} className="font-medium">
                      {type.label}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {type.description}
                    </p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Separator />

          {/* Filters */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <IconFilter className="h-4 w-4" />
              <Label className="font-medium">Filters</Label>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date-range">Date Range</Label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger id="date-range">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {dateRangeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status-filter">Status</Label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger id="status-filter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              {getFilteredDataCount()} records will be exported
            </div>
          </div>

          <Separator />

          {/* Options */}
          <div className="space-y-4">
            <Label className="font-medium">Report Options</Label>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="include-charts"
                  checked={includeCharts}
                  onCheckedChange={(checked) => setIncludeCharts(checked === true)}
                />
                <Label htmlFor="include-charts">Include charts and visualizations</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="include-summary"
                  checked={includeSummary}
                  onCheckedChange={(checked) => setIncludeSummary(checked === true)}
                />
                <Label htmlFor="include-summary">Include executive summary</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="email-export"
                  checked={emailExport}
                  onCheckedChange={(checked) => setEmailExport(checked === true)}
                />
                <Label htmlFor="email-export">Email report when ready</Label>
              </div>
            </div>

            {emailExport && (
              <div className="space-y-2">
                <Label htmlFor="email-address">Email Address</Label>
                <Input
                  id="email-address"
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="recipient@example.com"
                />
              </div>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleExport} disabled={isExporting}>
            {isExporting ? (
              <>
                <IconDownload className="h-4 w-4 mr-2 animate-spin" />
                Exporting...
              </>
            ) : (
              <>
                <IconDownload className="h-4 w-4 mr-2" />
                Export Report
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
