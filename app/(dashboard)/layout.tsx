import { SiteHeader } from "@/components/site-header";
import { IconCalendar, IconLayoutDashboard, IconChartBar, IconTarget, IconFileText, IconSettings } from "@tabler/icons-react";

import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (!session?.user) {
    return;
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Nav - Full Width */}
      <SiteHeader />

      {/* Bottom Section - Sidebar + Dashboard */}
      <div className="flex flex-1">
        {/* Sidebar - Fixed Width */}
        <div className="w-72 bg-white border-r flex-shrink-0 flex flex-col">

          {/* Navigation Items */}
          <div className="flex-1 py-4">
            <nav className="space-y-1 px-3">
              <a href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                <IconCalendar className="h-4 w-4" />
                Today
              </a>
              <a href="/dashboard/overview" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">
                <IconLayoutDashboard className="h-4 w-4" />
                Overview
              </a>
              <a href="/dashboard/reports" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                <IconChartBar className="h-4 w-4" />
                Reports
              </a>
              <a href="/dashboard/goals" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                <IconTarget className="h-4 w-4" />
                Goals
              </a>
              <a href="/dashboard/mbs" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                <IconFileText className="h-4 w-4" />
                MBS
              </a>
              <a href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                <IconSettings className="h-4 w-4" />
                Settings
              </a>
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="px-6 py-4 border-t">
            <div className="text-xs text-muted-foreground">Billsy v2.1.0</div>
          </div>
        </div>

        {/* Dashboard Content - Flexible Width */}
        <div className="flex-1 flex flex-col">
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}