import { IconTrendingUp, IconTrendingDown, IconTarget, IconUsers, IconCurrencyDollar, IconClock } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function MedicalDashboardCards() {
  return (
    <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {/* Bulk Billing */}
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Bulk Billing</CardDescription>
          <CardTitle className="text-2xl font-semibold flex items-center gap-2">
            175.0%
            <IconTrendingUp className="h-4 w-4 text-green-600" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Target: 80%</span>
              <span className="text-green-600">+95%</span>
            </div>
            <Progress value={175} className="h-2" />
            <p className="text-xs text-muted-foreground">of Medicare items</p>
          </div>
        </CardContent>
      </Card>

      {/* CDM Billings */}
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>CDM Billings</CardDescription>
          <CardTitle className="text-2xl font-semibold flex items-center gap-2">
            18.2%
            <IconTarget className="h-4 w-4 text-blue-600" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Target: 20%</span>
              <span className="text-orange-600">-1.8%</span>
            </div>
            <Progress value={91} className="h-2" />
            <p className="text-xs text-muted-foreground">of total billings</p>
          </div>
        </CardContent>
      </Card>

      {/* Telehealth */}
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Telehealth</CardDescription>
          <CardTitle className="text-2xl font-semibold flex items-center gap-2">
            27.3%
            <IconTrendingUp className="h-4 w-4 text-green-600" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Target: 25%</span>
              <span className="text-green-600">+2.3%</span>
            </div>
            <Progress value={109} className="h-2" />
            <p className="text-xs text-muted-foreground">of total billings</p>
          </div>
        </CardContent>
      </Card>

      {/* Efficiency */}
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Efficiency</CardDescription>
          <CardTitle className="text-lg font-semibold">Productivity metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconCurrencyDollar className="h-4 w-4 text-green-600" />
                <span className="text-sm">$/hr</span>
              </div>
              <span className="font-semibold">$84</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconClock className="h-4 w-4 text-blue-600" />
                <span className="text-sm">appts/hr</span>
              </div>
              <span className="font-semibold">2.3</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconUsers className="h-4 w-4 text-purple-600" />
                <span className="text-sm">patients/hr</span>
              </div>
              <span className="font-semibold">0.9</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
