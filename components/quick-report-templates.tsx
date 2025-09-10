"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  IconFileText,
  IconDownload,
  IconCalendar,
  IconCurrencyDollar,
  IconUsers,
  IconTrendingUp,
  IconClock,
  IconCircleCheck,
  IconX,
  IconChartBar,
  IconReceipt,
  IconStar,
} from "@tabler/icons-react"

interface ReportTemplate {
  id: string
  title: string
  description: string
  category: string
  icon: React.ReactNode
  color: string
  lastUsed?: string
  isFavorite?: boolean
}

const reportTemplates: ReportTemplate[] = [
  {
    id: "monthly-revenue",
    title: "Monthly Revenue Report",
    description: "Comprehensive monthly revenue analysis with trends and comparisons",
    category: "Financial",
    icon: <IconCurrencyDollar className="h-6 w-6" />,
    color: "text-green-600",
    lastUsed: "2 days ago",
    isFavorite: true,
  },
  {
    id: "outstanding-invoices",
    title: "Outstanding Invoices",
    description: "List of all pending and overdue invoices with aging analysis",
    category: "Collections",
    icon: <IconClock className="h-6 w-6" />,
    color: "text-yellow-600",
    lastUsed: "1 week ago",
  },
  {
    id: "provider-performance",
    title: "Provider Performance",
    description: "Revenue and efficiency metrics for each healthcare provider",
    category: "Analytics",
    icon: <IconUsers className="h-6 w-6" />,
    color: "text-blue-600",
    lastUsed: "3 days ago",
    isFavorite: true,
  },
  {
    id: "department-summary",
    title: "Department Summary",
    description: "Revenue breakdown by department with growth indicators",
    category: "Analytics",
    icon: <IconChartBar className="h-6 w-6" />,
    color: "text-purple-600",
    lastUsed: "1 week ago",
  },
  {
    id: "payment-trends",
    title: "Payment Trends",
    description: "Analysis of payment patterns and collection efficiency",
    category: "Financial",
    icon: <IconTrendingUp className="h-6 w-6" />,
    color: "text-green-600",
    lastUsed: "5 days ago",
  },
  {
    id: "aged-receivables",
    title: "Aged Receivables",
    description: "Detailed aging report of outstanding receivables by age buckets",
    category: "Collections",
    icon: <IconReceipt className="h-6 w-6" />,
    color: "text-orange-600",
    lastUsed: "2 weeks ago",
  },
  {
    id: "daily-summary",
    title: "Daily Summary",
    description: "Quick overview of daily billing activities and key metrics",
    category: "Operations",
    icon: <IconCalendar className="h-6 w-6" />,
    color: "text-indigo-600",
    lastUsed: "Yesterday",
  },
  {
    id: "collection-report",
    title: "Collection Report",
    description: "Success rates and strategies for invoice collection",
    category: "Collections",
    icon: <IconCircleCheck className="h-6 w-6" />,
    color: "text-green-600",
    lastUsed: "1 week ago",
  },
  {
    id: "revenue-forecast",
    title: "Revenue Forecast",
    description: "Projected revenue based on current trends and historical data",
    category: "Financial",
    icon: <IconTrendingUp className="h-6 w-6" />,
    color: "text-emerald-600",
    lastUsed: "4 days ago",
  },
  {
    id: "write-offs",
    title: "Write-offs Analysis",
    description: "Analysis of bad debt and write-off patterns",
    category: "Financial",
    icon: <IconX className="h-6 w-6" />,
    color: "text-red-600",
    lastUsed: "2 weeks ago",
  },
  {
    id: "custom-report",
    title: "Custom Report Builder",
    description: "Create your own custom report with specific criteria",
    category: "Custom",
    icon: <IconFileText className="h-6 w-6" />,
    color: "text-gray-600",
  },
]

const categories = [
  { name: "All", count: reportTemplates.length },
  { name: "Financial", count: reportTemplates.filter(t => t.category === "Financial").length },
  { name: "Analytics", count: reportTemplates.filter(t => t.category === "Analytics").length },
  { name: "Collections", count: reportTemplates.filter(t => t.category === "Collections").length },
  { name: "Operations", count: reportTemplates.filter(t => t.category === "Operations").length },
  { name: "Custom", count: reportTemplates.filter(t => t.category === "Custom").length },
]

export function QuickReportTemplates() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [favorites, setFavorites] = useState<string[]>([
    "monthly-revenue",
    "provider-performance"
  ])

  const filteredTemplates = selectedCategory === "All" 
    ? reportTemplates 
    : reportTemplates.filter(template => template.category === selectedCategory)

  const toggleFavorite = (templateId: string) => {
    setFavorites((prev: string[]) => 
      prev.includes(templateId) 
        ? prev.filter((id: string) => id !== templateId)
        : [...prev, templateId]
    )
  }

  const handleGenerateReport = (templateId: string) => {
    // This would typically trigger report generation
    console.log(`Generating report: ${templateId}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Quick Report Templates</h2>
          <p className="text-muted-foreground">
            Pre-built report templates for common billing analytics needs
          </p>
        </div>
        <Button>
          <IconFileText className="h-4 w-4 mr-2" />
          Create Custom Report
        </Button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
            <Badge variant="secondary" className="ml-2">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="relative">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-muted ${template.color}`}>
                    {template.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{template.title}</CardTitle>
                    <Badge variant="outline" className="mt-1">
                      {template.category}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleFavorite(template.id)}
                  className="h-8 w-8 p-0"
                >
                  <IconStar 
                    className={`h-4 w-4 ${
                      favorites.includes(template.id) 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-muted-foreground"
                    }`} 
                  />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="mb-4">
                {template.description}
              </CardDescription>
              
              {template.lastUsed && (
                <div className="text-xs text-muted-foreground mb-4">
                  Last used: {template.lastUsed}
                </div>
              )}

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleGenerateReport(template.id)}
                >
                  <IconFileText className="h-4 w-4 mr-2" />
                  Generate
                </Button>
                <Button variant="outline" size="sm">
                  <IconDownload className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Favorites Section */}
      {favorites.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <IconStar className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            Favorite Templates
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reportTemplates
              .filter(template => favorites.includes(template.id))
              .map((template) => (
                <Card key={template.id} className="relative border-yellow-200 dark:border-yellow-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-muted ${template.color}`}>
                          {template.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{template.title}</CardTitle>
                          <Badge variant="outline" className="mt-1">
                            {template.category}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(template.id)}
                        className="h-8 w-8 p-0"
                      >
                        <IconStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-4">
                      {template.description}
                    </CardDescription>
                    
                    {template.lastUsed && (
                      <div className="text-xs text-muted-foreground mb-4">
                        Last used: {template.lastUsed}
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleGenerateReport(template.id)}
                      >
                        <IconFileText className="h-4 w-4 mr-2" />
                        Generate
                      </Button>
                      <Button variant="outline" size="sm">
                        <IconDownload className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
