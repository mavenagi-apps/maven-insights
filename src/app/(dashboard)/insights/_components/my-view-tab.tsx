"use client";

import { Pin } from "lucide-react";
import { useInsightsTab } from "@/components/insights-tab-context";
import { OkrSection } from "@/components/okr-section";
import { salesOkrs } from "@/data/mock-sales";
import { marketingOkrs } from "@/data/mock-marketing";
import { cxOkrs, cxCustomerHealthOkrs, cxRenewalsOkrs } from "@/data/mock-cx";
import { solutionsOkrs } from "@/data/mock-solutions";
import { prodEngOkrs } from "@/data/mock-prodeng";
import { fluxOkrs } from "@/data/mock-flux";
import { OpenDealsTable } from "./sales-tab/open-deals-table";
import { SalesForecastTable } from "./sales-tab/sales-forecast-table";
import { PipeGenAttainmentTable } from "./marketing-tab/pipe-gen-attainment-table";
import { SiteTrafficTable } from "./marketing-tab/site-traffic-table";
import { FunnelTable } from "./marketing-tab/funnel-table";
import { SdrPipelineTable } from "./marketing-tab/sdr-pipeline-table";
import { SdrOpsTable } from "./marketing-tab/sdr-ops-table";
import { RetentionTable } from "./cx-tab/retention-table";
import { RenewalsQ4Table } from "./cx-tab/renewals-q4-table";
import { RenewalsQ1Table } from "./cx-tab/renewals-q1-table";
import { MultiYearTable } from "./cx-tab/multi-year-table";
import { RedCustomersTable } from "./cx-tab/red-customers-table";
import { CustomerHealthChart } from "./cx-tab/customer-health-chart";
import { FeaturesBugsChart } from "./solutions-tab/features-bugs-chart";
import { NewBugsChart } from "./solutions-tab/new-bugs-chart";
import { OnboardingAtRiskTable } from "./solutions-tab/onboarding-at-risk-table";
import { OnboardingOnTrackTable } from "./solutions-tab/onboarding-on-track-table";
import { ConsumptionChart } from "./prodeng-tab/consumption-chart";
import { FeaturesBugsTeamChart } from "./prodeng-tab/features-bugs-team-chart";
import { NewBugsTeamChart } from "./prodeng-tab/new-bugs-team-chart";

function SalesOkrs() {
  return <OkrSection okrs={salesOkrs} chartId="sales-okrs" />;
}
function MarketingOkrs() {
  return <OkrSection okrs={marketingOkrs} chartId="marketing-okrs" />;
}
function CxOkrs() {
  return <OkrSection okrs={cxOkrs} chartId="cx-okrs" />;
}
function CxCustomerHealthOkrs() {
  return <OkrSection okrs={cxCustomerHealthOkrs} chartId="cx-customer-health-okrs" />;
}
function CxRenewalsOkrs() {
  return <OkrSection okrs={cxRenewalsOkrs} chartId="cx-renewals-okrs" />;
}
function SolutionsOkrs() {
  return <OkrSection okrs={solutionsOkrs} chartId="solutions-okrs" />;
}
function ProdEngOkrs() {
  return <OkrSection okrs={prodEngOkrs} chartId="prodeng-okrs" />;
}
function FluxOkrs() {
  return <OkrSection okrs={fluxOkrs} chartId="flux-okrs" />;
}

const CHART_REGISTRY: Record<string, { component: React.ComponentType; label: string }> = {
  "sales-okrs": { component: SalesOkrs, label: "Sales OKRs" },
  "marketing-okrs": { component: MarketingOkrs, label: "Marketing OKRs" },
  "cx-okrs": { component: CxOkrs, label: "CX OKRs" },
  "cx-customer-health-okrs": { component: CxCustomerHealthOkrs, label: "CX Customer Health OKRs" },
  "cx-renewals-okrs": { component: CxRenewalsOkrs, label: "CX Renewals OKRs" },
  "solutions-okrs": { component: SolutionsOkrs, label: "Solutions OKRs" },
  "prodeng-okrs": { component: ProdEngOkrs, label: "Prod/Eng OKRs" },
  "flux-okrs": { component: FluxOkrs, label: "Flux OKRs" },
  "open-deals": { component: OpenDealsTable, label: "Open Deals" },
  "sales-forecast": { component: SalesForecastTable, label: "Sales Forecast" },
  "pipe-gen-attainment": { component: PipeGenAttainmentTable, label: "Pipe Gen Attainment" },
  "site-traffic": { component: SiteTrafficTable, label: "Site Traffic" },
  "funnel": { component: FunnelTable, label: "Funnel" },
  "sdr-pipeline": { component: SdrPipelineTable, label: "SDR Attainment - Pipeline" },
  "sdr-ops": { component: SdrOpsTable, label: "SDR Attainment - Ops" },
  "retention": { component: RetentionTable, label: "Retention" },
  "renewals-q4": { component: RenewalsQ4Table, label: "Renewals Forecast - Q4" },
  "renewals-q1": { component: RenewalsQ1Table, label: "Renewals Forecast - Q1" },
  "multi-year-q1": { component: MultiYearTable, label: "Multi-Year Anniversaries - Q1" },
  "red-customers": { component: RedCustomersTable, label: "Red Customers" },
  "features-bugs": { component: FeaturesBugsChart, label: "Features Delivered & Bugs Fixed" },
  "new-bugs": { component: NewBugsChart, label: "Net New Bugs Incoming" },
  "onboarding-at-risk": { component: OnboardingAtRiskTable, label: "Onboarding Forecast - At Risk" },
  "onboarding-on-track": { component: OnboardingOnTrackTable, label: "Onboarding Forecast - On Track" },
  "customer-health": { component: CustomerHealthChart, label: "Customer Health" },
  "consumption-surface": { component: ConsumptionChart, label: "Consumption by Surface" },
  "features-bugs-team": { component: FeaturesBugsTeamChart, label: "Features & Bugs by Team" },
  "new-bugs-team": { component: NewBugsTeamChart, label: "New Bugs by Team" },
};

export function MyViewTab() {
  const { pinnedCharts } = useInsightsTab();

  const pinnedIds = Array.from(pinnedCharts);

  if (pinnedIds.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 px-10 py-20">
        <Pin className="h-8 w-8 text-muted-foreground" />
        <p className="text-lg font-medium text-foreground">No pinned charts yet</p>
        <p className="text-sm text-muted-foreground">
          Pin charts from any tab using the pin icon to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 px-10 pt-10 pb-10">
      {pinnedIds.map((id) => {
        const entry = CHART_REGISTRY[id];
        if (!entry) return null;
        const Component = entry.component;
        return <Component key={id} />;
      })}
    </div>
  );
}
