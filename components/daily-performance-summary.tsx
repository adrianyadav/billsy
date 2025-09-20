import { IconTarget } from "@tabler/icons-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function DailyPerformanceSummary() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <IconTarget className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">
            Daily Performance Summary
          </h2>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-8">
          {/* Total Appointments */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 mb-1">18</div>
            <div className="text-sm text-gray-500">Total Appointments</div>
          </div>

          {/* Unique Patients */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 mb-1">7</div>
            <div className="text-sm text-gray-500">Unique Patients</div>
          </div>

          {/* Consulting Hours */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 mb-1">8hrs</div>
            <div className="text-sm text-gray-500">Consulting Hours</div>
          </div>

          {/* Billing Items */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 mb-1">11</div>
            <div className="text-sm text-gray-500">Billing Items</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
