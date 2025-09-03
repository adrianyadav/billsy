"use client";

import * as React from "react";
import {
  IconDashboard,
  IconFileInvoice,
  IconCreditCard,
  IconChartBar,
  IconSettings,
  IconStethoscope,
  IconPlus,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { user } from "@prisma/client";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Invoices",
      url: "/dashboard/invoices",
      icon: IconFileInvoice,
    },
    {
      title: "Payments",
      url: "/dashboard/payments",
      icon: IconCreditCard,
    },
    {
      title: "Reports",
      url: "/dashboard/reports",
      icon: IconChartBar,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
  ],
};

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: user;
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  if (!user) {
    throw new Error("AppSidebar requires a user but received undefined.");
  }
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <IconStethoscope className="!size-6 text-blue-600" />
                <span className="text-lg font-bold text-blue-600">Billsy</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
