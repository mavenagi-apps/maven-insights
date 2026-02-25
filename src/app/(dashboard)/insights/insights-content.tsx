"use client";

import { PageHeader } from "./_components/page-header";
import { InsightsTabContent } from "./_components/insights-tab-content";
import { TabUrlSync } from "@/components/tab-url-sync";

export function InsightsContent() {
  return (
    <div className="flex flex-col">
      <TabUrlSync />
      <div className="flex flex-col gap-4 px-10 pt-10 pb-0">
        <PageHeader />
      </div>
      <InsightsTabContent />
    </div>
  );
}
