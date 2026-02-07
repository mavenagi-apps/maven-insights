"use client";

import { PageHeader } from "./_components/page-header";
import { GlobalFilterBar } from "./_components/global-filter-bar";
import { InsightsTabs } from "./_components/insights-tabs";

export function InsightsContent() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 border-b border-border-subtle px-10 pt-10 pb-0">
        <PageHeader />
      </div>
      <div className="flex flex-col">
        <div className="px-10 py-4">
          <GlobalFilterBar />
        </div>
        <InsightsTabs />
      </div>
    </div>
  );
}
