"use client";

import { useState } from "react";
import { OkrSection } from "@/components/okr-section";
import { solutionsOkrs } from "@/data/mock-solutions";
import { FeaturesBugsChart } from "./solutions-tab/features-bugs-chart";
import { NewBugsChart } from "./solutions-tab/new-bugs-chart";
import { OnboardingAtRiskTable } from "./solutions-tab/onboarding-at-risk-table";
import { OnboardingOnTrackTable } from "./solutions-tab/onboarding-on-track-table";
import { cn } from "@/lib/utils";

const SOLUTIONS_TABS = [
  { value: "onboardings", label: "Onboardings" },
  { value: "solutions-eng", label: "Solutions Engineering" },
] as const;

type SolutionsTabValue = (typeof SOLUTIONS_TABS)[number]["value"];

export function SolutionsTab() {
  const [activeSubTab, setActiveSubTab] =
    useState<SolutionsTabValue>("onboardings");

  return (
    <div className="flex flex-col gap-6 px-10 pt-6 pb-10">
      {/* Horizontal sub-tabs */}
      <div className="flex gap-1 border-b border-border">
        {SOLUTIONS_TABS.map((tab) => (
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

      {activeSubTab === "onboardings" && <OnboardingsContent />}
      {activeSubTab === "solutions-eng" && <SolutionsEngContent />}
    </div>
  );
}

function OnboardingsContent() {
  return (
    <div className="flex flex-col gap-6">
      <OkrSection
        okrs={solutionsOkrs}
        chartId="solutions-okrs"
        insight="Onboarding speed is at 25% of target — with 7 at-risk customers averaging 119 days, reducing blockers on customer-side dependencies is critical to hitting the 30-day goal."
        suggestion="Implement a 72-hour SLA for customer-side dependency resolution to prevent onboarding timelines from stretching beyond 30 days"
        linearTeam="SOLUTIONS"
      />
      <OnboardingAtRiskTable />
      <OnboardingOnTrackTable />
    </div>
  );
}

function SolutionsEngContent() {
  return (
    <div className="flex flex-col gap-6">
      <FeaturesBugsChart />
      <NewBugsChart />
    </div>
  );
}
