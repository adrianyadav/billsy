"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  IconCalendar,
  IconFilter,
  IconX,
  IconChevronDown,
} from "@tabler/icons-react"
import { format } from "date-fns"

interface Filters {
  status: string
  department: string
  provider: string
  amountRange: string
}

interface ReportsFiltersProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
  dateRange: string
  onDateRangeChange: (range: string) => void
}

export function ReportsFilters({
  filters,
  onFiltersChange,
  dateRange,
  onDateRangeChange,
}: ReportsFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [fromDate, setFromDate] = useState<Date | undefined>()
  const [toDate, setToDate] = useState<Date | undefined>()

  const departments = [
    "All Departments",
    "Cardiology",
    "Orthopedics",
    "Radiology",
    "Emergency",
    "Oncology",
    "Neurology",
    "General Surgery",
  ]

  const providers = [
    "All Providers",
    "Dr. Sarah Johnson",
    "Dr. Michael Chen",
    "Dr. Emily Rodriguez",
    "Dr. James Wilson",
    "Dr. Lisa Park",
    "Dr. Robert Kim",
    "Dr. Maria Garcia",
    "Dr. David Thompson",
  ]

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "paid", label: "Paid" },
    { value: "pending", label: "Pending" },
    { value: "overdue", label: "Overdue" },
  ]

  const amountRanges = [
    { value: "all", label: "All Amounts" },
    { value: "0-1000", label: "$0 - $1,000" },
    { value: "1000-5000", label: "$1,000 - $5,000" },
    { value: "5000-10000", label: "$5,000 - $10,000" },
    { value: "10000+", label: "$10,000+" },
  ]

  const dateRangeOptions = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
    { value: "1y", label: "Last year" },
    { value: "custom", label: "Custom range" },
  ]

  const handleFilterChange = (key: keyof Filters, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    })
  }

  const clearFilters = () => {
    onFiltersChange({
      status: "all",
      department: "all",
      provider: "all",
      amountRange: "all",
    })
    setFromDate(undefined)
    setToDate(undefined)
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (filters.status !== "all") count++
    if (filters.department !== "all") count++
    if (filters.provider !== "all") count++
    if (filters.amountRange !== "all") count++
    if (fromDate || toDate) count++
    return count
  }

  const activeFiltersCount = getActiveFiltersCount()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            className="h-9"
          >
            <IconFilter className="h-4 w-4 mr-2" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFiltersCount}
              </Badge>
            )}
            <IconChevronDown className="h-4 w-4 ml-2" />
          </Button>
          {activeFiltersCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <IconX className="h-4 w-4 mr-1" />
              Clear all
            </Button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="date-range" className="text-sm font-medium">
            Date Range:
          </Label>
          <Select value={dateRange} onValueChange={onDateRangeChange}>
            <SelectTrigger id="date-range" className="w-40">
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
      </div>

      {isOpen && (
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="status-filter">Status</Label>
                <Select
                  value={filters.status}
                  onValueChange={(value) => handleFilterChange("status", value)}
                >
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

              <div className="space-y-2">
                <Label htmlFor="department-filter">Department</Label>
                <Select
                  value={filters.department}
                  onValueChange={(value) => handleFilterChange("department", value)}
                >
                  <SelectTrigger id="department-filter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept.toLowerCase().replace(" ", "-")}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="provider-filter">Provider</Label>
                <Select
                  value={filters.provider}
                  onValueChange={(value) => handleFilterChange("provider", value)}
                >
                  <SelectTrigger id="provider-filter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {providers.map((provider) => (
                      <SelectItem key={provider} value={provider.toLowerCase().replace(" ", "-")}>
                        {provider}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount-filter">Amount Range</Label>
                <Select
                  value={filters.amountRange}
                  onValueChange={(value) => handleFilterChange("amountRange", value)}
                >
                  <SelectTrigger id="amount-filter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {amountRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {dateRange === "custom" && (
              <>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <Label>Custom Date Range</Label>
                  <div className="flex items-center gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="from-date">From</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="from-date"
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <IconCalendar className="mr-2 h-4 w-4" />
                            {fromDate ? format(fromDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={fromDate}
                            onSelect={setFromDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="to-date">To</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="to-date"
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <IconCalendar className="mr-2 h-4 w-4" />
                            {toDate ? format(toDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={toDate}
                            onSelect={setToDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={clearFilters}>
                Clear
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
