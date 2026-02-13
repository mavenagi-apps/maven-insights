export const ActivityType = {
  OKR_CHANGE: "okr_change",
  METRICS_CHANGE: "metrics_change",
} as const;
export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType];

export const TeamKey = {
  PRODENG: "prodeng",
  SOLUTIONS: "solutions",
  CX: "cx",
  SALES: "sales",
  MARKETING: "marketing",
} as const;
export type TeamKey = (typeof TeamKey)[keyof typeof TeamKey];

export const TEAM_LABELS: Record<TeamKey, string> = {
  [TeamKey.PRODENG]: "Prod/Eng",
  [TeamKey.SOLUTIONS]: "Solutions",
  [TeamKey.CX]: "CX",
  [TeamKey.SALES]: "Sales",
  [TeamKey.MARKETING]: "Marketing",
};

export interface PulseEntry {
  id: string;
  type: ActivityType;
  team: TeamKey;
  title: string;
  timestamp: string;
}

export const pulseEntries: PulseEntry[] = [
  // ── Feb 13 ──────────────────────────────────────────────────────────
  {
    id: "1",
    type: ActivityType.OKR_CHANGE,
    team: TeamKey.PRODENG,
    title: "\"Deliver a seamless, high-confidence Agent Ops experience\" OKR moved to Yellow",
    timestamp: "2026-02-13T14:32:00",
  },
  {
    id: "2",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.PRODENG,
    title: "Chat consumption dropped to only 10% of total consumption",
    timestamp: "2026-02-13T11:15:00",
  },
  {
    id: "3",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.SALES,
    title: "Enterprise pipeline is now over $2M",
    timestamp: "2026-02-13T10:05:00",
  },
  {
    id: "4",
    type: ActivityType.OKR_CHANGE,
    team: TeamKey.CX,
    title: "\"Expand consumption to 120% contracted consumption\" OKR moved to Green",
    timestamp: "2026-02-13T09:48:00",
  },
  {
    id: "5",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.MARKETING,
    title: "Over 200 new website visitors today",
    timestamp: "2026-02-13T09:20:00",
  },

  // ── Feb 12 ──────────────────────────────────────────────────────────
  {
    id: "6",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.CX,
    title: "Tixel is no longer a red customer — moved to Yellow",
    timestamp: "2026-02-12T16:45:00",
  },
  {
    id: "7",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.SOLUTIONS,
    title: "Vanilla customer onboarding status changed to At Risk",
    timestamp: "2026-02-12T14:20:00",
  },
  {
    id: "8",
    type: ActivityType.OKR_CHANGE,
    team: TeamKey.MARKETING,
    title: "\"Establish Maven AGI as a recognized presence in the industry\" OKR still at 158% — exceeding target",
    timestamp: "2026-02-12T11:30:00",
  },
  {
    id: "9",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.PRODENG,
    title: "Critical incident reported on Jan 26 spike — root cause identified as deployment regression",
    timestamp: "2026-02-12T10:10:00",
  },
  {
    id: "10",
    type: ActivityType.OKR_CHANGE,
    team: TeamKey.SALES,
    title: "\"Achieve 90% win rate\" OKR remains Green at 70%",
    timestamp: "2026-02-12T09:00:00",
  },

  // ── Feb 11 ──────────────────────────────────────────────────────────
  {
    id: "11",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.PRODENG,
    title: "Helix team logged 4 new bugs this week — highest across all teams",
    timestamp: "2026-02-11T15:45:00",
  },
  {
    id: "12",
    type: ActivityType.OKR_CHANGE,
    team: TeamKey.SOLUTIONS,
    title: "\"Onboard 80% of customers in < 30 days\" OKR dropped to Red at 25%",
    timestamp: "2026-02-11T13:20:00",
  },
  {
    id: "13",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.CX,
    title: "Green customer accounts increased to 31 — nearly doubled since June",
    timestamp: "2026-02-11T11:00:00",
  },
  {
    id: "14",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.SALES,
    title: "OneTrust deal moved to Pricing/Proposal stage — $241K commit",
    timestamp: "2026-02-11T10:30:00",
  },
  {
    id: "15",
    type: ActivityType.OKR_CHANGE,
    team: TeamKey.PRODENG,
    title: "\"Freshservice copilot used by 1+ customer\" OKR still at 0% — Red status",
    timestamp: "2026-02-11T09:15:00",
  },
  {
    id: "16",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.MARKETING,
    title: "MQL pipeline generated $2.5M — 27% of quarterly goal",
    timestamp: "2026-02-11T08:50:00",
  },

  // ── Feb 10 ──────────────────────────────────────────────────────────
  {
    id: "17",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.SOLUTIONS,
    title: "Cometeer onboarding at 130 days — Crystal pushing final fixes for go-live next week",
    timestamp: "2026-02-10T16:00:00",
  },
  {
    id: "18",
    type: ActivityType.OKR_CHANGE,
    team: TeamKey.CX,
    title: "\"Drive consumption expansion through 3 integrations\" OKR moved to Yellow at 45%",
    timestamp: "2026-02-10T14:30:00",
  },
  {
    id: "19",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.PRODENG,
    title: "Autonomous resolution rate at 37.7% — significantly below the 80% target",
    timestamp: "2026-02-10T12:15:00",
  },
  {
    id: "20",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.SALES,
    title: "ZoomInfo deal closed-won at $150K — strongest Q1 close so far",
    timestamp: "2026-02-10T11:00:00",
  },
  {
    id: "21",
    type: ActivityType.OKR_CHANGE,
    team: TeamKey.MARKETING,
    title: "\"Generate 70% of annual direct leads at <$500 per lead\" OKR at 14% — Red status",
    timestamp: "2026-02-10T10:20:00",
  },
  {
    id: "22",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.SOLUTIONS,
    title: "Practice Better kicked off onboarding — recurring weekly implementation meetings scheduled",
    timestamp: "2026-02-10T09:30:00",
  },
  {
    id: "23",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.CX,
    title: "Retention rate held steady at 94% — above 90% target for Q1",
    timestamp: "2026-02-10T09:00:00",
  },
  {
    id: "24",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.MARKETING,
    title: "Content distribution reached 12K impressions this week — 3x prior week",
    timestamp: "2026-02-10T08:30:00",
  },
];
