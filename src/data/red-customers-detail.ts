export interface CustomerOverviewField {
  field: string;
  value: string;
}

export interface GongCall {
  date: string;
  title: string;
  duration: string;
  keyPoints: string;
}

export interface LinearIssue {
  id: string;
  title: string;
  status: string;
  priority: string;
  assignee: string;
}

export interface RedCustomerDetail {
  id: string;
  name: string;
  arr: string;
  overview: CustomerOverviewField[];
  gongCalls: GongCall[];
  gongCallsNote?: string;
  linearIssues: LinearIssue[];
  linearIssuesNote?: string;
  analysis: string;
  immediateActions: string[];
}

export const redCustomerDetails: RedCustomerDetail[] = [
  {
    id: "fairfax",
    name: "Fairfax County Public Schools",
    arr: "$195,000",
    overview: [
      { field: "ARR", value: "$195,000" },
      { field: "Segment", value: "Strategic" },
      { field: "Health Score", value: "Red (was Yellow)" },
      { field: "Usage Score", value: "Red" },
      { field: "Fit Score", value: "58" },
      { field: "Owner", value: "Ben Sisk" },
      { field: "CX Owner", value: "Daniel Stern" },
      { field: "Contract", value: "Dec 2, 2025 → Dec 1, 2026" },
      { field: "Go Live", value: "Not yet live" },
      { field: "Last Activity", value: "Feb 20, 2026" },
      { field: "Onboarding Status", value: "Off Track — Blocked by Tech" },
    ],
    gongCalls: [
      {
        date: "Feb 17, 2026",
        title: "Derek / Matt Voice Sync",
        duration: "10 min",
        keyPoints:
          "Planning two separate phone numbers for business vs. after-hours via Freshcaller; awaiting Dave's approval. Go-live date still TBD.",
      },
      {
        date: "Feb 2, 2026",
        title: "Maven | FCPS Synch",
        duration: "12 min",
        keyPoints:
          "Final steps discussed; go-live target was Wednesday; CIO is a key stakeholder. Working session scheduled.",
      },
      {
        date: "Jan 29, 2026",
        title: "Maven | FCPS Synch for Go Live",
        duration: "16 min",
        keyPoints:
          "Ticket creation, PII redaction in transcripts, language support. Duke Ademonis introduced as new escalation contact.",
      },
      {
        date: "Jan 23, 2026",
        title: "Maven | FCPS Synch",
        duration: "15 min",
        keyPoints:
          "Go-live postponed due to storm. Testing going well; tickets generating correctly.",
      },
      {
        date: "Jan 15, 2026",
        title: "FCPS | Maven Quick Sync",
        duration: "21 min",
        keyPoints:
          "Chat label changes, user auth, KB scope narrowed to tech support. Chat escalation being addressed at high level.",
      },
      {
        date: "Jan 9, 2026",
        title: "FCPS | Maven AGI Training",
        duration: "57 min",
        keyPoints:
          "Training session on Ask Maven, Insights, KB customization, simulator. Cheat sheet to be provided.",
      },
    ],
    linearIssues: [
      { id: "SOLN-2788", title: "Fairfax Voice Go-Live - Phonic Blockers", status: "In Review", priority: "High", assignee: "Matt Starr" },
      { id: "SOLN-2438", title: "Bug: Adjust fields in Freshservice ticket creation form", status: "Needs Information", priority: "High", assignee: "Daniel Stern" },
      { id: "CX-4169", title: "Bug: Adjust fields in Freshservice Ticket Creation Form", status: "Customer to Action", priority: "High", assignee: "Mark Smith" },
      { id: "CX-4072", title: "Go Live!", status: "Todo", priority: "High", assignee: "—" },
      { id: "CX-4071", title: "Final Setup and Tuning for Go Live!", status: "Todo", priority: "High", assignee: "—" },
      { id: "CX-4068", title: "Tune escalation paths", status: "Todo", priority: "High", assignee: "Mark Smith" },
      { id: "CX-4066", title: "Update persona v2", status: "Todo", priority: "High", assignee: "Mark Smith" },
      { id: "CX-4064", title: "Define actions/escalations", status: "Todo", priority: "High", assignee: "Mark Smith" },
      { id: "SOLN-3271", title: "Deploy Maven Voice agent via Freshcaller", status: "Todo", priority: "High", assignee: "Matt Starr" },
      { id: "SOLN-3270", title: "Deploy web chat widget on FCPS portal", status: "Todo", priority: "High", assignee: "Matt Starr" },
      { id: "SOLN-3268", title: "Connect to SIS/Employee database for verification", status: "Todo", priority: "High", assignee: "Matt Starr" },
      { id: "SOLN-3267", title: "Implement Employee ID → MFA → proceed verification flow", status: "Todo", priority: "High", assignee: "Matt Starr" },
      { id: "SOLN-3265", title: "Enable live agent transfer through Freshcaller", status: "Todo", priority: "High", assignee: "Matt Starr" },
      { id: "SOLN-3264", title: "Build conversation sync back to Freshcaller for ALL calls", status: "Todo", priority: "High", assignee: "Matt Starr" },
      { id: "SOLN-3263", title: "Configure SIP forwarding from Freshcaller to Maven Voice", status: "Todo", priority: "High", assignee: "Matt Starr" },
      { id: "SOLN-3257–3259", title: "Freshservice ticketing integration (3 issues)", status: "Todo", priority: "High", assignee: "Matt Starr" },
      { id: "SOLN-2176", title: "Connect user auth into Maven surface", status: "Todo", priority: "High", assignee: "Ryan Gemos" },
      { id: "SOLN-2173", title: "Connect/Upload Knowledge Sources", status: "Todo", priority: "High", assignee: "Ryan Gemos" },
      { id: "+ 23 more", title: "Medium/High issues", status: "Various", priority: "Medium/High", assignee: "Various" },
    ],
    analysis:
      "FCPS is Maven's largest red customer at $195K ARR and is still not live despite a contract start in December 2025. The blocker is technical — voice infrastructure (SIP forwarding, Freshcaller routing, Vonage integration) is complex and has repeatedly pushed the go-live date. The team has been extremely active (21 Gong calls in 90 days), which is positive, but the sheer volume of open issues (41 total) suggests scope creep and underestimated complexity. Health declining from Yellow → Red is a warning sign given the $195K at stake. The CIO is a stakeholder — missed go-live expectations at this level create executive relationship risk.",
    immediateActions: [
      "Unblock SOLN-2788 (Phonic Blockers) — this is the single Voice go-live blocker",
      "Resolve CX-4169 ticket creation bug (currently Customer to Action — is FCPS actually acting on it?)",
      "Set a firm go-live date with executive alignment",
    ],
  },
  {
    id: "tripadvisor",
    name: "Tripadvisor",
    arr: "$150,000",
    overview: [
      { field: "ARR", value: "$150,000" },
      { field: "Segment", value: "Strategic" },
      { field: "Health Score", value: "Red" },
      { field: "Usage Score", value: "Red" },
      { field: "Fit Score", value: "72" },
      { field: "Owner", value: "Derek Ford" },
      { field: "CX Owner", value: "Derek Ford" },
      { field: "Contract", value: "May 15, 2024 → May 14, 2026" },
      { field: "Go Live", value: "May 15, 2024" },
      { field: "Last Activity", value: "May 18, 2026" },
      { field: "Onboarding Status", value: "—" },
    ],
    gongCalls: [
      {
        date: "Feb 23, 2026",
        title: "Maven Roadmap & Architecture Deep Dive",
        duration: "62 min",
        keyPoints:
          "Target of 80% automation by 2026; exploring concierge-style service across brands; interested in Jira integration and reporting features.",
      },
      {
        date: "Feb 18, 2026",
        title: "Weekly Sync",
        duration: "31 min",
        keyPoints:
          "Auto KB syncing, larger editing window, enhanced CSAT. Impressive containment rates achieved. Exploring further automation.",
      },
      {
        date: "Feb 4, 2026",
        title: "Weekly Sync",
        duration: "12 min",
        keyPoints:
          "Successful Salesforce API migration completed. Reviewing resolution rates. Discussing Viator expansion.",
      },
      {
        date: "Jan 14, 2026",
        title: "Weekly Sync",
        duration: "10 min",
        keyPoints:
          "Data access challenges from Tripadvisor's internal restructuring. Snowflake reporting gap. Scheduling deeper Maven dive with John.",
      },
      {
        date: "Jan 7, 2026",
        title: "Weekly Sync",
        duration: "22 min",
        keyPoints:
          "Salesforce migration progress; containment rate challenges from lack of user profiles; proposed journey mapping session.",
      },
    ],
    linearIssues: [
      { id: "CX-4252", title: "Bug: Chat crashes due to hard coded 24hr Salesforce live chat limit", status: "Todo", priority: "High", assignee: "Derek Ford" },
      { id: "CX-4253", title: "Bug: User still sees 'speaking with agent' when agent inactive", status: "In Review", priority: "High", assignee: "Derek Ford" },
      { id: "CX-4208", title: "Bug: Start/End messages missing from Chat (SF LAH)", status: "In Progress", priority: "High", assignee: "Derek Ford" },
      { id: "CX-4204", title: "Bug: User sending certain attachments ends chat", status: "Todo", priority: "High", assignee: "Derek Ford" },
      { id: "CX-4209", title: "Bug: End LAH messages are dropped", status: "Todo", priority: "High", assignee: "Derek Ford" },
      { id: "CX-3224", title: "Feat Req: Typing indicators for user & agent during live chat", status: "Todo", priority: "High", assignee: "Derek Ford" },
      { id: "CX-4203", title: "Feat Req: Better handling for file attachments with long names", status: "Todo", priority: "High", assignee: "Derek Ford" },
      { id: "CX-1763", title: "Implement Signed User Data", status: "Blocked", priority: "Medium", assignee: "Derek Ford" },
      { id: "CX-873", title: "Tune handoff differently for different integrations", status: "In Progress", priority: "Medium", assignee: "Derek Ford" },
      { id: "CX-2835", title: "SF MIAW Config Questions", status: "In Progress", priority: "Medium", assignee: "Derek Ford" },
      { id: "+ 12 more", title: "Medium/Low issues", status: "Various", priority: "Medium/Low", assignee: "Various" },
    ],
    analysis:
      "Tripadvisor is a paradox — the Gong data shows active, constructive engagement (deep dives, roadmap discussions, ambitious 80% automation target) yet the health score is Red. The likely culprit is the Salesforce live chat integration, which has a cluster of bugs causing chat crashes, dropped messages, and broken agent handoff states. These are UX-breaking issues that would tank containment rates and customer satisfaction. Contract expires in May 2026 — only ~2.5 months away — making this a critical renewal risk. Derek Ford owns both AE and CX, creating a single point of failure for a $150K strategic account.",
    immediateActions: [
      "Fix CX-4252 (chat crash) and CX-4208/CX-4209 (missing messages) as P0 before renewal conversations",
      "Escalate CX-1763 (Signed User Data - Blocked) — unknown blocker on a medium-priority item",
      "Bring in a second stakeholder so Derek isn't the sole owner of this account",
      "Begin renewal conversation now given May 2026 expiry",
    ],
  },
  {
    id: "rockstar",
    name: "Rockstar Automations",
    arr: "$100,001",
    overview: [
      { field: "ARR", value: "$100,001" },
      { field: "Segment", value: "Unknown" },
      { field: "Health Score", value: "Red" },
      { field: "Usage Score", value: "Red" },
      { field: "Fit Score", value: "27" },
      { field: "Owner", value: "Brian McCool" },
      { field: "CX Owner", value: "Derek Ford" },
      { field: "Contract", value: "Jun 30, 2025 → Jun 29, 2026" },
      { field: "Go Live", value: "Not yet live" },
      { field: "Last Activity", value: "Apr 27, 2026" },
      { field: "Onboarding Status", value: "Off Track — Blocked by Customer" },
    ],
    gongCalls: [
      {
        date: "Jan 12, 2026",
        title: "Weekly Implementation Update",
        duration: "5 min",
        keyPoints:
          "Internal discussion only — Gong rollout question for CX team. No Rockstar on call.",
      },
      {
        date: "Jan 6, 2026",
        title: "Rockstar:Maven Connect",
        duration: "41 min",
        keyPoints:
          "Critical: Rockstar decided to launch with human staff instead of AI due to FCC compliance and reliability concerns. Maven proposed 2–3 week forward-deployed engineering model, but customer opted out. Left door open for future AI collaboration.",
      },
      {
        date: "Dec 29, 2025",
        title: "Weekly Implementation Update",
        duration: "4 min",
        keyPoints: "Holiday check-in only. Rockstar absent.",
      },
      {
        date: "Dec 15, 2025",
        title: "Weekly Implementation Update",
        duration: "9 min",
        keyPoints: "No weekend testing; go-live requirements still outstanding.",
      },
      {
        date: "Dec 1, 2025",
        title: "Weekly Implementation Update",
        duration: "53 min",
        keyPoints:
          "Golden Agent user authentication issues; web SDK passing problems; live agent availability configuration broken.",
      },
    ],
    linearIssues: [],
    linearIssuesNote: "No open Linear issues found.",
    analysis:
      "This account is in serious trouble. Rockstar explicitly chose to launch with humans instead of Maven AI due to FCC compliance concerns and reliability issues with the AI-driven system. With a fit score of 27 (lowest of all red accounts) and no open issues being tracked, there's a real question of whether this customer is still actively implementing or has quietly shelved the project. No Gong calls since early January 2026 (6+ weeks of silence) and no go-live in sight after 7+ months under contract.",
    immediateActions: [
      "Urgent account check-in — is Rockstar still planning to deploy Maven?",
      "Clarify the FCC compliance concern and whether Maven can address it",
      "With a 27 fit score, evaluate honestly whether this is a product-market fit problem",
      "Contract expires Jun 29, 2026 — churn risk is high without intervention now",
    ],
  },
  {
    id: "vangst",
    name: "Vangst",
    arr: "$62,769",
    overview: [
      { field: "ARR", value: "$62,769" },
      { field: "Segment", value: "Midmarket" },
      { field: "Health Score", value: "Red" },
      { field: "Usage Score", value: "Red" },
      { field: "Fit Score", value: "47" },
      { field: "Owner", value: "John Bowman" },
      { field: "CX Owner", value: "John Bowman" },
      { field: "Contract", value: "Oct 31, 2025 → Dec 31, 2027" },
      { field: "Go Live", value: "Not yet live" },
      { field: "Last Activity", value: "May 14, 2026" },
      { field: "Onboarding Status", value: "Off Track — Blocked by Customer" },
    ],
    gongCalls: [
      {
        date: "Nov 18, 2025",
        title: "Maven <> Vangst",
        duration: "30 min",
        keyPoints:
          "HubSpot OAuth issues; Google Drive batch selection broken; missing scopes and pipeline configs. Planned follow-up with dev.",
      },
      {
        date: "Oct 2, 2025",
        title: "Vangst Custom Demo",
        duration: "56 min",
        keyPoints:
          "Strong interest in proactive messaging and internal support; discussed Pickle platform integration and pricing.",
      },
      {
        date: "Sep 23, 2025",
        title: "Vangst Intro",
        duration: "38 min",
        keyPoints:
          "Discussed automating high-volume worker support via text. Requested customized demo. Potential staffing agency case study.",
      },
    ],
    gongCallsNote: "Last Gong call was Nov 18, 2025 — over 3 months ago with no recorded activity since.",
    linearIssues: [
      { id: "SOLN-3387", title: "Feature Request: Custom integration with Deputy", status: "Blocked", priority: "High", assignee: "—" },
      { id: "SOLN-3386", title: "Feature Request: Custom integration with ATS platforms", status: "Blocked", priority: "High", assignee: "—" },
      { id: "CX-4356", title: "Feature Request: Custom integration with Deputy", status: "In Progress", priority: "High", assignee: "—" },
      { id: "CX-4357", title: "Feature Request: Custom integration with ATS platforms", status: "In Progress", priority: "High", assignee: "—" },
      { id: "CX-3650", title: "Ensure KB tagging structures are configured correctly", status: "In Progress", priority: "High", assignee: "John Bowman" },
      { id: "CX-3652", title: "Develop and create persona v1", status: "In Progress", priority: "High", assignee: "John Bowman" },
      { id: "SOLN-1454", title: "Config: Enable Hubspot Ticket Creation", status: "In Progress", priority: "High", assignee: "Ryan Gemos" },
      { id: "SOLN-1443", title: "Config: Connect Hubspot Knowledge", status: "In Progress", priority: "High", assignee: "Ryan Gemos" },
      { id: "CX-3648", title: "Build and Deliver Onboarding Project Plan", status: "Customer to Action", priority: "High", assignee: "John Bowman" },
      { id: "CX-3659", title: "Go Live!", status: "Todo", priority: "High", assignee: "Ryan Gemos" },
      { id: "SOLN-1446", title: "Config: Connect User Auth into Maven", status: "Todo", priority: "High", assignee: "Ryan Gemos" },
      { id: "SOLN-1452", title: "Config: SMS Deployment", status: "Todo", priority: "High", assignee: "—" },
      { id: "SOLN-1451", title: "Feature Request: Pikl API Integration", status: "Todo", priority: "High", assignee: "Ryan Gemos" },
      { id: "+ 24 more", title: "High/Medium issues", status: "Various", priority: "High/Medium", assignee: "Various" },
    ],
    analysis:
      "Vangst is a heavy integration play that has stalled badly. The deal requires Pikl API, HubSpot, Heymarket SMS, Deputy, and ATS platforms — an ambitious scope for a $62K ARR customer. The two Deputy and ATS integration tickets are Blocked with no assigned owner, which is likely the root cause of the 'Blocked by Customer' status. No Gong calls in 3+ months is a major red flag during active onboarding. John Bowman serving as both owner and CX creates a bottleneck and vacation/absence risk across 25+ open tickets.",
    immediateActions: [
      "Re-engage Vangst — schedule a call immediately; 3 months of silence is unacceptable mid-onboarding",
      "Assign owners to SOLN-3387 and SOLN-3386 (Blocked, no assignee)",
      "Clarify 'Blocked by Customer' — what is Vangst supposed to be doing and are they doing it?",
      "Consider scope reduction — prioritize SMS + HubSpot for a partial go-live rather than waiting for all integrations",
    ],
  },
  {
    id: "next-ventures",
    name: "NEXT Ventures",
    arr: "$56,000",
    overview: [
      { field: "ARR", value: "$56,000" },
      { field: "Segment", value: "SMB" },
      { field: "Health Score", value: "Red" },
      { field: "Usage Score", value: "Red" },
      { field: "Fit Score", value: "61" },
      { field: "Owner", value: "Maven AGI" },
      { field: "CX Owner", value: "Derek Ford" },
      { field: "Contract", value: "Dec 11, 2024 → Dec 10, 2025" },
      { field: "Go Live", value: "Not yet live" },
      { field: "Last Activity", value: "Jul 2, 2025" },
      { field: "Onboarding Status", value: "—" },
    ],
    gongCalls: [],
    gongCallsNote: "No Gong calls found in the database for this customer.",
    linearIssues: [],
    linearIssuesNote: "No open Linear issues found.",
    analysis:
      "This account appears to have churned. The contract expired Dec 10, 2025 — over 2.5 months ago — with no renewal recorded. The customer never went live, has had no Gong calls on record, no open Linear issues, and last activity was Jul 2, 2025 (7+ months ago). The owner is listed as 'Maven AGI' (unassigned), which suggests the account may have been orphaned. At $56K ARR, this is a meaningful loss if it hasn't been formally closed.",
    immediateActions: [
      "Confirm whether this customer has formally churned or if there is an active renewal in progress",
      "If churned, close out the account properly in Salesforce",
      "Conduct a post-mortem: never went live, no calls — was this a failed implementation or a no-show customer?",
    ],
  },
  {
    id: "domedia",
    name: "DOmedia",
    arr: "$25,000",
    overview: [
      { field: "ARR", value: "$25,000" },
      { field: "Segment", value: "SMB" },
      { field: "Health Score", value: "Red" },
      { field: "Usage Score", value: "Green" },
      { field: "Fit Score", value: "60" },
      { field: "Owner", value: "Derek Ford" },
      { field: "CX Owner", value: "Derek Ford" },
      { field: "Contract", value: "Feb 28, 2025 → Feb 27, 2026" },
      { field: "Go Live", value: "Mar 24, 2025" },
      { field: "Last Activity", value: "Jan 11, 2026" },
      { field: "Onboarding Status", value: "—" },
    ],
    gongCalls: [],
    gongCallsNote: "No Gong calls found in the database for this customer. Contract expired Feb 27, 2026 — no renewal or Gong activity visible.",
    linearIssues: [
      { id: "CX-2470", title: "Feature Request: Shared Inbox Only for Front Copilot", status: "In Progress", priority: "Medium", assignee: "Derek Ford" },
      { id: "CX-2259", title: "Bug: Front Copilot pulls HTML styling into conversation", status: "In Progress", priority: "Low", assignee: "Derek Ford" },
      { id: "CX-1970", title: "Feature Request: KB Connector for Front", status: "Todo", priority: "Medium", assignee: "Derek Ford" },
      { id: "FORGE-1289", title: "Bug: Front Copilot pulls HTML styling", status: "Todo", priority: "Low", assignee: "Ryan Gemos" },
    ],
    analysis:
      "DOmedia is an interesting outlier: Red health but Green usage — they are using the product but something else is wrong. The Front Copilot HTML styling bug (two open issues, unresolved for months) is likely degrading the experience despite active usage. No Gong calls on record and last activity was Jan 11, 2026, with the contract expiring Feb 27, 2026. This may already be a churn — or a quiet renewal candidate that nobody is actively managing. At $25K ARR it's smaller, but Derek Ford owns both AE and CX here too with minimal issue prioritization.",
    immediateActions: [
      "Verify whether the contract renewed on Feb 27, 2026 or has lapsed",
      "Fix the Front Copilot HTML styling bug — it's in two separate issue trackers with no resolution",
      "Re-engage customer: no calls + near-contract-expiry = churn risk",
    ],
  },
  {
    id: "impact",
    name: "impact.com",
    arr: "$0",
    overview: [
      { field: "ARR", value: "$0" },
      { field: "Segment", value: "Enterprise" },
      { field: "Health Score", value: "Red" },
      { field: "Usage Score", value: "Yellow" },
      { field: "Fit Score", value: "68" },
      { field: "Owner", value: "Daniel Stern" },
      { field: "CX Owner", value: "Daniel Stern" },
      { field: "Contract", value: "Mar 1, 2025 → Feb 28, 2026" },
      { field: "Go Live", value: "Mar 1, 2024" },
      { field: "Last Activity", value: "Jan 9, 2026" },
      { field: "Onboarding Status", value: "—" },
    ],
    gongCalls: [
      {
        date: "Jan 14, 2026",
        title: "Weekly Tech Review",
        duration: "6 min",
        keyPoints:
          "Confirmed termination. Impact.com is transitioning AI operations in-house. Wants LLM selection and A/B testing control. Daniel offered support during final 6 weeks of contract.",
      },
      {
        date: "Jan 9, 2026",
        title: "Impact <> Maven AGI Sync",
        duration: "13 min",
        keyPoints:
          "Yonatan confirmed contract termination to prioritize internal AI development. Layla flagged auto-renewal clause as a contractual issue for finance teams to resolve.",
      },
      {
        date: "Dec 10, 2025",
        title: "Weekly Tech Review",
        duration: "23 min",
        keyPoints:
          "BigQuery connector issue — data streaming not triggering. Backfill needed for analytics.",
      },
    ],
    linearIssues: [
      { id: "SOLN-2520", title: "Run BigQuery backfill once permissions updated", status: "Customer to Action", priority: "High", assignee: "Brendan Prestage" },
      { id: "CX-3563", title: "Configuration: Final instructions for BigQuery", status: "In Review", priority: "High", assignee: "Daniel Stern" },
      { id: "CX-429", title: "Feature Request: Insights sorting & agent table", status: "In Progress", priority: "Medium", assignee: "Derek Ford" },
      { id: "CX-1384", title: "Feature Request: GitHub Knowledge Connector", status: "In Review", priority: "Medium", assignee: "Daniel Stern" },
      { id: "SOLN-1339", title: "Question: Can we scrape ReadMe?", status: "Blocked", priority: "Low", assignee: "Daniel Stern" },
      { id: "CX-2226", title: "Feature Request: Preserve formatting in FD Copilot", status: "In Progress", priority: "Low", assignee: "Derek Ford" },
    ],
    analysis:
      "This account has formally churned. impact.com confirmed contract termination in January 2026 — they are building AI in-house and ending their reliance on external orchestration. The contract expired Feb 28, 2026. The $0 ARR reflects that this is already written off. There is still an open contractual matter around the auto-renewal clause that needs legal/finance resolution. Several open Linear issues remain that are now irrelevant given the termination — they should be closed out.",
    immediateActions: [
      "Resolve the auto-renewal clause contractual issue with impact.com's finance team",
      "Close all open Linear issues (they are no longer actionable)",
      "Conduct a win/loss analysis: Enterprise customer with 68 fit score churning to build in-house is a product differentiation concern worth investigating",
    ],
  },
];
