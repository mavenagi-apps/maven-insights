interface PrebakedQA {
  keywords: string[];
  response: string;
}

const PREBAKED_QA: PrebakedQA[] = [
  {
    keywords: ["yellow", "prod", "eng", "okr"],
    response: `I found **7 Prod/Eng OKRs** currently flagged yellow across 5 teams. These are all behind their expected pace for Q1.

### General
- **Achieve ≥ 80% autonomous resolution rate on complex enterprise journeys** — 37%, due Mar 31

### Forge
- **Email used by 3+ customers** — 40%, due Jan 31

### Flux
- **Bring Voice to GA and accelerate commercial uptake** — 54%, due Mar 31

### Helix
- **[Launch] Segments** — 50%, due Mar 31
- **[Launch] Instructions** — 50%, due Mar 31

### Athena
- **LAND: Platform API (Inception)** — 45%, due Mar 31
- **[DEMO] OnPrem used by 1+ customer (phase 1 complete)** — 40%, due Mar 31

The most urgent is Forge's "Email used by 3+ customers" — it's only at 40% and was already due January 31. The Athena and General OKRs are also worth watching since they're below 45%.`,
  },
  {
    keywords: ["customer", "onboarding", "on track", "onboard"],
    response: `There are **7 customer onboardings** currently on track. All of them are progressing through their implementation milestones on schedule.

### On Track Customers
- **Apryse**
- **iApartments**
- **Practice Better**
- **SOLO**
- **HubSync**
- **hyperexponential**
- **Bonterra**

No blockers or delays reported for any of these accounts. Would you like me to look into any specific customer's onboarding details?`,
  },
  {
    keywords: ["sales", "pipeline", "revenue"],
    response: `Maven's total sales pipeline sits at **$3,889,041** across three segments.

### Pipeline by Team
- **Enterprise** — $1,735,794 (45% of total)
- **Strategic** — $1,243,467 (32% of total)
- **Midmarket** — $909,780 (23% of total)

Enterprise is the largest segment at nearly half the total pipeline. Strategic follows with $1.24M, and Midmarket contributes just under $910K.`,
  },
];

const FALLBACK_RESPONSE = `I don't have specific data for that question yet. Try asking me about:

- **Yellow Prod/Eng OKRs** — which engineering objectives are at risk
- **Customer onboardings** — which customers are on track
- **Sales pipeline** — pipeline breakdown by team

These are the areas I have the most up-to-date information on.`;

export function getMatchedResponse(userMessage: string): string {
  const normalizedInput = userMessage.toLowerCase();

  let bestMatch: PrebakedQA | null = null;
  let bestScore = 0;

  for (const qa of PREBAKED_QA) {
    const score = qa.keywords.filter((kw) =>
      normalizedInput.includes(kw)
    ).length;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = qa;
    }
  }

  if (bestMatch && bestScore >= 1) {
    return bestMatch.response;
  }

  return FALLBACK_RESPONSE;
}
