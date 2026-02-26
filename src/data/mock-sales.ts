import type { Okr } from "@/types/okr";

export const salesOkrs: Okr[] = [
  {
    name: "$20M Total ARR",
    dueDate: "2026-03-31",
    percentComplete: 22,
  },
  {
    name: "Achieve 90% win rate",
    dueDate: "2026-03-31",
    percentComplete: 70,
    status: "green",
  },
];

export const sdrOkrs: Okr[] = [
  {
    name: "Deliver in $80M pipeline built",
    dueDate: "2026-01-31",
    percentComplete: 50,
  },
];

export interface OpenDeal {
  owner: string;
  dealName: string;
  team: "Strategic" | "Enterprise" | "Mid-Market";
  forecastCategory: "Commit" | "Most Likely" | "Best Case";
  stage: string;
  closeDate: string;
  amount: number;
}

export interface ForecastRow {
  team: string;
  pipeline: number;
  pipelineVar: number;
  bestCase: number;
  bestCaseVar: number;
  mostLikely: number;
  mostLikelyVar: number;
  commit: number;
  commitVar: number;
  won: number;
  wonVar: number;
  isTotal?: boolean;
}

export const openDeals: OpenDeal[] = [
  // Strategic
  {
    owner: "Lauren McGee",
    dealName: "Match Group",
    team: "Strategic",
    forecastCategory: "Most Likely",
    stage: "Pricing/Proposal",
    closeDate: "2026-03-20",
    amount: 1381250,
  },
  {
    owner: "Lauren McGee",
    dealName: "Dell Technologies",
    team: "Strategic",
    forecastCategory: "Most Likely",
    stage: "Value Engineering",
    closeDate: "2026-04-03",
    amount: 1200000,
  },
  {
    owner: "Lauren McGee",
    dealName: "Zillow",
    team: "Strategic",
    forecastCategory: "Best Case",
    stage: "Value Engineering",
    closeDate: "2026-04-06",
    amount: 350000,
  },
  {
    owner: "Lauren McGee",
    dealName: "Hinge",
    team: "Strategic",
    forecastCategory: "Best Case",
    stage: "Testing and Scoping",
    closeDate: "2026-03-20",
    amount: 250000,
  },
  {
    owner: "Lauren McGee",
    dealName: "Guthy-Renker Brands",
    team: "Strategic",
    forecastCategory: "Best Case",
    stage: "Value Engineering",
    closeDate: "2026-04-17",
    amount: 1900000,
  },
  // Enterprise
  {
    owner: "Ben Sisk",
    dealName: "Bluebeam, Inc.",
    team: "Enterprise",
    forecastCategory: "Most Likely",
    stage: "Pricing/Proposal",
    closeDate: "2026-02-27",
    amount: 198300,
  },
  {
    owner: "Nick Pyle",
    dealName: "KARL STORZ United States",
    team: "Enterprise",
    forecastCategory: "Best Case",
    stage: "Pricing/Proposal",
    closeDate: "2026-02-20",
    amount: 200000,
  },
  {
    owner: "Seamus McGrath",
    dealName: "Playtika",
    team: "Enterprise",
    forecastCategory: "Best Case",
    stage: "Full Demo",
    closeDate: "2026-04-24",
    amount: 300000,
  },
  {
    owner: "Nick Pyle",
    dealName: "SERVPRO",
    team: "Enterprise",
    forecastCategory: "Best Case",
    stage: "Value Engineering",
    closeDate: "2026-03-06",
    amount: 300000,
  },
  {
    owner: "Seamus McGrath",
    dealName: "The Kraft Group",
    team: "Enterprise",
    forecastCategory: "Best Case",
    stage: "Full Demo",
    closeDate: "2026-03-27",
    amount: 200000,
  },
  {
    owner: "Seamus McGrath",
    dealName: "Gogo Business Aviation",
    team: "Enterprise",
    forecastCategory: "Best Case",
    stage: "Testing and Scoping",
    closeDate: "2026-03-27",
    amount: 150000,
  },
  {
    owner: "Kevin Gleason",
    dealName: "ZoomInfo",
    team: "Enterprise",
    forecastCategory: "Best Case",
    stage: "Pricing/Proposal",
    closeDate: "2026-03-26",
    amount: 150000,
  },
  {
    owner: "Brian McCool",
    dealName: "Baptcare",
    team: "Enterprise",
    forecastCategory: "Best Case",
    stage: "Testing and Scoping",
    closeDate: "2026-04-15",
    amount: 100000,
  },
  {
    owner: "Kevin Gleason",
    dealName: "InEight",
    team: "Enterprise",
    forecastCategory: "Best Case",
    stage: "Testing and Scoping",
    closeDate: "2026-04-15",
    amount: 59400,
  },
  {
    owner: "Nick Pyle",
    dealName: "Pear",
    team: "Enterprise",
    forecastCategory: "Best Case",
    stage: "Testing and Scoping",
    closeDate: "2026-03-20",
    amount: 50000,
  },
  {
    owner: "Ben Sisk",
    dealName: "Frontier Airlines",
    team: "Enterprise",
    forecastCategory: "Most Likely",
    stage: "Testing and Scoping",
    closeDate: "2026-04-17",
    amount: 1500000,
  },
  {
    owner: "Ben Sisk",
    dealName: "Illumina",
    team: "Enterprise",
    forecastCategory: "Most Likely",
    stage: "Discovery Call",
    closeDate: "2026-04-24",
    amount: 350000,
  },
  // Mid-Market
  {
    owner: "Mac Riedy",
    dealName: "Ouster",
    team: "Mid-Market",
    forecastCategory: "Commit",
    stage: "Pricing/Proposal",
    closeDate: "2026-03-26",
    amount: 54800,
  },
  {
    owner: "BeltService",
    dealName: "BeltService",
    team: "Mid-Market",
    forecastCategory: "Best Case",
    stage: "Pricing/Proposal",
    closeDate: "2026-03-31",
    amount: 210000,
  },
  {
    owner: "Bob Vail",
    dealName: "Pantheon Platform",
    team: "Mid-Market",
    forecastCategory: "Best Case",
    stage: "Testing and Scoping",
    closeDate: "2026-03-20",
    amount: 110000,
  },
  {
    owner: "Konrad Herrera",
    dealName: "Traumasoft",
    team: "Mid-Market",
    forecastCategory: "Best Case",
    stage: "Testing and Scoping",
    closeDate: "2026-03-20",
    amount: 50000,
  },
  {
    owner: "Mac Riedy",
    dealName: "Sleeper",
    team: "Mid-Market",
    forecastCategory: "Most Likely",
    stage: "Discovery Call",
    closeDate: "2026-03-20",
    amount: 225000,
  },
  {
    owner: "Mac Riedy",
    dealName: "Canature Water Group",
    team: "Mid-Market",
    forecastCategory: "Best Case",
    stage: "Full Demo",
    closeDate: "2026-04-15",
    amount: 150000,
  },
  {
    owner: "Autumn Warnock",
    dealName: "Pleo",
    team: "Mid-Market",
    forecastCategory: "Best Case",
    stage: "Full Demo",
    closeDate: "2026-04-15",
    amount: 120000,
  },
  {
    owner: "Mac Riedy",
    dealName: "Clinisys",
    team: "Mid-Market",
    forecastCategory: "Most Likely",
    stage: "Full Demo",
    closeDate: "2026-04-20",
    amount: 100000,
  },
  {
    owner: "Bob Vail",
    dealName: "HiMarley",
    team: "Mid-Market",
    forecastCategory: "Most Likely",
    stage: "Discovery",
    closeDate: "2026-04-20",
    amount: 50000,
  },
  {
    owner: "Autumn Warnock",
    dealName: "Ziosk",
    team: "Mid-Market",
    forecastCategory: "Most Likely",
    stage: "Discovery",
    closeDate: "2026-04-20",
    amount: 50000,
  },
  {
    owner: "Autumn Warnock",
    dealName: "Packsize",
    team: "Mid-Market",
    forecastCategory: "Most Likely",
    stage: "Discovery",
    closeDate: "2026-04-30",
    amount: 100000,
  },
  {
    owner: "Dave Dibarra",
    dealName: "Infrrd",
    team: "Mid-Market",
    forecastCategory: "Best Case",
    stage: "Testing and Scoping",
    closeDate: "2026-04-30",
    amount: 100000,
  },
  {
    owner: "Autumn Warnock",
    dealName: "Coretelligent",
    team: "Mid-Market",
    forecastCategory: "Best Case",
    stage: "Testing and Scoping",
    closeDate: "2026-04-30",
    amount: 100000,
  },
  {
    owner: "Bob Vail",
    dealName: "OneLive",
    team: "Mid-Market",
    forecastCategory: "Best Case",
    stage: "Testing and Scoping",
    closeDate: "2026-04-30",
    amount: 50000,
  },
];

