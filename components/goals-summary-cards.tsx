"use client";

import { IconCheck, IconTrendingUp, IconTrendingDown } from "@tabler/icons-react";

const summaryData = [
    {
        title: "Goals Achieved",
        value: 1,
        icon: IconCheck,
        iconColor: "bg-green-100",
        iconBgColor: "text-green-600",
    },
    {
        title: "On Track",
        value: 5,
        icon: IconTrendingUp,
        iconColor: "bg-yellow-100",
        iconBgColor: "text-yellow-600",
    },
    {
        title: "Needs Attention",
        value: 0,
        icon: IconTrendingDown,
        iconColor: "bg-red-100",
        iconBgColor: "text-red-600",
    },
];

export function GoalsSummaryCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {summaryData.map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${item.iconColor}`}>
                            <item.icon className={`h-6 w-6 ${item.iconBgColor}`} />
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">{item.value}</p>
                            <p className="text-gray-600 text-sm">{item.title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
