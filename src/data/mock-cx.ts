import type { Okr } from "@/types/okr";

export const cxOkrs: Okr[] = [
  {
    name: "Expand consumption to 120% contracted consumption",
    dueDate: "2026-03-31",
    percentComplete: 70,
  },
  {
    name: "Drive consumption expansion through 3 integrations in 30 days, 5 in 90 days",
    dueDate: "2026-03-31",
    percentComplete: 45,
  },
  {
    name: "Strengthen customer success and drive sustainable growth through proactive engagement",
    dueDate: "2026-03-31",
    percentComplete: 38,
  },
];

// ---------------------------------------------------------------------------
// Retention (Total only - top chart)
// ---------------------------------------------------------------------------

export interface RetentionCell {
  value: string;
  color: "green" | "red" | "blue" | "";
}

export interface RetentionRow {
  metric: string;
  q4: RetentionCell;
  fy25: RetentionCell;
  q1: RetentionCell;
}

export const retention: RetentionRow[] = [
  {
    metric: "Renewable ARR",
    q4: { value: "$350,446", color: "green" },
    fy25: { value: "$909,921", color: "red" },
    q1: { value: "$1,869,018", color: "blue" },
  },
  {
    metric: "Renewal GRR Forecast",
    q4: { value: "72%", color: "red" },
    fy25: { value: "69%", color: "red" },
    q1: { value: "90%", color: "green" },
  },
  {
    metric: "Total GRR Forecast",
    q4: { value: "70%", color: "red" },
    fy25: { value: "40%", color: "red" },
    q1: { value: "90%", color: "green" },
  },
  {
    metric: "Total NRR Forecast",
    q4: { value: "129%", color: "green" },
    fy25: { value: "109%", color: "green" },
    q1: { value: "109%", color: "green" },
  },
];

// ---------------------------------------------------------------------------
// Renewals Forecast (shared interface for Q4 and Q1)
// ---------------------------------------------------------------------------

export interface RenewalRow {
  customerName: string;
  renewalDate: string;
  dealType: string;
  owner: string;
  dealStage: string;
  forecastCategory: string;
  renewableArr: string;
  forecastedArr: string;
  nextStep: string;
  isTotal?: boolean;
}

export const renewalsQ4: RenewalRow[] = [
  {
    customerName: "Airborne Athletics",
    renewalDate: "2026-01-30",
    dealType: "Renewal",
    owner: "Aimee Allen",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "$35,196",
    forecastedArr: "$33,393",
    nextStep: "CLOSED/WON",
  },
  {
    customerName: "Spotnana",
    renewalDate: "2025-12-04",
    dealType: "Renewal",
    owner: "Derek Ford",
    dealStage: "Closed Lost",
    forecastCategory: "Not forecasted",
    renewableArr: "$40,000",
    forecastedArr: "$0",
    nextStep: "CHURN - CLOSED/LOST",
  },
  {
    customerName: "Hive",
    renewalDate: "2026-01-27",
    dealType: "Renewal",
    owner: "Derek Ford",
    dealStage: "Closed Lost",
    forecastCategory: "Not forecasted",
    renewableArr: "$58,000",
    forecastedArr: "$0",
    nextStep:
      "1/20: Hive confirmed they have signed contract with new vendor and is actively offboarding from Maven.",
  },
  {
    customerName: "Invicti",
    renewalDate: "2025-11-01",
    dealType: "Renewal",
    owner: "Leila Horejsi",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "$38,070",
    forecastedArr: "$38,070",
    nextStep: "Closed/Won 11/24/25",
  },
  {
    customerName: "Parallax",
    renewalDate: "2025-12-01",
    dealType: "Renewal",
    owner: "Leila Horejsi",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "$25,000",
    forecastedArr: "$25,000",
    nextStep:
      "1/6: Meeting with Mike D and Grant happened 12/30. Grant is open to exploring new use cases.",
  },
  {
    customerName: "Business Infusions",
    renewalDate: "2025-12-01",
    dealType: "Contraction",
    owner: "Leila Horejsi",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "",
    forecastedArr: "-$5,200",
    nextStep:
      "1/5: // 1. CB send - Conversations audit report // 2. CB send renewal quote",
  },
  {
    customerName: "Digital.ai",
    renewalDate: "2025-12-31",
    dealType: "Renewal",
    owner: "Leila Horejsi",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "$120,930",
    forecastedArr: "$120,930",
    nextStep:
      "1/6: PO received 12/26/25. Reconfirmed with Manfred that contract is with CFO for signature",
  },
  {
    customerName: "Total",
    renewalDate: "",
    dealType: "",
    owner: "",
    dealStage: "",
    forecastCategory: "",
    renewableArr: "$317,196",
    forecastedArr: "$212,193",
    nextStep: "",
    isTotal: true,
  },
];

