"use client";

import { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Target,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useInsightsTab } from "@/components/insights-tab-context";
import { SubStepSidebar } from "@/components/sub-step-sidebar";
import {
  businessGoals,
  computeCompletion,
  type BusinessGoal,
  type Step,
  type SubStep,
} from "@/data/business-plan";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const GOAL_ACCENT: Record<string, { border: string; badge: string; bar: string; glow: string }> = {
  "goal-1": {
    border: "border-purple-500/30",
    badge: "from-purple-600 to-violet-600",
    bar: "bg-gradient-to-r from-purple-500 to-violet-500",
    glow: "shadow-purple-500/20",
  },
  "goal-2": {
    border: "border-emerald-500/30",
    badge: "from-emerald-600 to-teal-600",
    bar: "bg-gradient-to-r from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
  },
  "goal-3": {
    border: "border-amber-500/30",
    badge: "from-amber-600 to-orange-600",
    bar: "bg-gradient-to-r from-amber-500 to-orange-500",
    glow: "shadow-amber-500/20",
  },
};

// ---------------------------------------------------------------------------
// BusinessGoalsTab
// ---------------------------------------------------------------------------

export function BusinessGoalsTab() {
  const [openSubStep, setOpenSubStep] = useState<{
    sub: SubStep;
    step: Step;
    goal: BusinessGoal;
  } | null>(null);
  const [statusOverrides, setStatusOverrides] = useState<Record<string, boolean>>({});
  const [textOverrides, setTextOverrides] = useState<Record<string, string>>({});

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
      <div className="flex flex-col gap-10 px-10 pt-10 pb-10">
        {businessGoals.map((goal) => (
          <GoalSection
            key={goal.id}
            goal={goal}
            statusOverrides={statusOverrides}
            textOverrides={textOverrides}
            onSubStepClick={(sub, step) => setOpenSubStep({ sub, step, goal })}
          />
        ))}
      </div>

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
// Goal Section (hero card + steps)
// ---------------------------------------------------------------------------

function GoalSection({
  goal,
  statusOverrides,
  textOverrides,
  onSubStepClick,
}: {
  goal: BusinessGoal;
  statusOverrides: Record<string, boolean>;
  textOverrides: Record<string, string>;
  onSubStepClick: (sub: SubStep, step: Step) => void;
}) {
  const accent = GOAL_ACCENT[goal.id] ?? GOAL_ACCENT["goal-1"];
  const { completed, total, percent } = computeCompletion(goal.steps);
  const completedSteps = goal.steps.filter((s) => s.completed).length;

  return (
    <section className="flex flex-col gap-4">
      {/* Hero Card */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border bg-gradient-to-br from-slate-900 to-slate-800 p-8",
          accent.border,
          "shadow-xl",
          accent.glow,
        )}
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-5">
          {/* Top row: badge + counts */}
          <div className="flex items-start justify-between">
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-lg font-black text-white shadow-lg",
                accent.badge,
              )}
            >
              {goal.number}
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                {completedSteps}/{goal.steps.length} steps
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                {completed}/{total} sub-steps
              </span>
            </div>
          </div>

          {/* Title + target */}
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {goal.title}
            </h2>
            <p className="text-sm text-white/60">{goal.description}</p>
          </div>

          {/* Target metric */}
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-white/50" />
            <span className="text-sm font-semibold text-white/90">
              {goal.target}
            </span>
          </div>

          {/* Progress bar */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-white/50">
                Progress
              </span>
              <span className="text-xs font-semibold text-white/80">
                {percent}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className={cn("h-full rounded-full transition-all duration-500", accent.bar)}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-3">
        {goal.steps.map((step) => (
          <StepCard
            key={step.id}
            step={step}
            goalId={goal.id}
            statusOverrides={statusOverrides}
            textOverrides={textOverrides}
            onSubStepClick={onSubStepClick}
          />
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Step Card (expandable accordion)
// ---------------------------------------------------------------------------

function StepCard({
  step,
  goalId,
  statusOverrides,
  textOverrides,
  onSubStepClick,
}: {
  step: Step;
  goalId: string;
  statusOverrides: Record<string, boolean>;
  textOverrides: Record<string, string>;
  onSubStepClick: (sub: SubStep, step: Step) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const { setActiveTab } = useInsightsTab();
  const isAi = step.owner === "ai";
  const completedSubs = step.subSteps.filter((s) => statusOverrides[s.id] ?? s.completed).length;

  const navigateToFunction = () => {
    setActiveTab(step.functionTab);
  };

  return (
    <div
      className={cn(
        "rounded-xl border transition-colors",
        isAi
          ? "border-purple-200 bg-purple-50"
          : "border-border bg-card",
      )}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="flex w-full items-center gap-3 px-5 py-4 text-left"
      >
        {/* Expand icon */}
        <div className="flex h-5 w-5 shrink-0 items-center justify-center text-muted-foreground">
          {expanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </div>

        {/* Owner badge */}
        {isAi ? (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-purple-200 border border-purple-300 px-2.5 py-0.5 text-xs font-semibold text-purple-800">
            <Sparkles className="h-3 w-3" /> AI
          </span>
        ) : (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
            <Users className="h-3 w-3" /> Team
          </span>
        )}

        {/* Owner name (clickable to navigate) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            navigateToFunction();
          }}
          className={cn(
            "shrink-0 text-xs font-semibold hover:underline",
            isAi ? "text-purple-800" : "text-foreground/70",
          )}
        >
          {step.ownerName}
        </button>

        {/* Title (clickable to navigate) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            navigateToFunction();
          }}
          className="min-w-0 flex-1 truncate text-sm font-medium text-gray-900 hover:underline"
        >
          {step.title}
        </button>

        {/* Completion pill */}
        <span
          className={cn(
            "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
            step.completed
              ? "bg-emerald-100 text-emerald-700"
              : "bg-muted text-muted-foreground",
          )}
        >
          {completedSubs}/{step.subSteps.length}
        </span>

        {/* Completed check */}
        {step.completed ? (
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
        ) : (
          <Circle className="h-4 w-4 shrink-0 text-muted-foreground/40" />
        )}
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className={cn("border-t px-5 pt-3 pb-4", isAi ? "border-purple-200/60" : "border-border/30")}>
          <p className="mb-3 text-xs leading-relaxed text-gray-700">{step.description}</p>
          <p className="mb-2 text-xs font-medium text-gray-500">
            Target: {step.target}
          </p>
          <ul className="flex flex-col gap-1.5">
            {step.subSteps.map((sub) => (
              <SubStepItem
                key={sub.id}
                subStep={sub}
                isAiStep={isAi}
                resolved={statusOverrides[sub.id] ?? sub.completed}
                resolvedText={textOverrides[sub.id] ?? sub.text}
                onClick={() => onSubStepClick(sub, step)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-step Item
// ---------------------------------------------------------------------------

function SubStepItem({
  subStep,
  isAiStep,
  resolved,
  resolvedText,
  onClick,
}: {
  subStep: SubStep;
  isAiStep: boolean;
  resolved: boolean;
  resolvedText: string;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "flex w-full items-start gap-2 rounded-lg px-2 py-1.5 text-left transition-colors",
          "hover:bg-black/5",
        )}
      >
        {resolved ? (
          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
        ) : (
          <Circle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/40" />
        )}
        <span
          className={cn(
            "flex-1 text-xs leading-snug",
            resolved ? "text-gray-800" : "text-gray-500",
          )}
        >
          {subStep.customerName && (
            <span
              className={cn(
                "mr-1.5 inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold",
                isAiStep
                  ? "bg-purple-200 text-purple-800"
                  : "bg-blue-100 text-blue-700",
              )}
            >
              {subStep.customerName}
            </span>
          )}
          {resolvedText}
        </span>
      </button>
    </li>
  );
}
