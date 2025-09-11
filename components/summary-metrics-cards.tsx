import { IconUsers, IconCurrencyDollar, IconCreditCard, IconFilter, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function SummaryMetricsCards() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      {/* Summary Metrics and Action Buttons */}
      <div className="flex items-start justify-between mb-6">
        {/* Summary Metrics */}
        <div className="flex gap-8">
          {/* Total Patients */}
          <div>
            <div className="text-sm text-gray-600 mb-1">Total Patients</div>
            <div className="text-2xl font-bold text-gray-800">11</div>
          </div>

          {/* Total Fees */}
          <div>
            <div className="text-sm text-gray-600 mb-1">Total Fees</div>
            <div className="text-2xl font-bold text-gray-800">$675.50</div>
          </div>

          {/* Total Paid */}
          <div>
            <div className="text-sm text-gray-600 mb-1">Total Paid</div>
            <div className="text-2xl font-bold text-gray-800">$0.00</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <IconFilter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <IconDownload className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
    </div>
  );
}
