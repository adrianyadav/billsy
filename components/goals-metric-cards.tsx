"use client";

import { IconPencil } from "@tabler/icons-react";

const goalsData = [
  {
    title: "Monthly Revenue Target",
    tags: ["Revenue", "Monthly"],
    status: "On Track",
    statusColor: "bg-yellow-100 text-yellow-800",
    progress: 99.7,
    current: "$59,800",
    target: "$60,000",
    deadline: "8/31/2025",
  },
  {
    title: "Patient Appointments",
    tags: ["Volume", "Monthly"],
    status: "On Track",
    statusColor: "bg-yellow-100 text-yellow-800",
    progress: 93.3,
    current: "168",
    target: "180",
    deadline: "8/31/2025",
  },
  {
    title: "Bulk Billing Rate",
    tags: ["Efficiency", "Monthly"],
    status: "On Track",
    statusColor: "bg-yellow-100 text-yellow-800",
    progress: 91.3,
    current: "68.5%",
    target: "75%",
    deadline: "8/31/2025",
  },
  {
    title: "Average Fee per Appointment",
    tags: ["Revenue", "Monthly"],
    status: "Achieved",
    statusColor: "bg-green-100 text-green-800",
    progress: 100.0,
    current: "$356",
    target: "$350",
    deadline: "8/31/2025",
  },
  {
    title: "Telehealth Utilization",
    tags: ["Innovation", "Monthly"],
    status: "At Risk",
    statusColor: "bg-orange-100 text-orange-800",
    progress: 76.0,
    current: "15.2%",
    target: "20%",
    deadline: "8/31/2025",
  },
  {
    title: "Patient Satisfaction Score",
    tags: ["Quality", "Quarterly"],
    status: "On Track",
    statusColor: "bg-yellow-100 text-yellow-800",
    progress: 98.3,
    current: "88.5%",
    target: "90%",
    deadline: "9/30/2025",
  },
];

export function GoalsMetricCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {goalsData.map((goal) => (
        <div
          key={goal.title}
          className="bg-white rounded-lg p-6 shadow-sm border"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {goal.title}
              </h3>
              <div className="flex gap-2 mb-3">
                {goal.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${goal.statusColor}`}
              >
                {goal.status}
              </span>
              <IconPencil className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium text-gray-900">
                  {goal.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-800 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(goal.progress, 100)}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Current</p>
                <p className="text-lg font-semibold text-gray-900">
                  {goal.current}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Target</p>
                <p className="text-lg font-semibold text-gray-900">
                  {goal.target}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Deadline</p>
              <p className="text-sm font-medium text-gray-900">
                {goal.deadline}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
