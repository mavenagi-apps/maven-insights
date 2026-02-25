export type StepOwner = "ai" | "team";

export type FunctionTab = "marketing" | "sales" | "solutions" | "cx" | "product";

export interface SubStep {
  id: string;
  text: string;
  completed: boolean;
  customerName?: string;
  description?: string;
}

export interface Step {
  id: string;
  stepNumber: number;
  owner: StepOwner;
  ownerName: string;
  functionTab: FunctionTab;
  title: string;
  target: string;
  description: string;
  subSteps: SubStep[];
  completed: boolean;
  theme: string;
  goalIds: string[];
  /** If true, this step is a mirror for the business-goals view only; skip in function tab. */
  isMirror?: boolean;
}

export interface BusinessGoal {
  id: string;
  number: number;
  title: string;
  target: string;
  description: string;
  steps: Step[];
}

// ---------------------------------------------------------------------------
// Goal 1: Achieve $25M ARR in Net New Customer Bookings
// ---------------------------------------------------------------------------

const goal1Steps: Step[] = [
  {
    id: "g1-s1",
    stepNumber: 1,
    owner: "ai",
    ownerName: "Marketing AI",
    functionTab: "marketing",
    theme: "Demand Generation",
    title: "Achieve 2,000 MQLs",
    target: "2,000 Marketing Qualified Leads",
    description:
      "Marketing AI autonomously drives top-of-funnel demand generation through content, SEO, and social \u2014 targeting buyers in enterprise CX, support operations, and digital transformation.",
    completed: true,
    goalIds: ["goal-1"],
    subSteps: [
      {
        id: "g1-s1-a",
        text: "SEO Optimization (500 organic MQLs target)",
        completed: true,
        description:
          "Marketing AI audits keyword gaps across competitor and category terms, auto-generates optimized landing pages and metadata updates, and continuously monitors ranking performance. The goal is 500 organic MQLs from buyers searching for AI support and autonomous CX solutions.",
      },
      {
        id: "g1-s1-b",
        text: "Blog Post Engine (250 MQLs)",
        completed: true,
        description:
          "Marketing AI generates 3-4 SEO-optimized blog posts per week targeting high-intent CX keywords, each structured for conversion with embedded CTAs and gated assets. The engine is designed to deliver 250 MQLs from organic blog traffic over the quarter.",
      },
      {
        id: "g1-s1-c",
        text: "LinkedIn Demand Campaign (250 MQLs)",
        completed: false,
        description:
          "Marketing AI creates and schedules a LinkedIn thought-leadership content series featuring executive perspectives, customer proof points, and product announcements. The campaign targets CX and support leaders at enterprise accounts, aiming for 250 MQLs through organic and promoted posts.",
      },
      {
        id: "g1-s1-d",
        text: "Paid + Retargeting (1,000 MQLs)",
        completed: false,
        description:
          "Marketing AI manages paid search and retargeting campaigns across Google and LinkedIn, optimizing bid strategies and audience segments in real time. The target is 1,000 MQLs from paid channels, with continuous CPL optimization and conversion rate testing.",
      },
    ],
  },
  // Marketing Team step (fabricated)
  {
    id: "g1-sm1",
    stepNumber: 1,
    owner: "team",
    ownerName: "Marketing Team",
    functionTab: "marketing",
    theme: "Demand Generation",
    title: "Execute Content Calendar and Brand Activation",
    target: "Publish and distribute all AI-generated content, driving 2,000 MQLs across channels",
    description:
      "The Marketing team owns editorial judgment, brand voice, and distribution \u2014 reviewing AI-generated blog posts, approving LinkedIn content, managing paid campaign spend, and coordinating event appearances. Human marketers ensure every piece of content is accurate, on-brand, and timed to maximize pipeline impact.",
    completed: true,
    goalIds: ["goal-1"],
    subSteps: [
      {
        id: "g1-sm1-a",
        text: "Review and publish AI-generated blog post cadence (3-4 posts/week)",
        completed: true,
        description:
          "Marketing team reviews each AI-drafted post for accuracy, brand tone, and SEO alignment before publishing. Editors add customer proof points and adjust messaging based on field feedback from Sales and CX.",
      },
      {
        id: "g1-sm1-b",
        text: "Approve and schedule LinkedIn content series with exec team",
        completed: true,
        description:
          "Marketing coordinates with executive stakeholders to approve thought-leadership posts and announce customer wins on LinkedIn. The team manages the posting calendar to maintain consistent presence without overwhelming followers.",
      },
      {
        id: "g1-sm1-c",
        text: "Manage paid campaign budget and vendor relationships (Google/LinkedIn Ads)",
        completed: false,
        description:
          "Marketing team allocates and monitors paid spend across Google and LinkedIn, working with ad platform reps to optimize CPL and audience targeting. Budget decisions are made weekly based on MQL quality data from the CRM.",
      },
      {
        id: "g1-sm1-d",
        text: "Coordinate event appearances and webinar hosting for brand demand",
        completed: false,
        description:
          "Marketing books speaking slots at CX industry events and hosts Maven-branded webinars to generate brand-aware pipeline. Events are tracked by MQL attribution and influenced pipeline in Salesforce.",
      },
    ],
  },
  {
    id: "g1-s2",
    stepNumber: 2,
    owner: "ai",
    ownerName: "Sales AI",
    functionTab: "sales",
    theme: "Pipeline Generation",
    title: "SDR Copilot Generates $200M in Pipeline",
    target: "$200M in qualified pipeline",
    description:
      "Sales AI acts as a 24/7 SDR copilot \u2014 sourcing leads, crafting hyper-personalized outreach, sequencing follow-ups, and surfacing buying signals to the human SDR team.",
    completed: true,
    goalIds: ["goal-1"],
    subSteps: [
      {
        id: "g1-s2-a",
        text: "Lead Sourcing (ICP from G2/Bombora/LinkedIn)",
        completed: true,
        description:
          "Sales AI pulls intent signals from G2, Bombora, and LinkedIn to identify accounts actively researching AI support, CX automation, and conversational AI. Leads are scored and enriched with firmographic and technographic data before routing to SDRs.",
      },
      {
        id: "g1-s2-b",
        text: "Outreach Crafting (personalized emails/LinkedIn)",
        completed: true,
        description:
          "Sales AI generates hyper-personalized email and LinkedIn messages for each prospect, referencing their tech stack, recent company news, and competitive landscape. Each message is tailored to the prospect's role and buying stage.",
      },
      {
        id: "g1-s2-c",
        text: "Proactive Sequencing (multi-touch email\u2192LinkedIn\u2192call)",
        completed: false,
        description:
          "Sales AI orchestrates multi-touch outreach sequences across email, LinkedIn, and phone, automatically adjusting timing and channel based on engagement signals. The goal is to ensure every high-value prospect receives persistent, relevant touches without manual SDR scheduling.",
      },
      {
        id: "g1-s2-d",
        text: "Pipeline Scoring (route high-confidence to AEs)",
        completed: false,
        description:
          "Sales AI scores pipeline opportunities based on engagement velocity, stakeholder seniority, and deal size signals, then routes high-confidence opportunities directly to AEs for immediate follow-up. This ensures the sales team focuses effort on the most likely-to-close deals.",
      },
    ],
  },
  {
    id: "g1-s3",
    stepNumber: 3,
    owner: "ai",
    ownerName: "Solutions AI",
    functionTab: "solutions",
    theme: "Demo Generation",
    title: "Auto-Generate Custom Demos",
    target: "Every POC begins with a fully tailored demo environment",
    description:
      "Solutions AI eliminates the manual effort of demo building \u2014 pulling each prospect\u2019s tech stack, industry use cases, and competitive context to generate a bespoke demo environment.",
    completed: false,
    goalIds: ["goal-1"],
    subSteps: [
      {
        id: "g1-s3-a",
        text: "Tech Stack Ingestion",
        completed: true,
        description:
          "Solutions AI automatically detects and ingests the prospect's tech stack \u2014 CRM, helpdesk, telephony, and knowledge base \u2014 to configure the demo environment with realistic integration points. This eliminates days of manual discovery and setup.",
      },
      {
        id: "g1-s3-b",
        text: "Use Case Mapping (3\u20135 highest-impact use cases)",
        completed: true,
        description:
          "Solutions AI analyzes the prospect's industry, support volume, and ticket categories to identify the 3-5 use cases that will deliver the most deflection and ROI. Each use case is pre-configured in the demo with realistic conversation flows.",
      },
      {
        id: "g1-s3-c",
        text: "Knowledge Source Pre-Population",
        completed: false,
        description:
          "Solutions AI crawls the prospect's public help center and documentation to pre-populate the demo knowledge base, so the demo agent can answer real questions from day one. This makes the POC immediately compelling to the prospect's team.",
      },
      {
        id: "g1-s3-d",
        text: "Competitive Differentiation Layer",
        completed: false,
        description:
          "Solutions AI layers in competitive differentiation \u2014 highlighting Maven's advantages over the prospect's current solution or competing vendors \u2014 directly within the demo experience. Differentiation points are tailored to the specific competitor identified in the sales process.",
      },
      {
        id: "g1-s3-e",
        text: "Post-Demo Technical Validation Summary",
        completed: false,
        description:
          "After each demo, Solutions AI generates a technical validation summary documenting integration feasibility, identified risks, and recommended next steps. This artifact accelerates the technical evaluation and gives the champion ammunition for internal advocacy.",
      },
    ],
  },
  {
    id: "g1-s4",
    stepNumber: 4,
    owner: "team",
    ownerName: "Solutions Team",
    functionTab: "solutions",
    theme: "POC Execution",
    title: "Achieve 90% POC Win Rate",
    target: "90% of POCs convert to paid contracts",
    description:
      "The Solutions team owns the technical win \u2014 taking AI-generated demo environments and turning them into decisive proof points.",
    completed: true,
    goalIds: ["goal-1"],
    subSteps: [
      {
        id: "g1-s4-a",
        text: "POC Scoping Standardization (vertical checklists)",
        completed: true,
        description:
          "Solutions team uses standardized vertical-specific POC checklists to scope every evaluation consistently, ensuring no critical integration or security requirement is missed. Checklists are maintained per-vertical and updated after each win/loss.",
      },
      {
        id: "g1-s4-b",
        text: "Live Demo Delivery",
        completed: true,
        description:
          "Solutions engineers deliver live demos using AI-generated environments, adding real-time customization and answering technical questions that build prospect confidence. The human touch during demos is what converts interest into conviction.",
      },
      {
        id: "g1-s4-c",
        text: "Technical Deep Dives (integration/security)",
        completed: false,
        description:
          "Solutions team conducts deep technical sessions covering API integrations, SSO configuration, data residency, and security compliance \u2014 addressing the concerns that typically stall enterprise deals. These sessions are tailored to the prospect's IT and security team requirements.",
      },
      {
        id: "g1-s4-d",
        text: "Champion Enablement",
        completed: false,
        description:
          "Solutions team equips the internal champion with ROI models, technical architecture diagrams, and executive summaries they need to sell Maven internally. Champion enablement is the single biggest driver of POC-to-close conversion.",
      },
      {
        id: "g1-s4-e",
        text: "Win/Loss Feedback Loop",
        completed: false,
        description:
          "After every POC outcome, Solutions team documents what worked, what did not, and what the prospect cited as deciding factors. This feedback is fed back into AI demo generation and sales messaging to continuously improve win rates.",
      },
    ],
  },
  {
    id: "g1-s5",
    stepNumber: 5,
    owner: "team",
    ownerName: "Sales Team",
    functionTab: "sales",
    theme: "Deal Closing",
    title: "Land Deals",
    target: "$25M in net new ARR closed",
    description:
      "The Sales team converts POC wins into signed contracts across all product lines.",
    completed: false,
    goalIds: ["goal-1"],
    subSteps: [
      {
        id: "g1-s5-a",
        text: "Voice ($6M target \u2014 ClickUp/Fairfax County)",
        completed: true,
        description:
          "Sales team targets $6M in Voice ARR from enterprise accounts with existing CCaaS infrastructure, with ClickUp and Fairfax County as the highest-priority deals. AEs use AI-generated competitive briefs and ROI models tailored to each account's telephony environment.",
      },
      {
        id: "g1-s5-b",
        text: "Proactive ($3M target \u2014 Practice Better/Runway)",
        completed: true,
        description:
          "Sales team targets $3M in Proactive ARR from high-volume SaaS companies where proactive outreach can deflect support tickets before they are created. Practice Better and Runway are priority accounts with strong product-market fit for proactive triggers.",
      },
      {
        id: "g1-s5-c",
        text: "On-Premises ($1M target \u2014 regulated industries)",
        completed: false,
        description:
          "Sales team targets $1M in On-Prem ARR from regulated industries \u2014 government, healthcare, and financial services \u2014 where data residency requirements mandate on-premises deployment. Longer sales cycles are offset by higher ACV and stickier contracts.",
      },
      {
        id: "g1-s5-d",
        text: "Upsell-at-Close (one new product per deal)",
        completed: false,
        description:
          "Sales team bundles at least one additional product line into every new deal at close \u2014 adding Voice to a chat deal, or Proactive to a support deal \u2014 to maximize initial ACV and establish multi-product relationships from day one.",
      },
    ],
  },
  {
    id: "g1-s6",
    stepNumber: 6,
    owner: "ai",
    ownerName: "Product AI",
    functionTab: "product",
    theme: "Roadmap Execution",
    title: "Drive Product Roadmap for Voice, Proactive, and On-Prem",
    target: "Ship the features required to close and retain new product deals",
    description:
      "Product AI monitors the roadmap, surfaces engineering blockers, and prepares fully spec\u2019d features for human review.",
    completed: false,
    goalIds: ["goal-1", "goal-3"],
    subSteps: [
      {
        id: "g1-s6-a",
        text: "Voice Roadmap (Genesys/Twilio/Amazon Connect)",
        completed: true,
        description:
          "Product AI tracks all open Voice engineering issues including telephony integrations with Genesys, Twilio, and Amazon Connect, surfaces blockers weekly to the Voice PM, and generates fully spec'd feature tickets for human review. Delivery of these integrations unlocks Voice deals with AvidXchange and ClickUp.",
      },
      {
        id: "g1-s6-b",
        text: "Proactive Roadmap (trigger logic/scheduling)",
        completed: true,
        description:
          "Product AI monitors the Proactive feature backlog \u2014 trigger logic, campaign scheduling, and survey delivery \u2014 and generates sprint-ready tickets with acceptance criteria. Proactive delivery is gated on these features shipping to support Practice Better and Runway POCs.",
      },
      {
        id: "g1-s6-c",
        text: "On-Prem Roadmap (SSO/audit logging/air-gapped)",
        completed: false,
        description:
          "Product AI tracks On-Prem requirements including SSO integration, audit logging, RBAC, and air-gapped deployment support, generating implementation specs and surfacing dependency risks. On-Prem deals in government and healthcare cannot close until these features ship.",
      },
      {
        id: "g1-s6-d",
        text: "Blocker Surfacing (weekly cross-product report)",
        completed: false,
        description:
          "Product AI generates a weekly cross-product blocker report identifying engineering dependencies, staffing gaps, and external vendor blockers across Voice, Proactive, and On-Prem. The report is delivered to leadership and PMs to enable rapid unblocking decisions.",
      },
      {
        id: "g1-s6-e",
        text: "Ship for Human Review (full ticket specs)",
        completed: false,
        description:
          "Product AI prepares fully specified feature tickets with acceptance criteria, technical design notes, and estimated effort for each roadmap item. PMs review and approve these specs before they enter sprint planning, ensuring engineering works from clear, validated requirements.",
      },
    ],
  },
  // Product Team — Prioritize, Review, Ship
  {
    id: "g1-sp1",
    stepNumber: 6,
    owner: "team",
    ownerName: "Product Team",
    functionTab: "product",
    theme: "Roadmap Execution",
    title: "Prioritize, Review, and Ship Voice, Proactive, and On-Prem",
    target: "PMs review AI-generated specs, prioritize with engineering, and drive features to ship",
    description:
      "The Product team owns the judgment calls that AI cannot make \u2014 deciding which features to prioritize, resolving trade-offs with engineering, and ensuring shipped capabilities meet customer needs. PMs conduct sprint reviews, validate AI-generated specs, and maintain direct relationships with key customers.",
    completed: true,
    goalIds: ["goal-1", "goal-3"],
    subSteps: [
      {
        id: "g1-sp1-a",
        text: "Review and approve AI-generated feature specs for Voice (weekly PM review cycle)",
        completed: true,
        description:
          "PMs review AI-drafted Voice feature tickets \u2014 covering telephony integrations, persona configuration, and call handoff \u2014 and approve them for engineering sprint planning. Specs are refined based on AE and customer feedback before moving to development.",
      },
      {
        id: "g1-sp1-b",
        text: "Lead sprint planning for Proactive and On-Prem feature delivery",
        completed: true,
        description:
          "Product team facilitates sprint planning with engineering, sequencing Proactive and On-Prem work based on deal urgency, customer commitments, and technical dependencies. Engineering estimates are validated against the AI-generated blocker report.",
      },
      {
        id: "g1-sp1-c",
        text: "Conduct customer discovery calls with AvidXchange, Bonterra, and ClickUp for Voice feedback",
        completed: false,
        description:
          "PMs hold regular discovery calls with key Voice customers to validate AI-generated roadmap priorities against real usage patterns and pain points. Feedback from these sessions directly informs which Voice features move to the top of the queue.",
      },
      {
        id: "g1-sp1-d",
        text: "Present roadmap updates to leadership with AI-generated blocker summary",
        completed: false,
        description:
          "Product team presents the weekly roadmap status to leadership, using the AI-generated cross-product blocker report as the foundation and adding strategic context and recommended prioritization decisions. This ensures leadership has real-time visibility into what is shipping and what is at risk.",
      },
    ],
  },
  // Product Team — GTM Enablement
  {
    id: "g1-sp2",
    stepNumber: 7,
    owner: "team",
    ownerName: "Product Team",
    functionTab: "product",
    theme: "GTM Enablement",
    title: "GTM Enablement for Voice, Proactive, and On-Prem",
    target: "Ensure all three products are sales-ready, demo-able, and customer-deployable",
    description:
      "The Product team ensures Voice, Proactive, and On-Prem are not just built but ready to sell \u2014 creating product one-pagers, approving demo environments, publishing deployment docs, and training Sales and Solutions on all three product lines.",
    completed: false,
    goalIds: ["goal-1", "goal-3"],
    subSteps: [
      {
        id: "g1-sp2-a",
        text: "Create Voice product one-pager and sales enablement materials",
        completed: true,
        description:
          "Product team writes the Voice product one-pager positioning Maven's voice capabilities against IVR and competing CCaaS-native bots, and creates sales battle cards for key competitive situations. Materials are reviewed with AEs before the first Voice deals are pitched.",
      },
      {
        id: "g1-sp2-b",
        text: "Approve Proactive demo environments built by Solutions AI for accuracy",
        completed: false,
        description:
          "PMs review each Solutions AI-generated Proactive demo environment to confirm the trigger logic, campaign scenarios, and deflection metrics are accurate and on-roadmap. Any demo features that are not yet shipped are flagged and either removed or scheduled.",
      },
      {
        id: "g1-sp2-c",
        text: "Publish On-Prem deployment documentation and security questionnaire library",
        completed: false,
        description:
          "Product team publishes comprehensive On-Prem deployment docs covering air-gapped installation, SSO configuration, RBAC, and audit logging \u2014 and builds a reusable security questionnaire library for regulated-industry procurement processes. These assets are required to move On-Prem deals through security review.",
      },
      {
        id: "g1-sp2-d",
        text: "Host internal product training for Sales and Solutions on all three new product lines",
        completed: false,
        description:
          "Product team runs training sessions for Sales AEs and Solutions engineers covering the capabilities, limitations, pricing, and competitive positioning of Voice, Proactive, and On-Prem. Training is recorded and added to the internal knowledge base for ongoing reference.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Goal 2: Achieve Net Revenue Retention of 120%
// ---------------------------------------------------------------------------

const goal2Steps: Step[] = [
  // Product Team step (fabricated)
  {
    id: "g2-sp1",
    stepNumber: 1,
    owner: "team",
    ownerName: "Product Team",
    functionTab: "product",
    theme: "Roadmap Execution",
    title: "Accelerate Customer-Driven Feature Delivery for NRR",
    target: "Ship integrations and features needed to retain and expand at-risk accounts",
    description:
      "The Product team prioritizes features that directly impact renewal and expansion outcomes \u2014 coordinating with CX to understand what AvidXchange, Bonterra, Runway, and other key accounts need to renew at higher ARR. PMs translate customer escalations into sprint-ready tickets and track delivery against renewal timelines.",
    completed: false,
    goalIds: ["goal-2"],
    subSteps: [
      {
        id: "g2-sp1-a",
        text: "Prioritize Genesys API integration for AvidXchange renewal (May 2028)",
        completed: true,
        description:
          "Product team places the Genesys integration at the top of the Voice engineering queue, given AvidXchange's $300K ARR and the direct link between this blocker and their renewal decision. PM owns the delivery timeline and communicates weekly status to the CX team.",
      },
      {
        id: "g2-sp1-b",
        text: "Unblock Bonterra Pendo integration by coordinating with external vendor",
        completed: false,
        description:
          "Product team owns the escalation path for the Pendo integration blocker \u2014 coordinating between Bonterra, Pendo's dev team, and internal engineering to move from blocked to in-progress. A parallel-path plan ensures Bonterra can go live on other channels while Pendo is resolved.",
      },
      {
        id: "g2-sp1-c",
        text: "Fix Runway ticket action and KB refresh bugs (mission-critical, 2-month renewal window)",
        completed: false,
        description:
          "Two high-priority production bugs at Runway \u2014 ticket action not firing and KB auto-refresh stopping \u2014 are escalated to top of the engineering queue given the $222K ARR account renews in April 2026. Product team owns the customer-facing communication plan while engineering resolves.",
      },
      {
        id: "g2-sp1-d",
        text: "Deliver on-prem features required for regulated-industry expansions",
        completed: false,
        description:
          "Product team sequences On-Prem delivery milestones to unlock expansion deals in government, healthcare, and financial services \u2014 where data residency is a hard requirement. Delivery targets are set against the sales pipeline's expected close dates.",
      },
    ],
  },
  {
    id: "g2-s2",
    stepNumber: 2,
    owner: "ai",
    ownerName: "CX AI",
    functionTab: "cx",
    theme: "Renewal Risk Management",
    title: "Monitor Customers for Renewal Risk and Create On-Track Plans",
    target: "Identify all at-risk renewals, prevent churn",
    description:
      "CX AI continuously monitors customer health signals and surfaces renewal risk with recommended next steps.",
    completed: true,
    goalIds: ["goal-2"],
    subSteps: [
      {
        id: "g2-s2-a",
        text: "Tripadvisor ($150K ARR | Red | Renews May 2026): Urgent executive re-engagement needed; AI to draft exec outreach + QBR agenda for Derek Ford",
        completed: true,
        customerName: "Tripadvisor",
        description:
          "Tripadvisor is flagged Red with a May 2026 renewal and declining executive engagement. CX AI drafts an executive outreach email and QBR agenda for Derek Ford to re-establish the relationship and demonstrate ongoing value before the renewal window opens.",
      },
      {
        id: "g2-s2-b",
        text: "Rockstar Automations ($100K ARR | Red | Off Track | Renews June 2026): Customer stated no longer working with Maven as of 2/23; AI to draft win-back brief",
        completed: true,
        customerName: "Rockstar Automations",
        description:
          "Rockstar Automations communicated they are no longer working with Maven as of February 23. CX AI generates a win-back brief analyzing what went wrong, proposing a remediation plan, and drafting a re-engagement offer to prevent the $100K ARR from churning.",
      },
      {
        id: "g2-s2-c",
        text: "Vangst ($62.7K ARR | Red | Off Track | Renews Dec 2027): Customer notified pause as of 2/23; AI to draft 30-day re-activation plan",
        completed: true,
        customerName: "Vangst",
        description:
          "Vangst notified a pause on their Maven deployment. CX AI drafts a 30-day re-activation plan with specific milestones, a health check call cadence, and a usage incentive to bring the account back on track before the long runway to their December 2027 renewal erodes further.",
      },
      {
        id: "g2-s2-d",
        text: "DOmedia ($25K ARR | Red | Renews Feb 2026 URGENT): Contract end imminent; AI to draft renewal offer with 30-day extension",
        completed: true,
        customerName: "DOmedia",
        description:
          "DOmedia's contract is expiring imminently in February 2026. CX AI drafts a renewal offer with a 30-day extension to buy time for re-engagement, along with a value summary highlighting the deflection and resolution improvements achieved during the current term.",
      },
      {
        id: "g2-s2-e",
        text: "AvidXchange ($300K ARR | Yellow | Renews May 2028): Genesys API integration is primary blocker; AI to generate weekly eng-status update for Derek Ford",
        completed: true,
        customerName: "AvidXchange",
        description:
          "AvidXchange's $300K ARR renewal is Yellow due to the Genesys API integration blocker. CX AI generates a weekly engineering status update for Derek Ford summarizing progress, remaining work, and expected delivery date to maintain confidence during the integration timeline.",
      },
      {
        id: "g2-s2-f",
        text: "Guthy-Renker ($300K ARR | Yellow \u2192 was Green | Renews Oct 2026): Multiple open high-priority items; AI to draft path-to-Green plan for Lauren McGee",
        completed: false,
        customerName: "Guthy-Renker",
        description:
          "Guthy-Renker dropped from Green to Yellow with multiple open high-priority items. CX AI drafts a detailed path-to-Green plan for Lauren McGee, prioritizing the open items by impact and proposing a weekly cadence to resolve each one before the October 2026 renewal.",
      },
      {
        id: "g2-s2-g",
        text: "Bonterra ($292.4K ARR | Yellow | Renews Nov 2027): Pendo integration blocked on external vendor; AI to draft parallel-path go-live plan for Chris Belz",
        completed: false,
        customerName: "Bonterra",
        description:
          "Bonterra's $292.4K ARR account is blocked on the Pendo integration, which depends on an external vendor timeline. CX AI drafts a parallel-path go-live plan for Chris Belz that enables Bonterra to launch on available channels while the Pendo integration is resolved.",
      },
      {
        id: "g2-s2-h",
        text: "OneTrust ($241.6K ARR | Yellow \u2192 was Green | Renews Jan 2028): Green\u2192Yellow trend; AI to generate usage analysis and proactive QBR for Chris Belz",
        completed: false,
        customerName: "OneTrust",
        description:
          "OneTrust has trended from Green to Yellow, signaling declining engagement. CX AI generates a detailed usage analysis showing which features are underutilized and proposes a proactive QBR agenda for Chris Belz to re-anchor the relationship around measurable outcomes.",
      },
      {
        id: "g2-s2-i",
        text: "Runway ($222.75K ARR | Yellow \u2192 was Red | Renews Apr 2026 CRITICAL): 2 months to renewal; 2 open bugs (ticket action, KB refresh); AI escalates bugs daily + drafts renewal brief for Daniel Stern",
        completed: false,
        customerName: "Runway",
        description:
          "Runway renews in April 2026 with two production bugs \u2014 ticket action not firing and KB auto-refresh stopping \u2014 threatening a $222.75K ARR renewal. CX AI escalates both bugs daily to engineering and drafts a renewal readiness brief for Daniel Stern with a remediation timeline.",
      },
      {
        id: "g2-s2-j",
        text: "ClickUp ($157.5K ARR | Yellow | Renews Feb 2026 URGENT): Renewal this month; AI to generate renewal readiness brief with Voice expansion offer for Derek Ford",
        completed: false,
        customerName: "ClickUp",
        description:
          "ClickUp's $157.5K ARR renewal is this month and flagged Yellow. CX AI generates a renewal readiness brief for Derek Ford that includes current value metrics, a Voice expansion offer, and a proposed multi-year structure to secure the renewal at higher ARR.",
      },
      {
        id: "g2-s2-k",
        text: "Celonis ($113.3K ARR | Yellow \u2192 was Red | Renews Apr 2026): Near-term renewal; AI to draft value realization report and QBR for Daniel Stern",
        completed: false,
        customerName: "Celonis",
        description:
          "Celonis has improved from Red to Yellow but renews in April 2026. CX AI drafts a value realization report quantifying deflection improvements and cost savings, plus a QBR agenda for Daniel Stern to solidify the recovery trajectory before the renewal conversation.",
      },
    ],
  },
  {
    id: "g2-s3",
    stepNumber: 3,
    owner: "team",
    ownerName: "CX Team",
    functionTab: "cx",
    theme: "Customer Success Execution",
    title: "Work with CX AI to Follow Up and Deliver for Customers",
    target: "Turn all Red/Yellow customers to Green",
    description:
      "The CX team uses CX AI-generated plans, drafted emails, and status reports as a force multiplier.",
    completed: false,
    goalIds: ["goal-2"],
    subSteps: [
      {
        id: "g2-s3-a",
        text: "Daily AI Briefing (health changes + drafted outreach)",
        completed: true,
        description:
          "CX team starts each day with an AI-generated briefing covering overnight health score changes, new risk signals, and pre-drafted outreach emails for accounts requiring immediate attention. This ensures no at-risk account goes without a same-day response.",
      },
      {
        id: "g2-s3-b",
        text: "QBR Execution (AI-generated agendas/decks)",
        completed: true,
        description:
          "CX team conducts quarterly business reviews using AI-generated agendas, slide decks, and value realization data. CSMs add personal context and relationship insights before each meeting, turning AI-assembled data into compelling customer conversations.",
      },
      {
        id: "g2-s3-c",
        text: "Bug Escalation Follow-Through (Runway/Guthy-Renker/Bonterra)",
        completed: false,
        description:
          "CX team owns the customer-facing communication for critical bugs at Runway, Guthy-Renker, and Bonterra \u2014 providing weekly status updates, managing expectations on resolution timelines, and coordinating with Product to ensure engineering prioritization matches renewal urgency.",
      },
      {
        id: "g2-s3-d",
        text: "Renewal Execution (AI renewal briefs)",
        completed: false,
        description:
          "CX team executes renewal conversations using AI-generated renewal briefs that include value summaries, pricing comparisons, and expansion offers. CSMs negotiate terms, handle objections, and secure signatures before contract expiration.",
      },
      {
        id: "g2-s3-e",
        text: "Health Score Recovery (weekly tracking)",
        completed: false,
        description:
          "CX team tracks health score recovery on a weekly cadence, using AI-generated trend reports to identify which interventions are working and which accounts need escalated attention. The goal is to move every Red and Yellow account to Green within 90 days.",
      },
    ],
  },
  {
    id: "g2-s4",
    stepNumber: 4,
    owner: "ai",
    ownerName: "Solutions AI",
    functionTab: "solutions",
    theme: "Implementation Delivery",
    title: "Deliver Implementation Items for Each Customer",
    target: "Unblock every stalled implementation",
    description:
      "Solutions AI tracks open implementation items and auto-generates implementation plans, configuration specs, and technical documentation.",
    completed: true,
    goalIds: ["goal-2"],
    subSteps: [
      {
        id: "g2-s4-a",
        text: "Generate Genesys API integration spec, endpoint docs, and test plan for Genesys Architect routing",
        completed: true,
        customerName: "AvidXchange",
        description:
          "Solutions AI generates the full Genesys API integration specification for AvidXchange, including endpoint documentation, authentication flow, Architect routing configuration, and a comprehensive test plan. This unblocks engineering from waiting on manual spec creation.",
      },
      {
        id: "g2-s4-b",
        text: "Generate Cisco integration spec, Voice Agent capability brief, and detailed kickoff checklist",
        completed: true,
        customerName: "Guthy-Renker",
        description:
          "Solutions AI produces a Cisco integration spec, Voice Agent capability brief, and kickoff checklist for Guthy-Renker's contact center environment. The deliverables are tailored to Guthy-Renker's existing Cisco UCCE infrastructure and call routing requirements.",
      },
      {
        id: "g2-s4-c",
        text: "Generate Pendo integration spec, Salesforce Copilot runbook, Intercom handoff plan, and parallel-path go-live plan",
        completed: true,
        customerName: "Bonterra",
        description:
          "Solutions AI generates four implementation artifacts for Bonterra: the Pendo integration spec, Salesforce Copilot runbook, Intercom-to-Maven handoff plan, and a parallel-path go-live plan that enables launch without waiting for the blocked Pendo integration.",
      },
      {
        id: "g2-s4-d",
        text: "Generate root cause analysis for ticket action bug, KB refresh audit report, and survey feature spec",
        completed: true,
        customerName: "Runway",
        description:
          "Solutions AI produces a root cause analysis for Runway's ticket action bug, an audit report on KB auto-refresh failures, and a survey feature spec. These deliverables give engineering the diagnostic context to resolve the bugs and ship the requested survey feature.",
      },
      {
        id: "g2-s4-e",
        text: "Generate revised onboarding plan with milestones and $150K expansion scoping doc",
        completed: false,
        customerName: "Fairfax County",
        description:
          "Solutions AI creates a revised onboarding plan for Fairfax County with clear milestones and success criteria, plus a $150K expansion scoping document covering additional department rollouts. The plan accounts for government procurement timelines and compliance requirements.",
      },
      {
        id: "g2-s4-f",
        text: "Generate expansion scoping doc for $75K additional use cases",
        completed: false,
        customerName: "Handshake",
        description:
          "Solutions AI generates an expansion scoping document for Handshake covering $75K in additional student and employer support use cases. The doc includes deployment architecture, estimated deflection rates, and a phased rollout plan for each new use case.",
      },
      {
        id: "g2-s4-g",
        text: "Generate usage optimization plan and configuration review",
        completed: false,
        customerName: "Celonis",
        description:
          "Solutions AI produces a usage optimization plan for Celonis, analyzing current configuration against best practices and identifying opportunities to increase deflection and resolution rates. The plan includes specific configuration changes and expected impact metrics.",
      },
      {
        id: "g2-s4-h",
        text: "Generate quarterly configuration review with optimization opportunities",
        completed: false,
        customerName: "OneTrust",
        description:
          "Solutions AI generates a quarterly configuration review for OneTrust, highlighting underutilized features, configuration drift, and optimization opportunities. The review is designed to re-engage the technical team and demonstrate continuous value delivery.",
      },
    ],
  },
  {
    id: "g2-s5",
    stepNumber: 5,
    owner: "ai",
    ownerName: "CX AI",
    functionTab: "cx",
    theme: "Upsell & Expansion",
    title: "Drive Upsell \u2014 Locate and Surface Use Case Expansion Opportunities",
    target: "Identify and quantify expansion opportunities across top 20 customers",
    description:
      "CX AI analyzes each customer\u2019s current deployment to surface unexploited use cases and generates expansion plans.",
    completed: false,
    goalIds: ["goal-2"],
    subSteps: [
      {
        id: "g2-s5-a",
        text: "$300K Voice expansion via Genesys + CRM Responder \u2014 two parallel paths; AI to generate combined ROI model",
        completed: true,
        customerName: "Thumbtack",
        description:
          "Thumbtack has two parallel expansion paths \u2014 Voice via Genesys and CRM Responder \u2014 totaling $300K. CX AI generates a combined ROI model showing the incremental deflection and cost savings from both products to support the expansion conversation with the account team.",
      },
      {
        id: "g2-s5-b",
        text: "$150K Voice expansion across additional departments; AI to generate department-by-department voice deflection model",
        completed: true,
        customerName: "Fairfax County",
        description:
          "Fairfax County can expand Voice to additional departments for $150K in incremental ARR. CX AI generates a department-by-department voice deflection model showing projected call volume reduction and cost savings for each department considering expansion.",
      },
      {
        id: "g2-s5-c",
        text: "$50K expansion to Microsoft Teams channel + Zendesk deepening; AI to generate Teams channel proposal",
        completed: true,
        customerName: "Intralinks",
        description:
          "Intralinks is a candidate for $50K expansion by adding Microsoft Teams as a support channel and deepening their Zendesk integration. CX AI generates a Teams channel proposal with deployment architecture and expected adoption metrics based on similar enterprise deployments.",
      },
      {
        id: "g2-s5-d",
        text: "$50K Voice expansion; AI to generate legal-industry Voice ROI model for Daniel Stern",
        completed: true,
        customerName: "Clio",
        description:
          "Clio, a legal-tech platform, is a strong candidate for $50K Voice expansion. CX AI generates a legal-industry-specific Voice ROI model for Daniel Stern, modeling call deflection rates for common legal support queries and comparing Maven Voice to Clio's current IVR.",
      },
      {
        id: "g2-s5-e",
        text: "$75K expansion \u2014 AI to generate use case expansion map for additional student/employer flows",
        completed: true,
        customerName: "Handshake",
        description:
          "Handshake can expand by $75K by adding AI support for additional student and employer workflow use cases. CX AI generates a use case expansion map identifying the highest-volume untapped flows and projecting deflection rates for each.",
      },
      {
        id: "g2-s5-f",
        text: "$73K Voice expansion in Meeting Set; AI to generate customer-specific Voice pitch for Derek Ford",
        completed: false,
        customerName: "Exclaimer",
        description:
          "Exclaimer has a $73K Voice expansion opportunity currently in Meeting Set stage. CX AI generates a customer-specific Voice pitch for Derek Ford, highlighting how Maven Voice integrates with Exclaimer's existing support infrastructure and projected call deflection for their top query categories.",
      },
      {
        id: "g2-s5-g",
        text: "$75K Voice expansion; AI to generate healthcare-compliant voice deployment brief",
        completed: false,
        customerName: "Bamboo Health",
        description:
          "Bamboo Health is a $75K Voice expansion opportunity requiring healthcare-compliant deployment. CX AI generates a HIPAA-framed voice deployment brief covering data handling, PHI safeguards, and compliance certification \u2014 the key gating items for healthcare buyers evaluating voice AI.",
      },
      {
        id: "g2-s5-h",
        text: "Email CRM Responder expansion; AI to generate post-resolve survey pitch alongside email expansion",
        completed: false,
        customerName: "Runway",
        description:
          "Runway is a candidate for Email CRM Responder expansion. CX AI generates a pitch pairing the email expansion with Runway's specific feature request for post-resolve surveys, showing how both capabilities work together to improve their support experience.",
      },
      {
        id: "g2-s5-i",
        text: "CRM Responder expansion; AI to generate title/escrow industry pitch",
        completed: false,
        customerName: "Qualia",
        description:
          "Qualia is a CRM Responder expansion target in the title and escrow industry. CX AI generates an industry-specific pitch showing how CRM Responder handles common title/escrow support queries and integrates with Qualia's existing workflow tools.",
      },
      {
        id: "g2-s5-j",
        text: "CRM Responder expansion; AI to generate sports-industry CRM responder brief",
        completed: false,
        customerName: "Teamworks",
        description:
          "Teamworks is a CRM Responder expansion candidate in the sports technology industry. CX AI generates a sports-industry CRM responder brief highlighting use cases for athlete communication, team operations support, and compliance query handling.",
      },
    ],
  },
  {
    id: "g2-s6",
    stepNumber: 6,
    owner: "team",
    ownerName: "CX Team",
    functionTab: "cx",
    theme: "Upsell & Expansion",
    title: "Drive Expansion Outreach and Close with CX AI Storytelling",
    target: "Convert AI-identified expansion opportunities into signed contracts",
    description:
      "CX team takes AI-generated expansion plans and uses them as basis for expansion conversations.",
    completed: false,
    goalIds: ["goal-2"],
    subSteps: [
      {
        id: "g2-s6-a",
        text: "Expansion Outreach (CX AI-drafted emails to right stakeholders)",
        completed: true,
        description:
          "CX team sends AI-drafted expansion outreach emails to the right stakeholders at each account, personalizing the message with relationship context and timing it to coincide with QBRs or renewal conversations for maximum impact.",
      },
      {
        id: "g2-s6-b",
        text: "Storytelling with CX AI (ROI models + peer examples)",
        completed: true,
        description:
          "CX team uses AI-generated ROI models and peer examples to tell compelling expansion stories \u2014 showing each customer how similar accounts have benefited from adding Voice, Proactive, or additional channels to their Maven deployment.",
      },
      {
        id: "g2-s6-c",
        text: "QBR Expansion Anchoring",
        completed: false,
        description:
          "CX team anchors every QBR with an expansion recommendation, using AI-generated opportunity analysis to show the customer what they are leaving on the table. Expansion anchoring converts routine check-ins into pipeline-generating conversations.",
      },
      {
        id: "g2-s6-d",
        text: "Negotiation and Close",
        completed: false,
        description:
          "CX team negotiates expansion contracts using AI-generated pricing comparisons, competitive benchmarks, and value projections. The human negotiation skills and relationship trust are what convert AI-identified opportunities into signed revenue.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Goal 3: Generate 30% of Revenue from New Products
// ---------------------------------------------------------------------------

const goal3Steps: Step[] = [
  // Mirror of g1-s6 Product AI step — shown in Goal 3 business-goals section only
  {
    id: "g3-s1-mirror",
    stepNumber: 1,
    owner: "ai",
    ownerName: "Product AI",
    functionTab: "product",
    theme: "Roadmap Execution",
    title: "Drive Product Roadmap for Voice, Proactive, and On-Prem",
    target: "Ship the features required to close and retain new product deals",
    description:
      "Product AI monitors the roadmap, surfaces engineering blockers, and prepares fully spec\u2019d features for human review.",
    completed: false,
    goalIds: ["goal-1", "goal-3"],
    isMirror: true,
    subSteps: [
      {
        id: "g1-s6-a",
        text: "Voice Roadmap (Genesys/Twilio/Amazon Connect)",
        completed: true,
        description:
          "Product AI tracks all open Voice engineering issues including telephony integrations with Genesys, Twilio, and Amazon Connect, surfaces blockers weekly to the Voice PM, and generates fully spec'd feature tickets for human review. Delivery of these integrations unlocks Voice deals with AvidXchange and ClickUp.",
      },
      {
        id: "g1-s6-b",
        text: "Proactive Roadmap (trigger logic/scheduling)",
        completed: true,
        description:
          "Product AI monitors the Proactive feature backlog \u2014 trigger logic, campaign scheduling, and survey delivery \u2014 and generates sprint-ready tickets with acceptance criteria. Proactive delivery is gated on these features shipping to support Practice Better and Runway POCs.",
      },
      {
        id: "g1-s6-c",
        text: "On-Prem Roadmap (SSO/audit logging/air-gapped)",
        completed: false,
        description:
          "Product AI tracks On-Prem requirements including SSO integration, audit logging, RBAC, and air-gapped deployment support, generating implementation specs and surfacing dependency risks. On-Prem deals in government and healthcare cannot close until these features ship.",
      },
      {
        id: "g1-s6-d",
        text: "Blocker Surfacing (weekly cross-product report)",
        completed: false,
        description:
          "Product AI generates a weekly cross-product blocker report identifying engineering dependencies, staffing gaps, and external vendor blockers across Voice, Proactive, and On-Prem. The report is delivered to leadership and PMs to enable rapid unblocking decisions.",
      },
      {
        id: "g1-s6-e",
        text: "Ship for Human Review (full ticket specs)",
        completed: false,
        description:
          "Product AI prepares fully specified feature tickets with acceptance criteria, technical design notes, and estimated effort for each roadmap item. PMs review and approve these specs before they enter sprint planning, ensuring engineering works from clear, validated requirements.",
      },
    ],
  },
  // Mirror of g1-sp1 — Prioritize, Review, Ship (Goal 3 business-goals section only)
  {
    id: "g3-sp1-mirror",
    stepNumber: 1,
    owner: "team",
    ownerName: "Product Team",
    functionTab: "product",
    theme: "Roadmap Execution",
    title: "Prioritize, Review, and Ship Voice, Proactive, and On-Prem",
    target: "PMs review AI-generated specs, prioritize with engineering, and drive features to ship",
    description:
      "The Product team owns the judgment calls that AI cannot make \u2014 deciding which features to prioritize, resolving trade-offs with engineering, and ensuring shipped capabilities meet customer needs. PMs conduct sprint reviews, validate AI-generated specs, and maintain direct relationships with key customers.",
    completed: true,
    goalIds: ["goal-1", "goal-3"],
    isMirror: true,
    subSteps: [
      {
        id: "g1-sp1-a",
        text: "Review and approve AI-generated feature specs for Voice (weekly PM review cycle)",
        completed: true,
        description:
          "PMs review AI-drafted Voice feature tickets \u2014 covering telephony integrations, persona configuration, and call handoff \u2014 and approve them for engineering sprint planning. Specs are refined based on AE and customer feedback before moving to development.",
      },
      {
        id: "g1-sp1-b",
        text: "Lead sprint planning for Proactive and On-Prem feature delivery",
        completed: true,
        description:
          "Product team facilitates sprint planning with engineering, sequencing Proactive and On-Prem work based on deal urgency, customer commitments, and technical dependencies. Engineering estimates are validated against the AI-generated blocker report.",
      },
      {
        id: "g1-sp1-c",
        text: "Conduct customer discovery calls with AvidXchange, Bonterra, and ClickUp for Voice feedback",
        completed: false,
        description:
          "PMs hold regular discovery calls with key Voice customers to validate AI-generated roadmap priorities against real usage patterns and pain points. Feedback from these sessions directly informs which Voice features move to the top of the queue.",
      },
      {
        id: "g1-sp1-d",
        text: "Present roadmap updates to leadership with AI-generated blocker summary",
        completed: false,
        description:
          "Product team presents the weekly roadmap status to leadership, using the AI-generated cross-product blocker report as the foundation and adding strategic context and recommended prioritization decisions. This ensures leadership has real-time visibility into what is shipping and what is at risk.",
      },
    ],
  },
  // Mirror of g1-sp2 — GTM Enablement (Goal 3 business-goals section only)
  {
    id: "g3-sp2-mirror",
    stepNumber: 2,
    owner: "team",
    ownerName: "Product Team",
    functionTab: "product",
    theme: "GTM Enablement",
    title: "GTM Enablement for Voice, Proactive, and On-Prem",
    target: "Ensure all three products are sales-ready, demo-able, and customer-deployable",
    description:
      "The Product team ensures Voice, Proactive, and On-Prem are not just built but ready to sell \u2014 creating product one-pagers, approving demo environments, publishing deployment docs, and training Sales and Solutions on all three product lines.",
    completed: false,
    goalIds: ["goal-1", "goal-3"],
    isMirror: true,
    subSteps: [
      {
        id: "g1-sp2-a",
        text: "Create Voice product one-pager and sales enablement materials",
        completed: true,
        description:
          "Product team writes the Voice product one-pager positioning Maven's voice capabilities against IVR and competing CCaaS-native bots, and creates sales battle cards for key competitive situations. Materials are reviewed with AEs before the first Voice deals are pitched.",
      },
      {
        id: "g1-sp2-b",
        text: "Approve Proactive demo environments built by Solutions AI for accuracy",
        completed: false,
        description:
          "PMs review each Solutions AI-generated Proactive demo environment to confirm the trigger logic, campaign scenarios, and deflection metrics are accurate and on-roadmap. Any demo features that are not yet shipped are flagged and either removed or scheduled.",
      },
      {
        id: "g1-sp2-c",
        text: "Publish On-Prem deployment documentation and security questionnaire library",
        completed: false,
        description:
          "Product team publishes comprehensive On-Prem deployment docs covering air-gapped installation, SSO configuration, RBAC, and audit logging \u2014 and builds a reusable security questionnaire library for regulated-industry procurement processes. These assets are required to move On-Prem deals through security review.",
      },
      {
        id: "g1-sp2-d",
        text: "Host internal product training for Sales and Solutions on all three new product lines",
        completed: false,
        description:
          "Product team runs training sessions for Sales AEs and Solutions engineers covering the capabilities, limitations, pricing, and competitive positioning of Voice, Proactive, and On-Prem. Training is recorded and added to the internal knowledge base for ongoing reference.",
      },
    ],
  },
  {
    id: "g3-s2",
    stepNumber: 2,
    owner: "ai",
    ownerName: "Marketing AI",
    functionTab: "marketing",
    theme: "Demand Generation",
    title: "Generate 1,000 MQLs for Voice, Proactive, and On-Prem",
    target: "1,000 MQLs specifically for the three new product lines",
    description:
      "Marketing AI runs targeted, product-specific demand generation campaigns educating the market on Maven\u2019s new capabilities.",
    completed: true,
    goalIds: ["goal-3"],
    subSteps: [
      {
        id: "g3-s2-a",
        text: "Voice Blog Post Series (6-part series targeting 300 MQLs \u2014 CCaaS buyers)",
        completed: true,
        description:
          "Marketing AI generates a 6-part blog series targeting CCaaS buyers and call center leaders, covering voice AI use cases, integration guides, and ROI frameworks. Each post is optimized for high-intent keywords and gated to capture MQL conversions.",
      },
      {
        id: "g3-s2-b",
        text: "Proactive Video Release (3-part video series targeting 250 MQLs)",
        completed: true,
        description:
          "Marketing AI scripts a 3-part video series demonstrating Proactive's trigger-based outreach, campaign scheduling, and deflection impact. Videos are distributed across LinkedIn, YouTube, and email nurture sequences to capture 250 product-specific MQLs.",
      },
      {
        id: "g3-s2-c",
        text: "SEO Targeting for On-Prem (regulated-industry keyword strategy targeting 200 MQLs)",
        completed: false,
        description:
          "Marketing AI develops a regulated-industry keyword strategy targeting government, healthcare, and FSI buyers searching for on-premises AI deployment, air-gapped solutions, and HIPAA/FedRAMP-compliant support automation. The strategy targets 200 MQLs from organic search.",
      },
      {
        id: "g3-s2-d",
        text: "Paid Campaign Amplification (vertical-specific paid targeting 250 MQLs)",
        completed: false,
        description:
          "Marketing AI creates vertical-specific paid campaigns on Google and LinkedIn targeting Voice buyers in CCaaS, Proactive buyers in high-volume SaaS, and On-Prem buyers in regulated industries. Campaigns are continuously optimized for CPL and lead quality.",
      },
    ],
  },
  // Marketing Team step (fabricated)
  {
    id: "g3-sm1",
    stepNumber: 2,
    owner: "team",
    ownerName: "Marketing Team",
    functionTab: "marketing",
    theme: "Demand Generation",
    title: "Launch Voice, Proactive, and On-Prem GTM Campaigns",
    target: "Execute product-line campaigns to drive 1,000 new product MQLs",
    description:
      "The Marketing team owns go-to-market execution for the three new product lines \u2014 coordinating video production for Proactive releases, managing SEO content publishing, and running product-specific paid campaigns. Human marketers ensure each campaign is positioned correctly for its target buyer persona and vertical.",
    completed: false,
    goalIds: ["goal-3"],
    subSteps: [
      {
        id: "g3-sm1-a",
        text: "Produce and publish Voice blog series (6 parts) with SEO team",
        completed: true,
        description:
          "Marketing team works with AI-generated drafts and adds customer quotes, product screenshots, and editorial polish before publishing each installment of the Voice blog series. The series targets CCaaS buyers and call center leaders searching for AI voice deflection.",
      },
      {
        id: "g3-sm1-b",
        text: "Coordinate Proactive video production and multi-channel distribution",
        completed: false,
        description:
          "Marketing manages video production vendors to bring the AI-scripted Proactive video series to life, then distributes across LinkedIn, YouTube, and email nurture sequences. Each video is gated to capture MQLs and matched to a nurture track.",
      },
      {
        id: "g3-sm1-c",
        text: "Publish On-Prem landing pages and technical FAQ content for regulated industries",
        completed: false,
        description:
          "Marketing publishes SEO-optimized landing pages and detailed technical FAQ content targeting regulated-industry buyers researching on-premises AI deployment. Pages are A/B tested for conversion and linked from paid campaigns.",
      },
      {
        id: "g3-sm1-d",
        text: "Run vertical-specific paid campaigns for Voice, Proactive, and On-Prem",
        completed: false,
        description:
          "Marketing manages vertical-specific paid campaigns on Google and LinkedIn, targeting CCaaS buyers for Voice, high-volume SaaS for Proactive, and government/healthcare/FSI for On-Prem. Campaign performance is reviewed weekly with adjustments to budget allocation and creative.",
      },
    ],
  },
  {
    id: "g3-s3",
    stepNumber: 3,
    owner: "ai",
    ownerName: "Sales AI",
    functionTab: "sales",
    theme: "Pipeline Generation",
    title: "SDR Copilot Reaching Out to Relevant Leads",
    target: "$60M+ in new product-specific pipeline",
    description:
      "Sales AI sources and sequences outreach to buyers most likely to purchase Voice, Proactive, or On-Prem.",
    completed: false,
    goalIds: ["goal-3"],
    subSteps: [
      {
        id: "g3-s3-a",
        text: "Voice Lead Sourcing (CCaaS infra accounts \u2014 Genesys/Twilio/Amazon Connect/NICE/Five9)",
        completed: true,
        description:
          "Sales AI identifies accounts with existing CCaaS infrastructure from Genesys, Twilio, Amazon Connect, NICE, and Five9 \u2014 the buyers most likely to adopt Maven Voice. Leads are enriched with telephony stack details and support volume data to personalize outreach.",
      },
      {
        id: "g3-s3-b",
        text: "Proactive Lead Sourcing (high-volume B2B SaaS with large support teams)",
        completed: true,
        description:
          "Sales AI sources leads from high-volume B2B SaaS companies with large support teams, where proactive outreach can meaningfully deflect ticket volume. Accounts are scored by support team size, ticket volume signals, and technology stack compatibility.",
      },
      {
        id: "g3-s3-c",
        text: "On-Prem Lead Sourcing (regulated industries \u2014 federal/state gov/healthcare/financial services)",
        completed: false,
        description:
          "Sales AI sources leads from regulated industries including federal and state government, healthcare systems, and financial services institutions that require on-premises deployment for data residency and compliance reasons.",
      },
      {
        id: "g3-s3-d",
        text: "Personalized Outreach at Scale (3-touch sequences reviewed by SDR)",
        completed: false,
        description:
          "Sales AI generates 3-touch outreach sequences personalized to each prospect's industry, tech stack, and pain points, then queues them for SDR review before sending. This ensures every outreach is both scalable and quality-controlled.",
      },
      {
        id: "g3-s3-e",
        text: "Sequence Management and Handoff (warm account surfacing to AEs)",
        completed: false,
        description:
          "Sales AI monitors sequence engagement metrics and surfaces warm accounts \u2014 those showing multi-touch engagement or direct replies \u2014 to AEs for immediate follow-up. The handoff includes a full engagement history and recommended next action.",
      },
    ],
  },
  {
    id: "g3-s4",
    stepNumber: 4,
    owner: "ai",
    ownerName: "Solutions AI",
    functionTab: "solutions",
    theme: "Demo Generation",
    title: "Custom Demo Generation for Voice, Proactive, and On-Prem",
    target: "Every POC for a new product gets a fully customized demo environment",
    description:
      "Solutions AI generates tailored demo environments for each prospect configured with industry use cases.",
    completed: true,
    goalIds: ["goal-3"],
    subSteps: [
      {
        id: "g3-s4-a",
        text: "Voice Demo Generation (simulates prospect\u2019s voice use case with their telephony integration)",
        completed: true,
        description:
          "Solutions AI generates Voice demo environments that simulate the prospect's actual call center use case, pre-configured with their telephony integration and top call categories. The demo lets the prospect experience Maven Voice handling their real support queries.",
      },
      {
        id: "g3-s4-b",
        text: "Proactive Demo Generation (shows proactive trigger scenarios for their support workflows)",
        completed: true,
        description:
          "Solutions AI generates Proactive demo environments showing trigger-based outreach scenarios tailored to the prospect's support workflows \u2014 including welcome sequences, usage milestone nudges, and proactive issue alerts based on their product's common failure modes.",
      },
      {
        id: "g3-s4-c",
        text: "On-Prem Demo Generation (deployment architecture diagram + security config)",
        completed: false,
        description:
          "Solutions AI generates On-Prem demo materials including a deployment architecture diagram, security configuration guide, and compliance documentation tailored to the prospect's regulatory environment. These artifacts replace weeks of manual solution architecture work.",
      },
      {
        id: "g3-s4-d",
        text: "Demo Refresh Loop (continuous improvement from engineer feedback)",
        completed: false,
        description:
          "Solutions AI continuously refines demo environments based on Solutions engineer feedback after each live demo, incorporating objections heard, features requested, and competitive comparisons that surfaced. This creates a compounding improvement loop for demo quality.",
      },
    ],
  },
  {
    id: "g3-s5",
    stepNumber: 5,
    owner: "team",
    ownerName: "Sales Team",
    functionTab: "sales",
    theme: "Deal Closing",
    title: "Close New Product Deals",
    target: "$7.5M+ in net new ARR from Voice, Proactive, and On-Prem",
    description:
      "The Sales team drives new product deals to close using AI-generated demos, ROI models, and competitive briefs.",
    completed: false,
    goalIds: ["goal-3"],
    subSteps: [
      {
        id: "g3-s5-a",
        text: "Voice Deal Closures ($4M target \u2014 enterprise CCaaS accounts, $150K\u2013$500K ACV)",
        completed: true,
        description:
          "Sales team targets $4M in Voice ARR from enterprise accounts with existing CCaaS infrastructure, with deal sizes ranging from $150K to $500K ACV. AEs leverage AI-generated Voice demos and telephony integration briefs to accelerate technical evaluation.",
      },
      {
        id: "g3-s5-b",
        text: "Proactive Deal Closures ($2M target \u2014 high-volume SaaS, $50K\u2013$200K ACV)",
        completed: true,
        description:
          "Sales team targets $2M in Proactive ARR from high-volume SaaS companies, with deal sizes from $50K to $200K ACV. Proactive's ROI story is built around ticket deflection before tickets are created, which resonates strongly with support leaders under headcount pressure.",
      },
      {
        id: "g3-s5-c",
        text: "On-Prem Deal Closures ($1.5M target \u2014 regulated industries, $200K\u2013$1M ACV)",
        completed: false,
        description:
          "Sales team targets $1.5M in On-Prem ARR from regulated industries with deal sizes from $200K to $1M ACV. These deals have longer sales cycles but higher ACV and multi-year commitments, requiring dedicated procurement support and security review acceleration.",
      },
      {
        id: "g3-s5-d",
        text: "Bundle Pricing Strategy (multi-product accounts)",
        completed: false,
        description:
          "Sales team implements bundle pricing for multi-product accounts, offering discounts when customers purchase two or more of Voice, Proactive, and On-Prem together. Bundle pricing increases initial ACV and creates stickier, harder-to-displace deployments.",
      },
    ],
  },
  {
    id: "g3-s6",
    stepNumber: 6,
    owner: "ai",
    ownerName: "CX AI",
    functionTab: "cx",
    theme: "Upsell & Expansion",
    title: "Find and Drive Expansion Plan for Voice and Proactive",
    target: "Identify Voice and Proactive expansion across existing customer base",
    description:
      "CX AI scans existing customers for Voice and Proactive expansion eligibility, generates plans, and initiates proactive outreach.",
    completed: false,
    goalIds: ["goal-3"],
    subSteps: [
      {
        id: "g3-s6-a",
        text: "$300K Voice via Genesys already in Value Engineering \u2014 AI to draft closing brief for Daniel Stern",
        completed: true,
        customerName: "Thumbtack",
        description:
          "Thumbtack's $300K Voice expansion via Genesys is already in Value Engineering stage. CX AI drafts a closing brief for Daniel Stern summarizing the technical validation results, projected deflection rates, and recommended contract terms to move to signature.",
      },
      {
        id: "g3-s6-b",
        text: "Twilio/Zendesk Talk in place; Voice expansion in Meeting Set \u2014 AI to generate telephony readiness brief for Derek Ford",
        completed: true,
        customerName: "ClickUp",
        description:
          "ClickUp already has Twilio and Zendesk Talk in their stack, making Voice expansion straightforward. CX AI generates a telephony readiness brief for Derek Ford showing how Maven Voice integrates with their existing infrastructure and projected call deflection impact.",
      },
      {
        id: "g3-s6-c",
        text: "$150K Voice across departments \u2014 AI to generate department-by-department deflection model",
        completed: true,
        customerName: "Fairfax County",
        description:
          "Fairfax County can expand Voice to multiple departments for $150K incremental ARR. CX AI generates a department-by-department deflection model showing projected call volume reduction and citizen experience improvement for each department considering expansion.",
      },
      {
        id: "g3-s6-d",
        text: "$50K Voice in Discovery \u2014 AI to generate legal-industry Voice ROI model",
        completed: false,
        customerName: "Clio",
        description:
          "Clio has a $50K Voice expansion opportunity in Discovery stage. CX AI generates a legal-industry Voice ROI model for the account team, modeling call deflection rates for common legal support queries like billing, case status, and document requests.",
      },
      {
        id: "g3-s6-e",
        text: "$73K Voice in Meeting Set \u2014 AI to generate product-specific pitch for Derek Ford",
        completed: false,
        customerName: "Exclaimer",
        description:
          "Exclaimer has a $73K Voice expansion in Meeting Set stage. CX AI generates a product-specific pitch for Derek Ford detailing how Maven Voice handles Exclaimer's top call categories and integrates with their existing email signature management support workflow.",
      },
      {
        id: "g3-s6-f",
        text: "$75K Voice \u2014 AI to generate HIPAA-framed voice deployment brief",
        completed: false,
        customerName: "Bamboo Health",
        description:
          "Bamboo Health is a $75K Voice expansion opportunity requiring healthcare compliance. CX AI generates a HIPAA-framed voice deployment brief covering PHI handling safeguards, BAA requirements, and audit logging to satisfy Bamboo Health's compliance team.",
      },
      {
        id: "g3-s6-g",
        text: "$50K voice upsell in Testing/Scoping \u2014 AI to surface blockers and generate test checklist",
        completed: false,
        customerName: "TiVo",
        description:
          "TiVo has a $50K Voice upsell currently in Testing/Scoping. CX AI surfaces any technical blockers and generates a Voice test checklist covering call routing, handoff scenarios, and persona configuration to accelerate TiVo's evaluation process.",
      },
      {
        id: "g3-s6-h",
        text: "$50K Proactive in Testing/Scoping \u2014 AI to generate proactive campaign design for health/wellness workflows",
        completed: false,
        customerName: "Practice Better",
        description:
          "Practice Better has a $50K Proactive expansion in Testing/Scoping. CX AI generates proactive campaign designs tailored to health and wellness practitioner workflows \u2014 including appointment reminder triggers, onboarding nudges, and usage milestone outreach.",
      },
      {
        id: "g3-s6-i",
        text: "Post-resolve survey entry point for Proactive \u2014 AI to draft pitch framed around their specific feature request",
        completed: false,
        customerName: "Runway",
        description:
          "Runway has expressed interest in post-resolve surveys, which is a natural entry point for Proactive. CX AI drafts a pitch framed around Runway's specific feature request, showing how Proactive surveys integrate with their existing Maven deployment.",
      },
      {
        id: "g3-s6-j",
        text: "Seasonal high-volume ideal for proactive \u2014 AI to generate use case brief for John Bowman",
        completed: false,
        customerName: "Handshake",
        description:
          "Handshake's seasonal high-volume support spikes make them ideal for Proactive. CX AI generates a use case brief for John Bowman showing how proactive outreach during peak recruiting seasons can deflect 30-40% of anticipated ticket volume.",
      },
    ],
  },
  {
    id: "g3-s8",
    stepNumber: 8,
    owner: "team",
    ownerName: "CX Team",
    functionTab: "cx",
    theme: "Upsell & Expansion",
    title: "Close Expansions",
    target: "$3M in expansion ARR from Voice and Proactive",
    description:
      "CX team closes expansion deals using AI-prepared materials \u2014 delivering human relationship and negotiation to get contracts signed.",
    completed: false,
    goalIds: ["goal-3"],
    subSteps: [
      {
        id: "g3-s8-a",
        text: "Expansion Outreach Execution (CX AI-drafted personalized outreach)",
        completed: true,
        description:
          "CX team executes expansion outreach using AI-drafted personalized emails and LinkedIn messages, adding relationship context and timing each outreach to coincide with the customer's business cycle or upcoming renewal.",
      },
      {
        id: "g3-s8-b",
        text: "Demo-Led Expansion Meetings (co-present AI custom demos)",
        completed: true,
        description:
          "CX team co-presents AI-generated custom demos with Solutions engineers, adding customer relationship context and business-case framing that turns a product demo into a strategic expansion conversation.",
      },
      {
        id: "g3-s8-c",
        text: "Commercials and Negotiation (bundle proposals + contract comparisons)",
        completed: true,
        description:
          "CX team negotiates expansion commercials using AI-generated bundle proposals and contract comparisons, ensuring each deal maximizes ARR while offering the customer compelling multi-product value.",
      },
      {
        id: "g3-s8-d",
        text: "Contract Execution (AI implementation timelines)",
        completed: false,
        description:
          "CX team drives contract execution using AI-generated implementation timelines that give the customer confidence in time-to-value. Timelines include integration milestones, training schedules, and go-live criteria.",
      },
      {
        id: "g3-s8-e",
        text: "Voice Target: $2M (Thumbtack $300K priority/Fairfax $150K/ClickUp/Clio/Exclaimer/Bamboo/TiVo)",
        completed: false,
        description:
          "CX team targets $2M in Voice expansion ARR across seven accounts, with Thumbtack ($300K) and Fairfax County ($150K) as the highest-priority deals. Each account has a tailored expansion plan and demo ready for the CX team to execute.",
      },
      {
        id: "g3-s8-f",
        text: "Proactive Target: $1M (Practice Better $50K/Runway/Handshake)",
        completed: false,
        description:
          "CX team targets $1M in Proactive expansion ARR across three accounts, with Practice Better ($50K) as the most advanced opportunity. Each account's Proactive pitch is tied to their specific support workflow and seasonal volume patterns.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Exported business plan
// ---------------------------------------------------------------------------

export const businessGoals: BusinessGoal[] = [
  {
    id: "goal-1",
    number: 1,
    title: "Achieve $25M ARR in Net New Customer Bookings",
    target: "$25M ARR",
    description:
      "Drive net new customer acquisition across all product lines through AI-powered demand generation, pipeline acceleration, and deal execution.",
    steps: goal1Steps,
  },
  {
    id: "goal-2",
    number: 2,
    title: "Achieve Net Revenue Retention of 120%",
    target: "120% NRR",
    description:
      "Expand and retain existing customers through proactive health monitoring, implementation delivery, and AI-driven upsell identification.",
    steps: goal2Steps,
  },
  {
    id: "goal-3",
    number: 3,
    title: "Generate 30% of Revenue from New Products (Voice, Proactive, On-Prem)",
    target: "30% New Product Revenue",
    description:
      "Accelerate adoption of Voice, Proactive, and On-Prem product lines through targeted go-to-market, expansion selling, and product delivery.",
    steps: goal3Steps,
  },
];

// ---------------------------------------------------------------------------
// Utility helpers
// ---------------------------------------------------------------------------

/** Get all steps assigned to a given function tab. */
export function getStepsForFunction(functionTab: FunctionTab): { goal: BusinessGoal; step: Step }[] {
  const results: { goal: BusinessGoal; step: Step }[] = [];
  for (const goal of businessGoals) {
    for (const step of goal.steps) {
      // Skip mirror steps — they exist only for the business-goals view
      if (step.functionTab === functionTab && !step.isMirror) {
        results.push({ goal, step });
      }
    }
  }
  return results;
}

/** Compute completion stats for a goal or set of steps. */
export function computeCompletion(steps: Step[]): { completed: number; total: number; percent: number } {
  let completed = 0;
  let total = 0;
  for (const step of steps) {
    for (const sub of step.subSteps) {
      total++;
      if (sub.completed) completed++;
    }
  }
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, percent };
}
