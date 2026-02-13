"use client";

import { useCallback, useMemo, useState } from "react";
import { Activity, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  pulseEntries,
  ActivityType,
  TEAM_LABELS,
  type PulseEntry,
  type TeamKey,
} from "@/data/mock-pulse";

const TYPE_OPTIONS = [
  { value: ActivityType.OKR_CHANGE, label: "OKR change" },
  { value: ActivityType.METRICS_CHANGE, label: "Metrics change" },
] as const;

const TEAM_OPTIONS = [
  { value: "prodeng" as TeamKey, label: "Prod/Eng" },
  { value: "solutions" as TeamKey, label: "Solutions" },
  { value: "cx" as TeamKey, label: "CX" },
  { value: "sales" as TeamKey, label: "Sales" },
  { value: "marketing" as TeamKey, label: "Marketing" },
] as const;

function formatTime(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

const DATE_HEADINGS: Record<string, string> = {
  "2026-02-13": "Friday, Feb 13",
  "2026-02-12": "Yesterday — Thursday, Feb 12",
  "2026-02-11": "Wednesday, Feb 11",
  "2026-02-10": "Tuesday, Feb 10",
  "2026-02-09": "Monday, Feb 9",
};

function formatDateHeading(dateKey: string): string {
  return DATE_HEADINGS[dateKey] ?? dateKey;
}

function groupByDate(entries: PulseEntry[]): Map<string, PulseEntry[]> {
  const groups = new Map<string, PulseEntry[]>();
  for (const entry of entries) {
    const dateKey = entry.timestamp.split("T")[0];
    const existing = groups.get(dateKey) ?? [];
    existing.push(entry);
    groups.set(dateKey, existing);
  }
  return groups;
}

export function PulseTab() {
  const [activeTypes, setActiveTypes] = useState<Set<string>>(new Set());
  const [activeTeams, setActiveTeams] = useState<Set<string>>(new Set());

  const handleTypeToggle = useCallback((type: string) => {
    setActiveTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  }, []);

  const handleTeamToggle = useCallback((team: string) => {
    setActiveTeams((prev) => {
      const next = new Set(prev);
      if (next.has(team)) next.delete(team);
      else next.add(team);
      return next;
    });
  }, []);

  const hasTypeFilter = activeTypes.size > 0;
  const hasTeamFilter = activeTeams.size > 0;

  const filtered = useMemo(
    () =>
      pulseEntries.filter((e) => {
        if (hasTypeFilter && !activeTypes.has(e.type)) return false;
        if (hasTeamFilter && !activeTeams.has(e.team)) return false;
        return true;
      }),
    [activeTypes, activeTeams, hasTypeFilter, hasTeamFilter]
  );

  const grouped = useMemo(() => groupByDate(filtered), [filtered]);
  const hasResults = filtered.length > 0;
  const hasAnyFilter = hasTypeFilter || hasTeamFilter;

  return (
    <div className="flex flex-col gap-6 px-10 pt-6 pb-10">
      {/* Header + filters */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-foreground">Pulse</h1>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground w-14 shrink-0">
              Type
            </span>
            <div className="flex flex-wrap gap-2">
              {TYPE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleTypeToggle(opt.value)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors border",
                    activeTypes.has(opt.value)
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background text-foreground border-border hover:bg-muted"
                  )}
                >
                  {opt.value === ActivityType.OKR_CHANGE ? (
                    <TrendingUp className="h-3 w-3 text-purple-500" />
                  ) : (
                    <Activity className="h-3 w-3 text-blue-500" />
                  )}
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
                  onClick={() => handleTeamToggle(opt.value)}
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
      </div>

      {/* Log entries */}
      {hasResults ? (
        <div className="flex flex-col gap-6">
          {[...grouped.entries()].map(([dateKey, entries]) => (
            <div key={dateKey} className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-foreground mb-2">
                {formatDateHeading(dateKey)}
              </h2>

              <div className="flex flex-col">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-start gap-3 py-3 border-b border-border last:border-b-0"
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                        entry.type === ActivityType.OKR_CHANGE
                          ? "bg-purple-100"
                          : "bg-blue-100"
                      )}
                    >
                      {entry.type === ActivityType.OKR_CHANGE ? (
                        <TrendingUp className="h-3.5 w-3.5 text-purple-600" />
                      ) : (
                        <Activity className="h-3.5 w-3.5 text-blue-600" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <p className="text-sm text-foreground">{entry.title}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-muted-foreground">
                          {TEAM_LABELS[entry.team]}
                        </span>
                        <span className="text-xs text-muted-foreground/60">
                          ·
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatTime(entry.timestamp)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
          <p className="text-sm text-muted-foreground">
            No activity matches the selected filters.
          </p>
          {hasAnyFilter && (
            <button
              onClick={() => {
                setActiveTypes(new Set());
                setActiveTeams(new Set());
              }}
              className="text-sm font-medium text-purple-600 hover:text-purple-700"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