export const renewalsQ1: RenewalRow[] = [
  {
    customerName: "TiVo",
    renewalDate: "2026-02-28",
    dealType: "Renewal",
    owner: "Aaron Jones",
    dealStage: "3. Negotiation & Procurement",
    forecastCategory: "Commit",
    renewableArr: "$30,000",
    forecastedArr: "$30,000",
    nextStep:
      "Jan 26 - Tivo has had their renewal contract for a couple of weeks now. We are waiting for their signature.",
  },
  {
    customerName: "Tealium",
    renewalDate: "2026-03-31",
    dealType: "Renewal",
    owner: "Aimee Allen",
    dealStage: "1. Renewal Discussion",
    forecastCategory: "Best case",
    renewableArr: "$50,000",
    forecastedArr: "$50,000",
    nextStep:
      "Jan 26 - Leila and I had our onsite CX strategy meeting onsite with Tealium Friday. It went well.",
  },
  {
    customerName: "Payphone",
    renewalDate: "2026-04-23",
    dealType: "Renewal",
    owner: "Aimee Allen",
    dealStage: "1. Renewal Discussion",
    forecastCategory: "At Risk",
    renewableArr: "$20,125",
    forecastedArr: "$20,125",
    nextStep:
      "Jan 26 - Will be asking Ivan for a time to meet with payphone this week or next week!",
  },
  {
    customerName: "K1x.io",
    renewalDate: "2026-04-28",
    dealType: "Renewal",
    owner: "Aimee Allen",
    dealStage: "0. Renewal Scheduled",
    forecastCategory: "Best case",
    renewableArr: "$25,000",
    forecastedArr: "$25,000",
    nextStep:
      "Jan 26 - Strategic alignment meeting will be later in Feb.",
  },
  {
    customerName: "Mastermind",
    renewalDate: "2026-03-10",
    dealType: "Renewal",
    owner: "Brian McCool",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "$163,000",
    forecastedArr: "$163,000",
    nextStep: "",
  },
  {
    customerName: "Business Infusions",
    renewalDate: "2026-03-01",
    dealType: "Renewal",
    owner: "Chris Belz",
    dealStage: "2. Contract Shared",
    forecastCategory: "Most Likely",
    renewableArr: "$20,800",
    forecastedArr: "$20,800",
    nextStep:
      "1/12: Renewal quote in hand, awaiting go/no-go feedback this week.",
  },
];

// ---------------------------------------------------------------------------
// Multi-Year Anniversaries - Q1
// ---------------------------------------------------------------------------

export interface MultiYearRow {
  customerName: string;
  anniversaryDate: string;
  dealType: string;
  owner: string;
  dealStage: string;
  forecastCategory: string;
  renewableArr: string;
  forecastedArr: string;
  nextStep: string;
  isTotal?: boolean;
}

export const multiYearQ1: MultiYearRow[] = [
  {
    customerName: "Parivie",
    anniversaryDate: "2026-04-30",
    dealType: "Anniversary",
    owner: "Aimee Allen",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "$127,500",
    forecastedArr: "$127,500",
    nextStep:
      "Jan 12 - Our year anniversary is Apr 30th and need to reach 70% resolution before this date.",
  },
  {
    customerName: "Belfry",
    anniversaryDate: "2026-04-30",
    dealType: "Anniversary",
    owner: "Aimee Allen",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "$50,000",
    forecastedArr: "$50,000",
    nextStep:
      "Jan 12 - We are coming up on our year anniversary at the end of Apr.",
  },
  {
    customerName: "Clio",
    anniversaryDate: "2026-03-24",
    dealType: "Anniversary",
    owner: "Daniel Stern",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "$165,868",
    forecastedArr: "$165,868",
    nextStep: "",
  },
  {
    customerName: "Enumerate",
    anniversaryDate: "2026-02-02",
    dealType: "Anniversary",
    owner: "Derek Ford",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "$50,000",
    forecastedArr: "$50,000",
    nextStep: "",
  },
  {
    customerName: "Exclaimer",
    anniversaryDate: "2026-02-20",
    dealType: "Anniversary",
    owner: "Derek Ford",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "$100,000",
    forecastedArr: "$100,000",
    nextStep: "",
  },
  {
    customerName: "Intralinks",
    anniversaryDate: "2026-02-20",
    dealType: "Anniversary",
    owner: "Derek Ford",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "$183,900",
    forecastedArr: "$183,900",
    nextStep: "",
  },
  {
    customerName: "Rho",
    anniversaryDate: "2026-03-01",
    dealType: "Anniversary",
    owner: "Derek Ford",
    dealStage: "Closed Won",
    forecastCategory: "Closed won",
    renewableArr: "$40,000",
    forecastedArr: "$40,000",
    nextStep: "",
  },
  {
    customerName: "Total",
    anniversaryDate: "",
    dealType: "",
    owner: "",
    dealStage: "",
    forecastCategory: "",
    renewableArr: "$717,268",
    forecastedArr: "$717,268",
    nextStep: "",
    isTotal: true,
  },
];

