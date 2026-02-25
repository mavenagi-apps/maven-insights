"use client";

import { useInsightsTab } from "@/components/insights-tab-context";
import { BusinessGoalsTab } from "./business-goals-tab";
import { SalesTab } from "./sales-tab";
import { MarketingTab } from "./marketing-tab";
import { CxTab } from "./cx-tab";
import { SolutionsTab } from "./solutions-tab";
import { ProductTab } from "./product-tab";

export function InsightsTabContent() {
  const { activeTab } = useInsightsTab();

  return (
    <div className="w-full">
      {activeTab === "businessgoals" && <BusinessGoalsTab />}
      {activeTab === "sales" && <SalesTab />}
      {activeTab === "marketing" && <MarketingTab />}
      {activeTab === "cx" && <CxTab />}
      {activeTab === "solutions" && <SolutionsTab />}
      {activeTab === "product" && <ProductTab />}
    </div>
  );
}
