import { SiteHeader } from "@/components/site-header";
import { DynamicSidebar } from "@/components/dynamic-sidebar";

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
        <DynamicSidebar />

        {/* Dashboard Content - Flexible Width */}
        <div className="flex-1 flex flex-col">
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2 px-6 py-6">
              <div className="flex flex-col gap-4 md:gap-6">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}