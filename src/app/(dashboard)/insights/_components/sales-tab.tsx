"use client";

import { useState } from "react";
import { OkrSection } from "@/components/okr-section";
import { salesOkrs, sdrOkrs } from "@/data/mock-sales";
import { OpenDealsTable } from "./sales-tab/open-deals-table";
import { SalesForecastTable } from "./sales-tab/sales-forecast-table";
import { SdrPipelineTable } from "./marketing-tab/sdr-pipeline-table";
import { SdrOpsTable } from "./marketing-tab/sdr-ops-table";
import { cn } from "@/lib/utils";

const SALES_TABS = [
  { value: "sales", label: "Sales" },
  { value: "sdr", label: "SDR" },
] as const;

type SalesTabValue = (typeof SALES_TABS)[number]["value"];

export function SalesTab() {
  const [activeSubTab, setActiveSubTab] = useState<SalesTabValue>("sales");

  return (
    <div className="flex flex-col gap-6 px-10 pt-6 pb-10">
      {/* Horizontal sub-tabs */}
      <div className="flex gap-1 border-b border-border">
        {SALES_TABS.map((tab) => (
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

      {activeSubTab === "sales" && <SalesContent />}
      {activeSubTab === "sdr" && <SdrContent />}
    </div>
  );
}

function SalesContent() {
  return (
    <div className="flex flex-col gap-6">
      <OkrSection
        okrs={salesOkrs}
        chartId="sales-okrs"
        insight="ARR is tracking at 22% with $80M pipeline at 50%, and win rate is on track at 70% — strong pipeline momentum, but close-rate acceleration is needed to hit the $20M target by Q1 end."
        suggestion="Run a pipeline-to-close conversion workshop with AEs this week to identify and unblock stalled deals before month-end"
        linearTeam="SALES"
      />
      <OpenDealsTable />
      <SalesForecastTable />
    </div>
  );
}

function SdrContent() {
  return (
    <div className="flex flex-col gap-6">
      <OkrSection
        okrs={sdrOkrs}
        chartId="sdr-okrs"
        insight="Pipeline delivery is at 50% against the $80M target with the Jan 31 deadline approaching — final push needed to close the gap."
        suggestion="Focus SDR outbound efforts on the highest-converting segments to maximize pipeline before the Jan 31 deadline"
        linearTeam="SALES"
      />
      <SdrPipelineTable />
      <SdrOpsTable />
    </div>
  );
}
