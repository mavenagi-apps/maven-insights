"use client";

import { useState } from "react";
import { OkrSection } from "@/components/okr-section";
import { cxCustomerHealthOkrs, cxRenewalsOkrs } from "@/data/mock-cx";
import { CustomerHealthChart } from "./cx-tab/customer-health-chart";
import { RetentionTable } from "./cx-tab/retention-table";
import { RenewalsQ4Table } from "./cx-tab/renewals-q4-table";
import { RenewalsQ1Table } from "./cx-tab/renewals-q1-table";
import { MultiYearTable } from "./cx-tab/multi-year-table";
import { RedCustomersTable } from "./cx-tab/red-customers-table";
import { RedAccountReview } from "./cx-tab/red-account-review";
import { cn } from "@/lib/utils";

const CX_TABS = [
  { value: "customer-health", label: "Customer Health" },
  { value: "renewals", label: "Renewals" },
  { value: "red-account-review", label: "Red Account Review" },
] as const;

type CxTabValue = (typeof CX_TABS)[number]["value"];

export function CxTab() {
  const [activeSubTab, setActiveSubTab] =
    useState<CxTabValue>("customer-health");

  return (
    <div className="flex flex-col gap-6 px-10 pt-6 pb-10">
      {/* Horizontal sub-tabs */}
      <div className="flex gap-1 border-b border-border">
        {CX_TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveSubTab(tab.value)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors",
              activeSubTab === tab.value
                ? "border-b-2 border-foreground text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeSubTab === "customer-health" && <CustomerHealthContent />}
      {activeSubTab === "renewals" && <RenewalsContent />}
      {activeSubTab === "red-account-review" && <RedAccountReview />}
    </div>
  );
}

function CustomerHealthContent() {
  return (
    <div className="flex flex-col gap-6">
      <OkrSection
        okrs={cxCustomerHealthOkrs}
        chartId="cx-customer-health-okrs"
        insight="Proactive engagement lags at 38% — prioritizing customer touchpoints could accelerate retention and reduce red accounts."
        suggestion="Schedule weekly proactive check-ins with the 10 lowest-engagement accounts to drive the 38% engagement OKR"
        linearTeam="CX"
      />
      <CustomerHealthChart />
      <RedCustomersTable />
    </div>
  );
}

function RenewalsContent() {
  return (
    <div className="flex flex-col gap-6">
      <OkrSection
        okrs={cxRenewalsOkrs}
        chartId="cx-renewals-okrs"
        insight="Consumption expansion is on track at 70%, but integration adoption at 45% needs acceleration — driving integrations in the first 30 days is key to hitting the 120% consumption target."
        suggestion="Prioritize integration onboarding for the 5 largest accounts by ARR to maximize consumption impact this quarter"
        linearTeam="CX"
      />
      <RetentionTable />
      <RenewalsQ4Table />
      <RenewalsQ1Table />
      <MultiYearTable />
    </div>
  );
}
