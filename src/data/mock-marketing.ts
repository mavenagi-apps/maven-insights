import type { Okr } from "@/types/okr";

export const marketingOkrs: Okr[] = [
  {
    name: ">30% global share of voice for AI for CX",
    dueDate: "2026-01-31",
    percentComplete: 33,
  },
  {
    name: "Generate 70% of annual direct leads at <$500 per lead",
    dueDate: "2026-01-31",
    percentComplete: 14,
  },
  {
    name: "Strengthen Employer Brand and outreach",
    dueDate: "2025-10-31",
    percentComplete: 0,
  },
  {
    name: "Generate and distribute industry-leading content to educate and attract potential customers",
    dueDate: "2025-10-31",
    percentComplete: 0,
  },
  {
    name: "Establish Maven AGI as a recognized presence in the industry",
    dueDate: "2025-10-31",
    percentComplete: 158,
  },
];

// ---------------------------------------------------------------------------
// Pipe Gen Attainment
// ---------------------------------------------------------------------------

export interface PipeGenAttainmentRow {
  pipelineSource: string;
  newOpps: string;
  oppGoalFq: string;
  oppGoalPacing: string;
  newOppsAttainment: string;
  newPipeline: string;
  pipelineGoalFq: string;
  pipelineGoalPacing: string;
  newPipelineAttainment: string;
  isTotal?: boolean;
}

export const pipeGenAttainment: PipeGenAttainmentRow[] = [
  {
    pipelineSource: "Marketing (MQL)",
    newOpps: "18",
    oppGoalFq: "62",
    oppGoalPacing: "58",
    newOppsAttainment: "31%",
    newPipeline: "$2.5M",
    pipelineGoalFq: "$10.2M",
    pipelineGoalPacing: "$9.6M",
    newPipelineAttainment: "27%",
  },
  {
    pipelineSource: "SDR",
    newOpps: "129",
    oppGoalFq: "219",
    oppGoalPacing: "207",
    newOppsAttainment: "62%",
    newPipeline: "$10.3M",
    pipelineGoalFq: "$27.1M",
    pipelineGoalPacing: "$25.6M",
    newPipelineAttainment: "40%",
  },
  {
    pipelineSource: "AE (SQL)",
    newOpps: "48",
    oppGoalFq: "121",
    oppGoalPacing: "114",
    newOppsAttainment: "42%",
    newPipeline: "$5.3M",
    pipelineGoalFq: "$16.9M",
    pipelineGoalPacing: "$16.0M",
    newPipelineAttainment: "33%",
  },
  {
    pipelineSource: "Partner (PQL)",
    newOpps: "4",
    oppGoalFq: "66",
    oppGoalPacing: "62",
    newOppsAttainment: "6%",
    newPipeline: "$1.7M",
    pipelineGoalFq: "$13.1M",
    pipelineGoalPacing: "$12.4M",
    newPipelineAttainment: "14%",
  },
  {
    pipelineSource: "Total",
    newOpps: "199",
    oppGoalFq: "467",
    oppGoalPacing: "442",
    newOppsAttainment: "45%",
    newPipeline: "$19.9M",
    pipelineGoalFq: "$67.3M",
    pipelineGoalPacing: "$63.6M",
    newPipelineAttainment: "31%",
    isTotal: true,
  },
];

// ---------------------------------------------------------------------------
// Site Traffic
// ---------------------------------------------------------------------------

export interface SiteTrafficRow {
  metric: string;
  janMtd: string;
  dec: string;
  nov: string;
  isBold?: boolean;
  isSummary?: boolean;
}

export const siteTraffic: SiteTrafficRow[] = [
  { metric: "Spend", janMtd: "$34,845 (44%)", dec: "$85,594", nov: "$51,304" },
  { metric: "Ad Impressions", janMtd: "792,856", dec: "1,275,842", nov: "844,738" },
  { metric: "Site Traffic", janMtd: "9,187", dec: "5,640", nov: "3,917", isBold: true },
  { metric: "Page Views (Maven 5000 accounts)", janMtd: "1,043", dec: "731", nov: "930" },
  { metric: "Demo form submit", janMtd: "27", dec: "31", nov: "N/A" },
  { metric: "MELs", janMtd: "23", dec: "53", nov: "17" },
  { metric: "MQLs", janMtd: "29", dec: "34", nov: "45" },
  { metric: "CPL$", janMtd: "$670", dec: "$983", nov: "$827", isBold: true, isSummary: true },
  { metric: "Site CR%", janMtd: "0.2%", dec: "0.5%", nov: "N/A", isBold: true },
];

// ---------------------------------------------------------------------------
// Funnel
// ---------------------------------------------------------------------------

export interface FunnelRow {
  group: string;
  nov2025: string;
  dec2025: string;
  jan2026: string;
  grandTotal: string;
  isTotal?: boolean;
}

