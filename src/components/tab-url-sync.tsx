"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useInsightsTab } from "@/components/insights-tab-context";

// CX sub-tab values that appear in the `tab` param — they map to the `cx` top-level tab
const CX_SUB_TAB_VALUES = new Set(["customer-health", "renewals", "red-account-review"]);

// Reads the initial `tab` URL param and syncs it into the insights tab context.
// Must be rendered inside a Suspense boundary (lives in the page, not the layout).
export function TabUrlSync() {
  const searchParams = useSearchParams();
  const { setActiveTab, tabs } = useInsightsTab();

  useEffect(() => {
    const param = searchParams.get("tab");
    if (!param) return;

    const validTopLevel = new Set(tabs.map((t) => t.value));

    if (CX_SUB_TAB_VALUES.has(param)) {
      setActiveTab("cx");
    } else if (validTopLevel.has(param as Parameters<typeof setActiveTab>[0])) {
      setActiveTab(param as Parameters<typeof setActiveTab>[0]);
    }
    // Only run on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
