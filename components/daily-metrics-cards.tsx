import { IconTrendingDown, IconCurrencyDollar } from "@tabler/icons-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function DailyMetricsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2">
      {/* Daily Revenue */}
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Daily Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold">$676</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Target: $1000</span>
              <span className="text-orange-600">-$324</span>
            </div>
            <Progress value={67.6} className="h-2" />
            <p className="text-xs text-muted-foreground">vs target</p>
          </div>
        </CardContent>
      </Card>

      {/* Per Appointment */}
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Per Appointment</CardDescription>
          <CardTitle className="text-2xl font-semibold flex items-center gap-2">
            $38
            <IconTrendingDown className="h-4 w-4 text-red-600" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Target: $60</span>
              <span className="text-red-600">-$22</span>
            </div>
            <Progress value={63.3} className="h-2" />
            <p className="text-xs text-muted-foreground">average billing</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
