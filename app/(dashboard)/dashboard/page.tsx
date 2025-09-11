import { DashboardHeader } from "@/components/dashboard-header";
import { MedicalDashboardCards } from "@/components/medical-dashboard-cards";
import { DailyPerformanceSummary } from "@/components/daily-performance-summary";
import { SummaryMetricsCards } from "@/components/summary-metrics-cards";
import { RecentTransactionsTable } from "@/components/recent-transactions-table";

export default async function Page() {
  return (
    <>
      <DashboardHeader />
      <MedicalDashboardCards />
      <DailyPerformanceSummary />
      <SummaryMetricsCards />
      <RecentTransactionsTable />
    </>
  );
}
