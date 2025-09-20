import { DashboardHeader } from "@/components/dashboard-header";
import { MedicalDashboardCards } from "@/components/medical-dashboard-cards";
import { DailyPerformanceSummary } from "@/components/daily-performance-summary";
import { InvoicesTableWithHeader } from "@/components/invoices-table-with-header";

export default async function Page() {
  return (
    <>
      <DashboardHeader />
      <MedicalDashboardCards />
      <DailyPerformanceSummary />
      <InvoicesTableWithHeader />
    </>
  );
}