// ---------------------------------------------------------------------------
// Red Customers
// ---------------------------------------------------------------------------

export interface RedCustomerRow {
  companyName: string;
  cxm: string;
  healthScore: string;
  companyDisposition: string;
  contractEndDate: string;
  companyArr: string;
  isTotal?: boolean;
}

export const redCustomers: RedCustomerRow[] = [
  {
    companyName: "Runway",
    cxm: "Daniel Stern",
    healthScore: "Red",
    companyDisposition: "Value Realization",
    contractEndDate: "2026-04-27",
    companyArr: "222,750",
  },
  {
    companyName: "impact.com",
    cxm: "Daniel Stern",
    healthScore: "Red",
    companyDisposition: "Value Realization",
    contractEndDate: "2026-02-28",
    companyArr: "166,000",
  },
  {
    companyName: "Tripadvisor",
    cxm: "Derek Ford",
    healthScore: "Red",
    companyDisposition: "Value Realization",
    contractEndDate: "2026-05-14",
    companyArr: "150,000",
  },
  {
    companyName: "Tixel",
    cxm: "Daniel Stern",
    healthScore: "Red",
    companyDisposition: "Onboarding",
    contractEndDate: "2026-07-29",
    companyArr: "145,000",
  },
  {
    companyName: "Rockstar Automations",
    cxm: "Derek Ford",
    healthScore: "Red",
    companyDisposition: "",
    contractEndDate: "2026-06-29",
    companyArr: "100,001",
  },
  {
    companyName: "Scratch Financial",
    cxm: "Daniel Stern",
    healthScore: "Red",
    companyDisposition: "Value Realization",
    contractEndDate: "2026-03-29",
    companyArr: "52,941",
  },
  {
    companyName: "Doctor Genius",
    cxm: "John Bowman",
    healthScore: "Red",
    companyDisposition: "Value Realization",
    contractEndDate: "2026-03-30",
    companyArr: "33,800",
  },
  {
    companyName: "DOmedia",
    cxm: "Derek Ford",
    healthScore: "Red",
    companyDisposition: "Value Realization",
    contractEndDate: "2026-02-27",
    companyArr: "25,000",
  },
  {
    companyName: "Payphone",
    cxm: "Aimee Allen",
    healthScore: "Red",
    companyDisposition: "Value Realization",
    contractEndDate: "2026-04-22",
    companyArr: "20,125",
  },
  {
    companyName: "Grand Total",
    cxm: "",
    healthScore: "",
    companyDisposition: "",
    contractEndDate: "",
    companyArr: "915,617",
    isTotal: true,
  },
];

// ---------------------------------------------------------------------------
// Customer Health Over Time (line chart)
// ---------------------------------------------------------------------------

export interface CustomerHealthMonth {
  month: string;
  green: number;
  yellow: number;
  red: number;
}

export const customerHealth: CustomerHealthMonth[] = [
  { month: "Jun", green: 16, yellow: 18, red: 19 },
  { month: "Jul", green: 21, yellow: 14, red: 18 },
  { month: "Aug", green: 18, yellow: 19, red: 16 },
  { month: "Sep", green: 24, yellow: 13, red: 16 },
  { month: "Oct", green: 20, yellow: 18, red: 15 },
  { month: "Nov", green: 27, yellow: 12, red: 14 },
  { month: "Dec", green: 23, yellow: 17, red: 13 },
  { month: "Jan", green: 31, yellow: 13, red: 9 },
];