export const salesForecast: ForecastRow[] = [
  {
    team: "Strategic",
    pipeline: 1243467,
    pipelineVar: 0,
    bestCase: 1243467,
    bestCaseVar: 0,
    mostLikely: 1243467,
    mostLikelyVar: 0,
    commit: 1243467,
    commitVar: 0,
    won: 1243467,
    wonVar: 0,
  },
  {
    team: "Enterprise",
    pipeline: 1735794,
    pipelineVar: -119500,
    bestCase: 1735794,
    bestCaseVar: -119500,
    mostLikely: 1087794,
    mostLikelyVar: 28044,
    commit: 1087794,
    commitVar: 154044,
    won: 721750,
    wonVar: 0,
  },
  {
    team: "Midmarket",
    pipeline: 909780,
    pipelineVar: -100000,
    bestCase: 859780,
    bestCaseVar: 0,
    mostLikely: 859780,
    mostLikelyVar: 110000,
    commit: 644980,
    commitVar: 0,
    won: 644980,
    wonVar: 0,
  },
  {
    team: "Total",
    pipeline: 3889041,
    pipelineVar: -219500,
    bestCase: 3839041,
    bestCaseVar: -119500,
    mostLikely: 3191041,
    mostLikelyVar: 138044,
    commit: 2976241,
    commitVar: 154044,
    won: 2610197,
    wonVar: 0,
    isTotal: true,
  },
];
