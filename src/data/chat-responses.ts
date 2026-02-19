interface PrebakedQA {
  keywords: string[];
  response: string;
}

const PREBAKED_QA: PrebakedQA[] = [
  {
    keywords: ["green", "prod", "eng", "okr"],
    response: `There are **3 Prod/Eng OKRs** currently flagged green, all on track or ahead of schedule.

### General
- **Maintain 100% all-up system uptime** — 100%, due Mar 31

### Flux
- **Enable Forge, Solutions, and Customers to fully own voice-surface integrations (Voice APIs)** — 75%, due Mar 31

### Athena
- **LAND: Events API (Dependency to enable proactive)** — 80%, due Mar 31

All three are in great shape. System uptime is at 100%, and both Flux and Athena are well ahead of their expected pace for Q1.`,
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

- **Green Prod/Eng OKRs** — which engineering objectives are on track
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
