import type { KpiCardData } from "@/types/dashboard";

export const mockKpiCards: KpiCardData[] = [
  {
    id: "resolved-pct",
    title: "Resolved by Maven (%)",
    value: "92%",
    trendValue: "+234",
    trendDirection: "up",
    trendLabel: "compared to last day",
  },
  {
    id: "resolved-num",
    title: "Resolved by Maven (#)",
    value: "1,963",
    trendValue: "+234",
    trendDirection: "up",
    trendLabel: "compared to last day",
  },
  {
    id: "avg-handle-time",
    title: "Average handle time",
    value: "HH:MM:SS",
    trendValue: "+HH:SS:MM",
    trendDirection: "up",
    trendLabel: "compared to last day",
  },
];
