"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { customers, type CustomerRow } from "@/data/mock-customers";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const TODAY = new Date("2026-02-26");

function daysUntil(dateStr: string | null): number | null {
  if (!dateStr) return null;
  const diff = new Date(dateStr).getTime() - TODAY.getTime();
  return Math.round(diff / (1000 * 60 * 60 * 24));
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatArr(arr: number): string {
  return "$" + arr.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function segmentLabel(raw: string | null): string {
  if (!raw) return "?";
  if (raw.includes("SMB")) return "SMB";
  if (raw.includes("Midmarket")) return "Mid";
  if (raw.includes("Enterprise")) return "Ent";
  if (raw.includes("Strategic")) return "Str";
  return "?";
}

function segmentColors(label: string): string {
  if (label === "Ent") return "bg-[#ede9fe] text-[#5b21b6]";
  if (label === "SMB") return "bg-[#dbeafe] text-[#1d4ed8]";
  if (label === "Mid") return "bg-[#e0f2fe] text-[#0369a1]";
  if (label === "Str") return "bg-[#fce7f3] text-[#be185d]";
  return "bg-muted text-muted-foreground";
}

function healthBadgeColors(health: CustomerRow["health"]): string {
  if (health === "Green") return "bg-[#dcfce7] text-[#15803d]";
  if (health === "Yellow") return "bg-[#fef9c3] text-[#854d0e]";
  if (health === "Red") return "bg-[#fee2e2] text-[#dc2626]";
  return "bg-muted text-muted-foreground";
}

function usageBarColor(pct: number): string {
  if (pct < 25) return "bg-red-400";
  if (pct < 60) return "bg-amber-400";
  return "bg-emerald-500";
}

function activityInfo(gongCalls: number, lastActivity: string | null): {
  label: string;
  dotColor: string;
  textColor: string;
} {
  if (gongCalls === 0) {
    if (!lastActivity) return { label: "Silent", dotColor: "bg-gray-800", textColor: "text-gray-600" };
    const days = daysUntil(lastActivity);
    if (days === null || days < -30) return { label: "Silent", dotColor: "bg-gray-800", textColor: "text-gray-600" };
  }
  if (gongCalls <= 2) return { label: `Low (${gongCalls}c)`, dotColor: "bg-amber-400", textColor: "text-amber-700" };
  return { label: `Active (${gongCalls}c)`, dotColor: "bg-emerald-500", textColor: "text-emerald-700" };
}

// ---------------------------------------------------------------------------
// Sort
// ---------------------------------------------------------------------------

type SortKey = keyof CustomerRow | null;
type SortDir = "asc" | "desc";

function sortRows(rows: CustomerRow[], key: SortKey, dir: SortDir): CustomerRow[] {
  if (!key) return rows;
  return [...rows].sort((a, b) => {
    const av = a[key];
    const bv = b[key];
    if (av === null && bv === null) return 0;
    if (av === null) return 1;
    if (bv === null) return -1;
    const cmp =
      typeof av === "number" && typeof bv === "number"
        ? av - bv
        : String(av).localeCompare(String(bv));
    return dir === "asc" ? cmp : -cmp;
  });
}

function SortIcon({ col, sortKey, sortDir }: { col: SortKey; sortKey: SortKey; sortDir: SortDir }) {
  if (col !== sortKey) return <ChevronsUpDown className="h-3 w-3 opacity-40" />;
  return sortDir === "asc" ? (
    <ChevronUp className="h-3 w-3" />
  ) : (
    <ChevronDown className="h-3 w-3" />
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function CustomersTable() {
  const [sortKey, setSortKey] = useState<SortKey>("arr");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const rows = sortRows(customers, sortKey, sortDir);

  return (
    <div className="rounded-xl border border-border-subtle bg-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr
              className="text-white text-xs font-bold uppercase tracking-wide"
              style={{ background: "linear-gradient(90deg, #5c2de8 0%, #7c3aed 100%)" }}
            >
              <Th onClick={() => handleSort("name")} sortKey={sortKey} col="name" sortDir={sortDir} className="pl-6 py-3">
                Customer
              </Th>
              <Th onClick={() => handleSort("arr")} sortKey={sortKey} col="arr" sortDir={sortDir} className="py-3">
                ARR
              </Th>
              <Th onClick={() => handleSort("health")} sortKey={sortKey} col="health" sortDir={sortDir} className="py-3">
                Health
              </Th>
              <Th onClick={() => handleSort("usagePct")} sortKey={sortKey} col="usagePct" sortDir={sortDir} className="py-3">
                Usage
              </Th>
              <Th onClick={() => handleSort("segment")} sortKey={sortKey} col="segment" sortDir={sortDir} className="py-3">
                Segment
              </Th>
              <Th onClick={() => handleSort("industry")} sortKey={sortKey} col="industry" sortDir={sortDir} className="py-3">
                Industry
              </Th>
              <Th onClick={() => handleSort("cxOwner")} sortKey={sortKey} col="cxOwner" sortDir={sortDir} className="py-3">
                CX Owner
              </Th>
              <Th onClick={() => handleSort("contractEnd")} sortKey={sortKey} col="contractEnd" sortDir={sortDir} className="py-3">
                Contract End
              </Th>
              <Th onClick={() => handleSort("gongCalls30d")} sortKey={sortKey} col="gongCalls30d" sortDir={sortDir} className="pr-6 py-3">
                Activity (30D)
              </Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const seg = segmentLabel(row.segment);
              const days = daysUntil(row.contractEnd);
              const activity = activityInfo(row.gongCalls30d, row.lastActivity);
              const isAlternate = i % 2 === 1;

              return (
                <tr
                  key={row.name}
                  className={cn(
                    "border-t border-border-subtle transition-colors hover:bg-muted/40",
                    isAlternate ? "bg-muted/10" : "bg-card"
                  )}
                >
                  {/* Customer */}
                  <td className="pl-6 pr-4 py-3 font-semibold text-foreground whitespace-nowrap">
                    {row.name}
                  </td>

                  {/* ARR */}
                  <td className="px-4 py-3 tabular-nums font-semibold text-foreground whitespace-nowrap">
                    {formatArr(row.arr)}
                  </td>

                  {/* Health */}
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold",
                        healthBadgeColors(row.health)
                      )}
                    >
                      {row.health ?? "—"}
                    </span>
                  </td>

                  {/* Usage */}
                  <td className="px-4 py-3">
                    {row.usagePct === null ? (
                      <span className="text-xs text-muted-foreground italic">No data</span>
                    ) : (
                      <div className="flex items-center gap-2 min-w-[120px]">
                        <div className="relative h-2 w-24 rounded-full bg-gray-200 overflow-hidden">
                          <div
                            className={cn("h-full rounded-full", usageBarColor(row.usagePct))}
                            style={{ width: `${Math.min(row.usagePct, 100)}%` }}
                          />
                        </div>
                        <span
                          className={cn(
                            "text-xs font-medium tabular-nums w-10 text-right",
                            row.usagePct < 25
                              ? "text-red-600"
                              : row.usagePct < 60
                                ? "text-amber-600"
                                : "text-emerald-700"
                          )}
                        >
                          {Math.round(row.usagePct)}%
                        </span>
                      </div>
                    )}
                  </td>

                  {/* Segment */}
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-bold",
                        segmentColors(seg)
                      )}
                    >
                      {seg}
                    </span>
                  </td>

                  {/* Industry */}
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {row.industry ?? "—"}
                  </td>

                  {/* CX Owner */}
                  <td className="px-4 py-3 text-foreground whitespace-nowrap">{row.cxOwner ?? "—"}</td>

                  {/* Contract End */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={cn(
                        "text-sm",
                        days !== null && days < 90 ? "text-red-600 font-semibold" : "text-foreground"
                      )}
                    >
                      {formatDate(row.contractEnd)}
                    </span>
                    {days !== null && (
                      <span
                        className={cn(
                          "ml-1.5 text-xs font-medium",
                          days < 0
                            ? "text-red-500"
                            : days < 90
                              ? "text-red-500"
                              : "text-muted-foreground"
                        )}
                      >
                        ({days < 0 ? `${Math.abs(days)}d ago` : `${days}d`})
                      </span>
                    )}
                  </td>

                  {/* Activity */}
                  <td className="px-4 pr-6 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className={cn("h-2 w-2 rounded-full shrink-0", activity.dotColor)} />
                      <span className={cn("text-xs font-medium whitespace-nowrap", activity.textColor)}>
                        {activity.label}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Th helper
// ---------------------------------------------------------------------------

function Th({
  children,
  onClick,
  col,
  sortKey,
  sortDir,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  col: SortKey;
  sortKey: SortKey;
  sortDir: SortDir;
  className?: string;
}) {
  return (
    <th
      className={cn("px-4 text-left select-none", className, onClick && "cursor-pointer hover:opacity-80")}
      onClick={onClick}
    >
      <div className="flex items-center gap-1">
        {children}
        <SortIcon col={col} sortKey={sortKey} sortDir={sortDir} />
      </div>
    </th>
  );
}
