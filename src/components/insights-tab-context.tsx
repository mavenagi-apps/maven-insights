"use client";

import { createContext, useCallback, useContext, useState } from "react";

const TABS = [
  { value: "myview", label: "My View" },
  { value: "prodeng", label: "Prod/Eng" },
  { value: "solutions", label: "Solutions" },
  { value: "cx", label: "CX" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
] as const;

type TabValue = (typeof TABS)[number]["value"];

interface InsightsTabContextValue {
  activeTab: TabValue;
  setActiveTab: (tab: TabValue) => void;
  tabs: typeof TABS;
  pinnedCharts: Set<string>;
  togglePin: (chartId: string) => void;
  isPinned: (chartId: string) => boolean;
}

const InsightsTabContext = createContext<InsightsTabContextValue | null>(null);

export function InsightsTabProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabValue>("prodeng");
  const [pinnedCharts, setPinnedCharts] = useState<Set<string>>(new Set());

  const togglePin = useCallback((chartId: string) => {
    setPinnedCharts((prev) => {
      const next = new Set(prev);
      if (next.has(chartId)) {
        next.delete(chartId);
      } else {
        next.add(chartId);
      }
      return next;
    });
  }, []);

  const isPinned = useCallback(
    (chartId: string) => pinnedCharts.has(chartId),
    [pinnedCharts]
  );

  return (
    <InsightsTabContext.Provider
      value={{ activeTab, setActiveTab, tabs: TABS, pinnedCharts, togglePin, isPinned }}
    >
      {children}
    </InsightsTabContext.Provider>
  );
}

export function useInsightsTab() {
  const context = useContext(InsightsTabContext);
  if (!context) {
    throw new Error("useInsightsTab must be used within InsightsTabProvider");
  }
  return context;
}
