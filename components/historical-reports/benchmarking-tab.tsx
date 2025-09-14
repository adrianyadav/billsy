"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IconScale, IconFileDownload } from "@tabler/icons-react"

interface BenchmarkingTabProps {
  dateRange: string
}

export function BenchmarkingTab({ dateRange }: BenchmarkingTabProps) {
  return (
    <div className="space-y-6">
      {/* MBS Item Mix vs Industry Peers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconScale className="h-5 w-5" />
            MBS Item Mix vs Industry Peers
          </CardTitle>
          <CardDescription>
            Compare your practice's item mix against industry benchmarks and peer practices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Benchmarking Data Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Benchmarking Data</h3>
              <p className="text-muted-foreground mb-6">
                Compare your practice's item mix against industry benchmarks and peer practices.
              </p>
            </div>

            {/* Generate Report Button */}
            <div className="flex justify-center">
              <Button className="flex items-center gap-2">
                <IconFileDownload className="h-4 w-4" />
                Generate Benchmarking Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}