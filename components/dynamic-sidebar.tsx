"use client";

import { usePathname } from "next/navigation";
import {
  IconCalendar,
  IconLayoutDashboard,
  IconChartBar,
  IconTarget,
  IconFileText,
  IconSettings,
} from "@tabler/icons-react";

const navigationItems = [
  {
    href: "/dashboard",
    icon: IconCalendar,
    label: "Today",
  },
  {
    href: "/dashboard/overview",
    icon: IconLayoutDashboard,
    label: "Overview",
  },
  {
    href: "/dashboard/reports",
    icon: IconChartBar,
    label: "Reports",
  },
  {
    href: "/dashboard/goals",
    icon: IconTarget,
    label: "Goals",
  },
  {
    href: "/dashboard/account",
    icon: IconFileText,
    label: "MBS",
  },
  {
    href: "/dashboard/setting",
    icon: IconSettings,
    label: "Settings",
  },
];

export function DynamicSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 bg-white border-r flex-shrink-0 flex flex-col">
      {/* Navigation Items */}
      <div className="flex-1 py-4">
        <nav className="space-y-1 px-3">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive
                    ? "font-medium text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="px-6 py-4 border-t">
        <div className="text-xs text-muted-foreground">Billsy v2.1.0</div>
      </div>
    </div>
  );
}
