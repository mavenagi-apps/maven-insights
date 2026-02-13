import { OkrSection } from "@/components/okr-section";
import { fluxOkrs } from "@/data/mock-flux";

export function FluxTab() {
  return (
    <div className="flex flex-col gap-6 px-10 pt-10 pb-10">
      <OkrSection
        okrs={fluxOkrs}
        chartId="flux-okrs"
        insight="Voice APIs lead at 75% but only 1 of 3 target partners is live — accelerating Papaya Pay and Thumbtack onboarding is critical to hitting the partner OKR before Q1 end."
        suggestion="Schedule dedicated onboarding sprints with Papaya Pay and Thumbtack engineering teams this week to unblock voice integration milestones"
        linearTeam="PRODENG"
      />
    </div>
  );
}
