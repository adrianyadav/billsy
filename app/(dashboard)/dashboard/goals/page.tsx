import { GoalsHeader } from "@/components/goals-header";
import { GoalsSummaryCards } from "@/components/goals-summary-cards";
import { GoalsMetricCards } from "@/components/goals-metric-cards";

export default async function GoalsPage() {
    return (
        <>
            <GoalsHeader />
            <GoalsSummaryCards />
            <GoalsMetricCards />
        </>
    );
}
