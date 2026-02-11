"use client";

import { useState } from "react";
import { SalesTab } from "./sales-tab";

const TABS = [
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
  { value: "cx", label: "CX" },
  { value: "solutions", label: "Solutions" },
  { value: "prodeng", label: "Prod/Eng" },
] as const;

type TabValue = (typeof TABS)[number]["value"];

export function InsightsTabs() {
  const [activeTab, setActiveTab] = useState<TabValue>("sales");

  return (
    <div className="w-full">
      {/* Tab bar */}
      <div className="border-b border-[#e5e5e5] px-10">
        <nav className="flex gap-8" aria-label="Tabs">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`relative pb-3 text-[16px] font-medium transition-colors ${
                  isActive
                    ? "text-[#5c2de8]"
                    : "text-[#6b7280] hover:text-[#1d1c1b]"
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-[#5c2de8]" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab content */}
      {activeTab === "sales" && <SalesTab />}
      {activeTab === "marketing" && (
        <div className="p-10">
          <p className="text-[#6b7280]">Marketing tab coming soon...</p>
        </div>
      )}
      {activeTab === "cx" && (
        <div className="p-10">
          <p className="text-[#6b7280]">CX tab coming soon...</p>
        </div>
      )}
      {activeTab === "solutions" && (
        <div className="p-10">
          <p className="text-[#6b7280]">Solutions tab coming soon...</p>
        </div>
      )}
      {activeTab === "prodeng" && (
        <div className="p-10">
          <p className="text-[#6b7280]">Prod/Eng tab coming soon...</p>
        </div>
      )}
    </div>
  );
}
