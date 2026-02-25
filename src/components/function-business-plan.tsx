"use client";

import { useState } from "react";
import { Sparkles, Users, CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInsightsTab } from "@/components/insights-tab-context";
import { SubStepSidebar } from "@/components/sub-step-sidebar";
import {
  getStepsForFunction,
  businessGoals,
  type FunctionTab,
  type Step,
  type SubStep,
  type BusinessGoal,
} from "@/data/business-plan";

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

interface FunctionBusinessPlanProps {
  functionTab: FunctionTab;
}

export function FunctionBusinessPlan({ functionTab }: FunctionBusinessPlanProps) {
  const entries = getStepsForFunction(functionTab);

  const [openSubStep, setOpenSubStep] = useState<{
    sub: SubStep;
    step: Step;
    goal: BusinessGoal;
  } | null>(null);

  const [statusOverrides, setStatusOverrides] = useState<Record<string, boolean>>({});
  const [textOverrides, setTextOverrides] = useState<Record<string, string>>({});

  if (entries.length === 0) return null;

  const aiEntries = entries.filter((e) => e.step.owner === "ai");
  const teamEntries = entries.filter((e) => e.step.owner === "team");

  const handleStatusChange = (subStepId: string, completed: boolean) => {
    setStatusOverrides((prev) => ({ ...prev, [subStepId]: completed }));
  };

  const handleTextChange = (subStepId: string, newText: string) => {
    setTextOverrides((prev) => ({ ...prev, [subStepId]: newText }));
  };

  const getResolvedCompleted = (sub: SubStep) => statusOverrides[sub.id] ?? sub.completed;
  const getResolvedText = (sub: SubStep) => textOverrides[sub.id] ?? sub.text;

  return (
    <>
      <section className="flex flex-col gap-4">
        {/* Two-column grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* LEFT: AI Execution */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-purple-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                AI Execution
              </span>
            </div>
            {aiEntries.length === 0 && (
              <p className="text-sm text-muted-foreground">No AI steps for this function.</p>
            )}
            {aiEntries.map(({ goal, step }) => (
              <StepCard
                key={step.id}
                step={step}
                goal={goal}
                variant="ai"
                statusOverrides={statusOverrides}
                textOverrides={textOverrides}
                onSubStepClick={(sub) => setOpenSubStep({ sub, step, goal })}
              />
            ))}
          </div>

          {/* RIGHT: Team Execution */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Users className="h-3.5 w-3.5 text-gray-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Team Execution
              </span>
            </div>
            {teamEntries.length === 0 && (
              <p className="text-sm text-muted-foreground">No team steps for this function.</p>
            )}
            {teamEntries.map(({ goal, step }) => (
              <StepCard
                key={step.id}
                step={step}
                goal={goal}
                variant="team"
                statusOverrides={statusOverrides}
                textOverrides={textOverrides}
                onSubStepClick={(sub) => setOpenSubStep({ sub, step, goal })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar */}
      {openSubStep && (
        <SubStepSidebar
          subStep={openSubStep.sub}
          step={openSubStep.step}
          goal={openSubStep.goal}
          isOpen={true}
          onClose={() => setOpenSubStep(null)}
          currentCompleted={getResolvedCompleted(openSubStep.sub)}
          currentText={getResolvedText(openSubStep.sub)}
          onStatusChange={handleStatusChange}
          onTextChange={handleTextChange}
        />
      )}
    </>
  );
}

// ---------------------------------------------------------------------------
// Step Card
// ---------------------------------------------------------------------------

function StepCard({
  step,
  goal,
  variant,
  statusOverrides,
  textOverrides,
  onSubStepClick,
}: {
  step: Step;
  goal: BusinessGoal;
  variant: "ai" | "team";
  statusOverrides: Record<string, boolean>;
  textOverrides: Record<string, string>;
  onSubStepClick: (sub: SubStep) => void;
}) {
  const { setActiveTab } = useInsightsTab();
  const isAi = variant === "ai";

  // Resolve goal labels from goalIds
  const goalChips = step.goalIds
    .map((gid) => businessGoals.find((g) => g.id === gid))
    .filter(Boolean) as BusinessGoal[];

  return (
    <div
      className={cn(
        "rounded-xl border overflow-hidden",
        isAi ? "border-purple-200 bg-purple-50" : "border-gray-200 bg-white",
      )}
    >
      {/* Card header */}
      <div className="px-5 py-4">
        <div className="flex items-start gap-3">
          {/* Owner badge */}
          {isAi ? (
            <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full bg-purple-200 border border-purple-300 px-2 py-0.5 text-[10px] font-semibold text-purple-800">
              <Sparkles className="h-3 w-3" /> AI
            </span>
          ) : (
            <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full bg-blue-50 border border-blue-200 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
              <Users className="h-3 w-3" /> Team
            </span>
          )}

          <div className="flex-1 min-w-0">
            {/* Owner name */}
            <p
              className={cn(
                "text-xs font-medium",
                isAi ? "text-purple-600" : "text-gray-500",
              )}
            >
              {step.ownerName}
            </p>

            {/* Title */}
            <h4 className="mt-0.5 text-sm font-semibold text-gray-900 leading-snug">
              {step.title}
            </h4>

            {/* Goal chips */}
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {goalChips.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActiveTab("businessgoals")}
                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-semibold text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  Goal {g.number}: {g.target}
                </button>
              ))}
            </div>

            {/* Description */}
            <p className="mt-2 text-xs leading-relaxed text-gray-500">
              {step.description}
            </p>
          </div>
        </div>
      </div>

      {/* Sub-steps */}
      <div
        className={cn(
          "border-t px-5 py-3",
          isAi ? "border-purple-200/60" : "border-gray-100",
        )}
      >
        <ul className="flex flex-col gap-1">
          {step.subSteps.map((sub) => {
            const resolved = statusOverrides[sub.id] ?? sub.completed;
            const resolvedText = textOverrides[sub.id] ?? sub.text;

            return (
              <li key={sub.id}>
                <button
                  type="button"
                  onClick={() => onSubStepClick(sub)}
                  className={cn(
                    "flex w-full items-start gap-2 rounded-lg px-2 py-1.5 text-left transition-colors",
                    "hover:bg-black/5",
                  )}
                >
                  {resolved ? (
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                  ) : (
                    <Circle
                      className={cn(
                        "mt-0.5 h-3.5 w-3.5 shrink-0",
                        isAi ? "text-purple-400/50" : "text-gray-300",
                      )}
                    />
                  )}
                  <span className="flex-1 text-xs leading-relaxed text-gray-700">
                    {sub.customerName && (
                      <span
                        className={cn(
                          "mr-1.5 inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-semibold",
                          isAi
                            ? "bg-purple-200 text-purple-800"
                            : "bg-blue-100 text-blue-700",
                        )}
                      >
                        {sub.customerName}
                      </span>
                    )}
                    {resolvedText}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
