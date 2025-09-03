import { IconTrendingUp, IconTrendingDown, IconFileInvoice, IconCreditCard, IconClock, IconAlertTriangle } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function BillingDashboardCards() {
    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-bl *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription className="flex items-center gap-2">
                        <IconFileInvoice className="h-4 w-4" />
                        Total Invoices
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        1,247
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                            <IconTrendingUp className="h-3 w-3" />
                            +8.2%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-green-600">
                        Up from last month <IconTrendingUp className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                        $2.3M total value this month
                    </div>
                </CardFooter>
            </Card>

            <Card className="@container/card">
                <CardHeader>
                    <CardDescription className="flex items-center gap-2">
                        <IconCreditCard className="h-4 w-4" />
                        Paid
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        892
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                            <IconTrendingUp className="h-3 w-3" />
                            +12.5%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-green-600">
                        Strong payment collection <IconTrendingUp className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                        71.5% collection rate
                    </div>
                </CardFooter>
            </Card>

            <Card className="@container/card">
                <CardHeader>
                    <CardDescription className="flex items-center gap-2">
                        <IconClock className="h-4 w-4" />
                        Pending
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        234
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline" className="text-blue-600 border-blue-200">
                            <IconTrendingDown className="h-3 w-3" />
                            -5.1%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-blue-600">
                        Reduced pending amount <IconTrendingDown className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                        $456K awaiting payment
                    </div>
                </CardFooter>
            </Card>

            <Card className="@container/card">
                <CardHeader>
                    <CardDescription className="flex items-center gap-2">
                        <IconAlertTriangle className="h-4 w-4" />
                        Overdue
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        121
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline" className="text-red-600 border-red-200">
                            <IconTrendingUp className="h-3 w-3" />
                            +2.3%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-red-600">
                        Needs attention <IconAlertTriangle className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                        $189K overdue amount
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}



