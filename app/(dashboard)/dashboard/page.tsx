import { DashboardHeader } from "@/components/dashboard-header";
import { MedicalDashboardCards } from "@/components/medical-dashboard-cards";
import { DailyMetricsCards } from "@/components/daily-metrics-cards";
import { SummaryMetricsCards } from "@/components/summary-metrics-cards";
import { RecentTransactionsTable } from "@/components/recent-transactions-table";

export default async function Page() {
  return (
    <>
      <DashboardHeader />
      <MedicalDashboardCards />
      <DailyMetricsCards />
      <SummaryMetricsCards />
      <RecentTransactionsTable />
    </>
  );
}
