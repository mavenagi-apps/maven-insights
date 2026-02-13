"use client";

import { useInsightsTab } from "@/components/insights-tab-context";
import { MyViewTab } from "./my-view-tab";
import { SalesTab } from "./sales-tab";
import { MarketingTab } from "./marketing-tab";
import { CxTab } from "./cx-tab";
import { SolutionsTab } from "./solutions-tab";
import { ProdEngTab } from "./prodeng-tab";
import { OkrsTab } from "./okrs-tab";

export function InsightsTabContent() {
  const { activeTab } = useInsightsTab();

  return (
    <div className="w-full">
      {activeTab === "myview" && <MyViewTab />}
      {activeTab === "okrs" && <OkrsTab />}
      {activeTab === "sales" && <SalesTab />}
      {activeTab === "marketing" && <MarketingTab />}
      {activeTab === "cx" && <CxTab />}
      {activeTab === "solutions" && <SolutionsTab />}
      {activeTab === "prodeng" && <ProdEngTab />}
    </div>
  );
}
