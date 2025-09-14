"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconChartBar } from "@tabler/icons-react"

interface ClinicalTabProps {
  dateRange: string
}

// Mock data for clinical analytics
const clinicalData = {
  topMBSItems: [
    { code: "23", description: "Level C consultation", count: 145, revenue: 6378.25, percentage: 21.5, color: "bg-blue-500" },
    { code: "36", description: "Level B consultation", count: 98, revenue: 7374.50, percentage: 14.7, color: "bg-green-500" },
    { code: "44", description: "Level A consultation", count: 87, revenue: 3523.50, percentage: 13.1, color: "bg-purple-500" },
    { code: "91800", description: "Telehealth consultation", count: 65, revenue: 5827.25, percentage: 9.8, color: "bg-orange-500" },
    { code: "701", description: "Health assessment 45-49", count: 32, revenue: 7515.20, percentage: 4.8, color: "bg-pink-500" },
    { code: "721", description: "CDM plan review", count: 28, revenue: 4016.60, percentage: 4.2, color: "bg-indigo-500" },
    { code: "30071", description: "Minor procedure", count: 18, revenue: 2813.40, percentage: 2.7, color: "bg-red-500" },
    { code: "2713", description: "ECG recording", count: 24, revenue: 858.00, percentage: 3.6, color: "bg-yellow-500" },
    { code: "10987", description: "Practice nurse service", count: 35, revenue: 978.25, percentage: 5.3, color: "bg-teal-500" },
    { code: "75870", description: "Direct billing incentive", count: 142, revenue: 3102.70, percentage: 21.4, color: "bg-cyan-500" }
  ]
}

export function ClinicalTab({ dateRange }: ClinicalTabProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(amount)
  }

  return (
    <div className="space-y-6">
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
                  <th className="text-left py-3 px-2 font-medium text-sm text-muted-foreground">Item Code</th>
                  <th className="text-left py-3 px-2 font-medium text-sm text-muted-foreground">Description</th>
                  <th className="text-right py-3 px-2 font-medium text-sm text-muted-foreground">Count</th>
                  <th className="text-right py-3 px-2 font-medium text-sm text-muted-foreground">Revenue</th>
                  <th className="text-right py-3 px-2 font-medium text-sm text-muted-foreground">% of Total</th>
                </tr>
              </thead>
              <tbody>
                {clinicalData.topMBSItems.map((item, index) => (
                  <tr key={item.code} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-2 font-mono text-sm">{item.code}</td>
                    <td className="py-3 px-2 text-sm">{item.description}</td>
                    <td className="py-3 px-2 text-right text-sm font-medium">{item.count}</td>
                    <td className="py-3 px-2 text-right text-sm font-medium">{formatCurrency(item.revenue)}</td>
                    <td className="py-3 px-2 text-right text-sm font-medium">{item.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}