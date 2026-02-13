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
  // ── Friday, Feb 13 ──────────────────────────────────────────────────
  {
    id: "1",
    type: ActivityType.OKR_CHANGE,
    team: TeamKey.PRODENG,
    title: "\"Deliver a seamless, high-confidence Agent Ops experience\" OKR moved from Green to Yellow",
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
    title: "\"Expand consumption to 120% contracted consumption\" OKR moved from Yellow to Green",
    timestamp: "2026-02-13T09:48:00",
  },
  {
    id: "5",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.MARKETING,
    title: "Over 200 new website visitors today",
    timestamp: "2026-02-13T09:20:00",
  },

  // ── Thursday, Feb 12 ────────────────────────────────────────────────
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
    title: "\"Establish Maven AGI as a recognized presence in the industry\" OKR moved from Yellow to Green at 158%",
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
    title: "\"$20M Total ARR\" OKR moved from Red to Yellow at 22%",
    timestamp: "2026-02-12T09:00:00",
  },

  // ── Wednesday, Feb 11 ───────────────────────────────────────────────
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
    title: "\"Onboard 80% of customers in < 30 days\" OKR dropped from Yellow to Red at 25%",
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
    title: "\"[Launch] Capabilities\" OKR moved from Green to Yellow at 33%",
    timestamp: "2026-02-11T09:15:00",
  },
  {
    id: "16",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.MARKETING,
    title: "MQL pipeline generated $2.5M — 27% of quarterly goal",
    timestamp: "2026-02-11T08:50:00",
  },

  // ── Tuesday, Feb 10 ─────────────────────────────────────────────────
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
    title: "\"Drive consumption expansion through 3 integrations\" OKR moved from Green to Yellow at 45%",
    timestamp: "2026-02-10T14:30:00",
  },
  {
    id: "19",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.PRODENG,
    title: "Autonomous resolution rate dropped from 42% to 37.7%",
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
    title: "\"Generate 70% of annual direct leads at <$500 per lead\" OKR dropped from Yellow to Red at 14%",
    timestamp: "2026-02-10T10:20:00",
  },
  {
    id: "22",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.SOLUTIONS,
    title: "Practice Better kicked off onboarding — recurring weekly implementation meetings scheduled",
    timestamp: "2026-02-10T09:30:00",
  },

  // ── Monday, Feb 9 ───────────────────────────────────────────────────
  {
    id: "23",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.CX,
    title: "Retention rate improved from 91% to 94% — above 90% target for Q1",
    timestamp: "2026-02-09T15:30:00",
  },
  {
    id: "24",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.MARKETING,
    title: "Content distribution reached 12K impressions this week — 3x prior week",
    timestamp: "2026-02-09T14:10:00",
  },
  {
    id: "25",
    type: ActivityType.OKR_CHANGE,
    team: TeamKey.PRODENG,
    title: "\"LAND: Platform API (Inception)\" OKR moved from Green to Yellow at 45%",
    timestamp: "2026-02-09T11:45:00",
  },
  {
    id: "26",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.SALES,
    title: "Win rate climbed from 85% to 90% on latest closed deals",
    timestamp: "2026-02-09T10:20:00",
  },
  {
    id: "27",
    type: ActivityType.OKR_CHANGE,
    team: TeamKey.SOLUTIONS,
    title: "\"120% prorated total consumption\" OKR moved from Yellow to Green at 114%",
    timestamp: "2026-02-09T09:30:00",
  },
  {
    id: "28",
    type: ActivityType.METRICS_CHANGE,
    team: TeamKey.PRODENG,
    title: "Email consumption surged 15% week-over-week — now second highest surface",
    timestamp: "2026-02-09T09:00:00",
  },
];
