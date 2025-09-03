import { IconUsers, IconCurrencyDollar, IconCreditCard } from "@tabler/icons-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SummaryMetricsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-3">
      {/* Total Patients */}
      <Card>
        <CardHeader className="pb-2">
          <CardDescription className="flex items-center gap-2">
            <IconUsers className="h-4 w-4" />
            Total Patients
          </CardDescription>
          <CardTitle className="text-3xl font-semibold">11</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Patients seen today</p>
        </CardContent>
      </Card>

      {/* Total Fees */}
      <Card>
        <CardHeader className="pb-2">
          <CardDescription className="flex items-center gap-2">
            <IconCurrencyDollar className="h-4 w-4" />
            Total Fees
          </CardDescription>
          <CardTitle className="text-3xl font-semibold">$675.50</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Total billing amount</p>
        </CardContent>
      </Card>

      {/* Total Paid */}
      <Card>
        <CardHeader className="pb-2">
          <CardDescription className="flex items-center gap-2">
            <IconCreditCard className="h-4 w-4" />
            Total Paid
          </CardDescription>
          <CardTitle className="text-3xl font-semibold">$0.00</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Payments received</p>
        </CardContent>
      </Card>
    </div>
  );
}
