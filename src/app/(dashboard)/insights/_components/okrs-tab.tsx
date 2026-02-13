"use client";

import { useCallback, useState } from "react";
import { getAllTeamOkrs } from "@/lib/okr-aggregator";
import { getOkrStatus, OkrTile } from "@/components/okr-section";
import { OkrFilters } from "./okrs-tab/okr-filters";

export function OkrsTab() {
  const [activeStatuses, setActiveStatuses] = useState<Set<string>>(new Set());
  const [activeTeams, setActiveTeams] = useState<Set<string>>(new Set());

  const allTeams = getAllTeamOkrs();

  const handleStatusToggle = useCallback((status: string) => {
    setActiveStatuses((prev) => {
      const next = new Set(prev);
      if (next.has(status)) {
        next.delete(status);
      } else {
        next.add(status);
      }
      return next;
    });
  }, []);

  const handleTeamToggle = useCallback((team: string) => {
    setActiveTeams((prev) => {
      const next = new Set(prev);
      if (next.has(team)) {
        next.delete(team);
      } else {
        next.add(team);
      }
      return next;
    });
  }, []);

  const hasStatusFilter = activeStatuses.size > 0;
  const hasTeamFilter = activeTeams.size > 0;

  // Filter teams
  const filteredTeams = allTeams
    .filter((group) => !hasTeamFilter || activeTeams.has(group.key))
    .map((group) => ({
      ...group,
      subTeams: group.subTeams
        .map((sub) => ({
          ...sub,
          okrs: hasStatusFilter
            ? sub.okrs.filter((okr) => {
                if (!okr.status && activeStatuses.has("no_score")) return true;
                const status = okr.status ?? getOkrStatus(okr.percentComplete);
                return activeStatuses.has(status);
              })
            : sub.okrs,
        }))
        .filter((sub) => sub.okrs.length > 0),
    }))
    .filter((group) => group.subTeams.length > 0);

  const hasResults = filteredTeams.length > 0;
  const hasAnyFilter = hasStatusFilter || hasTeamFilter;

  return (
    <div className="flex flex-col gap-6 px-10 pt-6 pb-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-foreground">All OKRs</h1>
        <OkrFilters
          activeStatuses={activeStatuses}
          activeTeams={activeTeams}
          onStatusToggle={handleStatusToggle}
          onTeamToggle={handleTeamToggle}
        />
      </div>

      {hasResults ? (
        <div className="flex flex-col gap-8">
          {filteredTeams.map((group) => {
            const showSubTeamLabels = group.subTeams.length > 1 ||
              (group.subTeams.length === 1 && group.subTeams[0].name !== group.team);

            return (
              <div key={group.key} className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                  {group.team}
                </h2>

                {group.subTeams.map((sub) => (
                  <div key={sub.name} className="flex flex-col gap-3">
                    {showSubTeamLabels && (
                      <h3 className="text-sm font-medium text-muted-foreground">
                        {sub.name}
                      </h3>
                    )}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {sub.okrs.map((okr) => (
                        <OkrTile key={okr.name} okr={okr} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
          <p className="text-sm text-muted-foreground">
            No OKRs match the selected filters.
          </p>
          {hasAnyFilter && (
            <button
              onClick={() => {
                setActiveStatuses(new Set());
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
