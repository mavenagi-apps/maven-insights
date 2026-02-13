"use client";

import { cn } from "@/lib/utils";

const STATUS_OPTIONS = [
  { value: "green", label: "Green", dot: "bg-emerald-500" },
  { value: "yellow", label: "Yellow", dot: "bg-amber-500" },
  { value: "red", label: "Red", dot: "bg-red-500" },
] as const;

const TEAM_OPTIONS = [
  { value: "prodeng", label: "Prod/Eng" },
  { value: "solutions", label: "Solutions" },
  { value: "cx", label: "CX" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
] as const;

interface OkrFiltersProps {
  activeStatuses: Set<string>;
  activeTeams: Set<string>;
  onStatusToggle: (status: string) => void;
  onTeamToggle: (team: string) => void;
}

export function OkrFilters({
  activeStatuses,
  activeTeams,
  onStatusToggle,
  onTeamToggle,
}: OkrFiltersProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground w-14 shrink-0">
          Status
        </span>
        <div className="flex flex-wrap gap-2">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onStatusToggle(opt.value)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors border",
                activeStatuses.has(opt.value)
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-foreground border-border hover:bg-muted"
              )}
            >
              <span className={cn("h-2 w-2 rounded-full", opt.dot)} />
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground w-14 shrink-0">
          Team
        </span>
        <div className="flex flex-wrap gap-2">
          {TEAM_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onTeamToggle(opt.value)}
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors border",
                activeTeams.has(opt.value)
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-foreground border-border hover:bg-muted"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
