import {
  IconCurrencyDollar,
  IconTarget,
  IconClock,
  IconUsers,
  IconPercentage,
  IconTrendingUp,
  IconChartLine
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function MedicalDashboardCards() {
  return (
    <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {/* Total Billings */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-600">Total Billings</CardTitle>
            <div className="flex gap-1">
              <IconCurrencyDollar className="h-4 w-4 text-blue-400" />
              <IconTarget className="h-4 w-4 text-yellow-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">$657.10</div>
              <Badge variant="secondary" className="text-xs">Goal: 800</Badge>
            </div>
            <Progress value={82.1} className="h-2" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-yellow-500">82.1%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Billings per Appointment */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-600">Billings per Appointment</CardTitle>
            <div className="flex gap-1">
              <IconTarget className="h-4 w-4 text-green-500" />
              <IconChartLine className="h-4 w-4 text-green-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">$36.51</div>
              <Badge variant="secondary" className="text-xs">Goal: 40</Badge>
            </div>
            <Progress value={91.3} className="h-2" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-green-500">91.3%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Billings per Consulting Hour */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-600">Billings per Consulting Hour</CardTitle>
            <div className="flex gap-1">
              <IconClock className="h-4 w-4 text-purple-500" />
              <IconChartLine className="h-4 w-4 text-green-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">$82.14</div>
              <Badge variant="secondary" className="text-xs">Goal: 85</Badge>
            </div>
            <Progress value={96.6} className="h-2" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-green-500">96.6%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appointments per Hour */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-600">Appointments per Hour</CardTitle>
            <div className="flex gap-1">
              <IconTarget className="h-4 w-4 text-orange-500" />
              <IconChartLine className="h-4 w-4 text-green-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">2.3</div>
              <Badge variant="secondary" className="text-xs">Goal: 2.5</Badge>
            </div>
            <Progress value={90.0} className="h-2" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-green-500">90.0%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Patients per Hour */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-600">Patients per Hour</CardTitle>
            <div className="flex gap-1">
              <IconUsers className="h-4 w-4 text-blue-400" />
              <IconTarget className="h-4 w-4 text-yellow-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">0.9</div>
              <Badge variant="secondary" className="text-xs">Goal: 1</Badge>
            </div>
            <Progress value={87.5} className="h-2" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-yellow-500">87.5%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bulk-billing % */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-600">Bulk-billing %</CardTitle>
            <div className="flex gap-1">
              <IconPercentage className="h-4 w-4 text-green-500" />
              <IconChartLine className="h-4 w-4 text-green-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">127.3%</div>
              <Badge variant="secondary" className="text-xs">Goal: 75%</Badge>
            </div>
            <Progress value={100.0} className="h-2" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-green-500">100.0%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CDM Billings as % of Total */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-600">CDM Billings as % of Total</CardTitle>
            <div className="flex gap-1">
              <IconPercentage className="h-4 w-4 text-purple-500" />
              <IconTarget className="h-4 w-4 text-yellow-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">13.3%</div>
              <Badge variant="secondary" className="text-xs">Goal: 15%</Badge>
            </div>
            <Progress value={88.8} className="h-2" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-yellow-500">88.8%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Telehealth Billings as % of Total */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-600">Telehealth Billings as % of Total</CardTitle>
            <div className="flex gap-1">
              <IconPercentage className="h-4 w-4 text-pink-500" />
              <IconChartLine className="h-4 w-4 text-green-500" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">20.5%</div>
              <Badge variant="secondary" className="text-xs">Goal: 20%</Badge>
            </div>
            <Progress value={100.0} className="h-2" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-green-500">100.0%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