export const funnel: FunnelRow[] = [
  { group: "1. Demo - Direct Traffic", nov2025: "2", dec2025: "8", jan2026: "1", grandTotal: "11" },
  { group: "2. Demo - Organic Search", nov2025: "13", dec2025: "8", jan2026: "5", grandTotal: "26" },
  { group: "3. Demo - Paid Search", nov2025: "1", dec2025: "", jan2026: "2", grandTotal: "3" },
  { group: "4. Demo - Paid Social", nov2025: "16", dec2025: "2", jan2026: "", grandTotal: "18" },
  { group: "5. Demo - Other", nov2025: "", dec2025: "2", jan2026: "", grandTotal: "2" },
  { group: "6. MEL - Content Download", nov2025: "15", dec2025: "53", jan2026: "8", grandTotal: "76" },
  { group: "7. Website Visitor", nov2025: "127", dec2025: "65", jan2026: "34", grandTotal: "226" },
  { group: "8. Event", nov2025: "1,223", dec2025: "1,232", jan2026: "", grandTotal: "2,455" },
  { group: "9. Other", nov2025: "2", dec2025: "1", jan2026: "", grandTotal: "3" },
  {
    group: "Grand Total",
    nov2025: "1,399",
    dec2025: "1,371",
    jan2026: "50",
    grandTotal: "2,820",
    isTotal: true,
  },
];

// ---------------------------------------------------------------------------
// SDR Attainment - Pipeline
// ---------------------------------------------------------------------------

export interface SdrPipelineRow {
  sdr: string;
  nov: string;
  dec: string;
  jan: string;
  attainment: string;
  q4: string;
  q4Attainment: string;
  isTotal?: boolean;
}

export const sdrPipeline: SdrPipelineRow[] = [
  { sdr: "Jake Savitscus", nov: "122%", dec: "363%", jan: "$365K", attainment: "122%", q4: "$1.8M", q4Attainment: "202%" },
  { sdr: "Dylan DeSimone", nov: "132%", dec: "80%", jan: "$635K", attainment: "212%", q4: "$1.3M", q4Attainment: "141%" },
  { sdr: "Chris Kinder", nov: "83%", dec: "153%", jan: "$475K", attainment: "158%", q4: "$1.2M", q4Attainment: "132%" },
  { sdr: "Josh Boulos", nov: "153%", dec: "127%", jan: "$230K", attainment: "77%", q4: "$1.1M", q4Attainment: "119%" },
  { sdr: "Travis Kent", nov: "50%", dec: "97%", jan: "$550K", attainment: "183%", q4: "$990K", q4Attainment: "110%" },
  { sdr: "Andrew Lewis", nov: "119%", dec: "67%", jan: "$225K", attainment: "75%", q4: "$781K", q4Attainment: "87%" },
  { sdr: "Gavin Reily", nov: "22%", dec: "155%", jan: "$175K", attainment: "58%", q4: "$706K", q4Attainment: "78%" },
  { sdr: "Lukas Kaminski", nov: "", dec: "", jan: "$160K", attainment: "", q4: "$310K", q4Attainment: "" },
  { sdr: "Bridget Larkin", nov: "0%", dec: "33%", jan: "$0K", attainment: "0%", q4: "$100K", q4Attainment: "11%" },
  {
    sdr: "Total",
    nov: "102%",
    dec: "119%",
    jan: "$2.8M",
    attainment: "94%",
    q4: "$7.6M",
    q4Attainment: "110%",
    isTotal: true,
  },
];

// ---------------------------------------------------------------------------
// SDR Attainment - Ops
// ---------------------------------------------------------------------------

export interface SdrOpsRow {
  sdr: string;
  nov: string;
  dec: string;
  jan: string;
  attainment: string;
  q4: string;
  q4Attainment: string;
  isTotal?: boolean;
}

export const sdrOps: SdrOpsRow[] = [
  { sdr: "Jake Savitscus", nov: "60%", dec: "60%", jan: "8", attainment: "80%", q4: "20", q4Attainment: "67%" },
  { sdr: "Josh Boulos", nov: "70%", dec: "60%", jan: "4", attainment: "40%", q4: "17", q4Attainment: "57%" },
  { sdr: "Dylan DeSimone", nov: "50%", dec: "40%", jan: "7", attainment: "70%", q4: "16", q4Attainment: "53%" },
  { sdr: "Chris Kinder", nov: "30%", dec: "70%", jan: "6", attainment: "60%", q4: "16", q4Attainment: "53%" },
  { sdr: "Gavin Reily", nov: "10%", dec: "70%", jan: "3", attainment: "30%", q4: "11", q4Attainment: "37%" },
  { sdr: "Andrew Lewis", nov: "40%", dec: "40%", jan: "4", attainment: "40%", q4: "12", q4Attainment: "40%" },
  { sdr: "Travis Kent", nov: "20%", dec: "40%", jan: "4", attainment: "40%", q4: "10", q4Attainment: "33%" },
  { sdr: "Bridget Larkin", nov: "0%", dec: "30%", jan: "0", attainment: "0%", q4: "3", q4Attainment: "10%" },
  { sdr: "Lukas Kaminski", nov: "", dec: "", jan: "4", attainment: "", q4: "8", q4Attainment: "" },
  {
    sdr: "Total",
    nov: "41%",
    dec: "50%",
    jan: "40",
    attainment: "40%",
    q4: "91",
    q4Attainment: "46%",
    isTotal: true,
  },
];
