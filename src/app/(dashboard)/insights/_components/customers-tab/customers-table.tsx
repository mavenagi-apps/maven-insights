"use client";

import { useState } from "react";
import { ArrowUpDown, Download, Maximize2, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PinButton } from "@/components/pin-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useColumnResize } from "@/hooks/use-column-resize";
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

// ---------------------------------------------------------------------------
// Column config (order: Customer, ARR, Health, Usage, Segment, CX Owner, Activity, Contract End, Industry)
// ---------------------------------------------------------------------------

const COLUMNS: { key: SortKey; label: string }[] = [
  { key: "name", label: "Customer" },
  { key: "arr", label: "ARR" },
  { key: "health", label: "Health" },
  { key: "usagePct", label: "Usage" },
  { key: "segment", label: "Segment" },
  { key: "cxOwner", label: "CX Owner" },
  { key: "gongCalls30d", label: "Activity (30D)" },
  { key: "contractEnd", label: "Contract End" },
  { key: "industry", label: "Industry" },
];

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function CustomersTable() {
  const [sortKey, setSortKey] = useState<SortKey>("arr");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const { widths, startResize } = useColumnResize(COLUMNS.length);

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
    <div className="rounded-xl border border-border-subtle bg-card">
      {/* Card header */}
      <div className="flex items-start justify-between px-6 pt-6 pb-1">
        <h3 className="text-base font-semibold text-foreground">All Customers</h3>
        <PinButton chartId="customers-table" />
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{customers.length} customers</span>
          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-sm font-normal">
            <Download className="h-3.5 w-3.5" />
            Download
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Expand">
            <Maximize2 className="h-3.5 w-3.5" />
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-sm font-normal">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Display
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-t border-border-subtle hover:bg-transparent">
            {COLUMNS.map((col, i) => (
              <TableHead
                key={String(col.key)}
                className="relative h-10 px-6"
                style={widths[i] !== undefined ? { width: widths[i], minWidth: widths[i] } : undefined}
              >
                <button
                  className="flex items-center gap-1 text-xs font-medium text-muted-foreground"
                  onClick={() => handleSort(col.key)}
                >
                  {col.label}
                  <ArrowUpDown className="h-3 w-3" />
                </button>
                <div
                  onMouseDown={(e) => startResize(i, e)}
                  className="absolute right-0 top-0 h-full w-1 cursor-col-resize hover:bg-primary/20 active:bg-primary/40"
                />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => {
            const seg = segmentLabel(row.segment);
            const days = daysUntil(row.contractEnd);
            const activity = activityInfo(row.gongCalls30d, row.lastActivity);

            return (
              <TableRow key={row.name}>
                {/* Customer */}
                <TableCell className="px-6 py-4 text-sm font-semibold text-foreground max-w-[160px] truncate">
                  {row.name}
                </TableCell>

                {/* ARR */}
                <TableCell className="px-6 py-4 text-sm tabular-nums font-semibold text-foreground whitespace-nowrap">
                  {formatArr(row.arr)}
                </TableCell>

                {/* Health */}
                <TableCell className="px-6 py-4 text-sm">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold",
                      healthBadgeColors(row.health)
                    )}
                  >
                    {row.health ?? "—"}
                  </span>
                </TableCell>

                {/* Usage */}
                <TableCell className="px-6 py-4 text-sm">
                  {row.usagePct === null ? (
                    <span className="text-xs text-muted-foreground italic">No data</span>
                  ) : (
                    <div className="flex items-center gap-2 min-w-[120px]">
                      <div className="relative h-2 w-20 rounded-full bg-gray-200 overflow-hidden">
                        <div
                          className={cn("h-full rounded-full", usageBarColor(row.usagePct))}
                          style={{ width: `${Math.min(row.usagePct, 100)}%` }}
                        />
                      </div>
                      <span
                        className={cn(
                          "text-xs font-medium tabular-nums w-9 text-right",
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
                </TableCell>

                {/* Segment */}
                <TableCell className="px-6 py-4 text-sm">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-bold",
                      segmentColors(seg)
                    )}
                  >
                    {seg}
                  </span>
                </TableCell>

                {/* CX Owner */}
                <TableCell className="px-6 py-4 text-sm text-foreground whitespace-nowrap">
                  {row.cxOwner ?? "—"}
                </TableCell>

                {/* Activity (30D) */}
                <TableCell className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <span className={cn("h-2 w-2 rounded-full shrink-0", activity.dotColor)} />
                    <span className={cn("text-xs font-medium whitespace-nowrap", activity.textColor)}>
                      {activity.label}
                    </span>
                  </div>
                </TableCell>

                {/* Contract End */}
                <TableCell className="px-6 py-4 text-sm whitespace-nowrap">
                  <span
                    className={cn(
                      days !== null && days < 90 ? "text-red-600 font-semibold" : "text-foreground"
                    )}
                  >
                    {formatDate(row.contractEnd)}
                  </span>
                  {days !== null && (
                    <span
                      className={cn(
                        "ml-1.5 text-xs font-medium",
                        days < 0 ? "text-red-500" : days < 90 ? "text-red-500" : "text-muted-foreground"
                      )}
                    >
                      ({days < 0 ? `${Math.abs(days)}d ago` : `${days}d`})
                    </span>
                  )}
                </TableCell>

                {/* Industry */}
                <TableCell className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                  {row.industry ?? "—"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
