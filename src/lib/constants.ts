export const DateRangeDefault = {
  START: "May 12, 2025",
  END: "Jun 11, 2025",
} as const;

export const ViewByOption = {
  DAY: "day",
  WEEK: "week",
  MONTH: "month",
} as const;
export type ViewByOption = (typeof ViewByOption)[keyof typeof ViewByOption];

export const InsightsTab = {
  IMPACT: "impact",
  CUSTOMERS: "customers",
  QUALITY: "quality",
  TEAM: "team",
} as const;
export type InsightsTab = (typeof InsightsTab)[keyof typeof InsightsTab];

export const SIDEBAR_WIDTH_PX = 284;
