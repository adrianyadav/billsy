import {
    IconAlertTriangle,
    IconClock,
    IconCalendar,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function OutstandingCards() {
    return (
        <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
            {/* Unbilled Appointments */}
            <Card>
                <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-gray-600">Unbilled Appointments</CardTitle>
                        <IconAlertTriangle className="h-4 w-4 text-yellow-500" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="text-3xl font-bold text-gray-800">12</div>
                        <div className="text-sm text-gray-600">$1847.50 potential revenue</div>
                        <Button variant="outline" size="sm" className="w-full">
                            View Details
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Billings on Hold */}
            <Card>
                <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-gray-600">Billings on Hold</CardTitle>
                        <IconClock className="h-4 w-4 text-orange-500" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="text-3xl font-bold text-gray-800">8</div>
                        <div className="text-sm text-gray-600">$892.30 on hold</div>
                        <Button variant="outline" size="sm" className="w-full">
                            View Details
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Debtors Outstanding */}
            <Card>
                <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-gray-600">Debtors Outstanding</CardTitle>
                        <IconCalendar className="h-4 w-4 text-red-500" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="text-3xl font-bold text-gray-800">23</div>
                        <div className="text-sm text-gray-600">$4521.80 outstanding</div>
                        <Button variant="outline" size="sm" className="w-full">
                            View Details
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
