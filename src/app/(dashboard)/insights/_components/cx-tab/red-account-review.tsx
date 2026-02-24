"use client";

import { useState } from "react";
import { AlertTriangle, Download, Maximize2, SlidersHorizontal } from "lucide-react";
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
import { redCustomerDetails } from "@/data/red-customers-detail";
import type { RedCustomerDetail } from "@/data/red-customers-detail";

function statusBg(status: string): string {
  // Red: blocked, needs action, at risk
  if (status === "Blocked") return "bg-[#fecaca]";
  if (status === "Customer to Action") return "bg-[#fecaca]";
  if (status === "Needs Information") return "bg-[#fecaca]";
  // Yellow: in-flight / pending review
  if (status === "In Review") return "bg-[#fef9c3]";
  if (status === "In Progress") return "bg-[#fef9c3]";
  // Green: done
  if (status === "Closed Won") return "bg-[#dcfce7]";
  if (status === "Done") return "bg-[#dcfce7]";
  return "";
}

function priorityBg(priority: string): string {
  if (priority === "High") return "bg-[#fecaca]";
  if (priority === "Medium") return "bg-[#fef9c3]";
  return "";
}

function overviewValueBg(field: string, value: string): string {
  if (field === "Health Score" && value.startsWith("Red")) return "bg-[#fecaca]";
  if (field === "Usage Score" && value === "Red") return "bg-[#fecaca]";
  if (field === "Usage Score" && value === "Green") return "bg-[#dcfce7]";
  if (field === "Usage Score" && value === "Yellow") return "bg-[#fef9c3]";
  if (field === "Onboarding Status" && value.startsWith("Off Track")) return "bg-[#fecaca]";
  return "";
}

interface CustomerDetailProps {
  customer: RedCustomerDetail;
}

function CustomerOverviewTable({ customer }: CustomerDetailProps) {
  return (
    <div className="rounded-xl border border-border-subtle bg-card">
      <div className="flex items-start justify-between px-6 pt-6 pb-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">Account Overview</h3>
        </div>
        <PinButton chartId={`red-account-overview-${customer.id}`} />
      </div>
      <Table>
        <TableBody>
          {customer.overview.map((row) => (
            <TableRow key={row.field}>
              <TableCell className="px-6 py-3 text-sm font-medium text-muted-foreground w-48">
                {row.field}
              </TableCell>
              <TableCell className={cn("px-6 py-3 text-sm", overviewValueBg(row.field, row.value))}>
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function GongCallsTable({ customer }: CustomerDetailProps) {
  const hasCalls = customer.gongCalls.length > 0;

  return (
    <div className="rounded-xl border border-border-subtle bg-card">
      <div className="flex items-start justify-between px-6 pt-6 pb-1">
        <div>
          <h3 className="text-base font-semibold text-foreground">Recent Gong Calls (last 90 days)</h3>
        </div>
        <PinButton chartId={`red-account-gong-${customer.id}`} />
      </div>

      {customer.gongCallsNote && (
        <div className="px-6 pt-3 pb-1">
          <p className="text-sm text-muted-foreground italic">{customer.gongCallsNote}</p>
        </div>
      )}

      {!hasCalls && !customer.gongCallsNote && (
        <div className="px-6 py-6 text-sm text-muted-foreground italic">
          No Gong calls found in the database for this customer.
        </div>
      )}

      {hasCalls && (
        <>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">{customer.gongCalls.length} calls</span>
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
          <Table>
            <TableHeader>
              <TableRow className="border-t border-border-subtle hover:bg-transparent">
                <TableHead className="h-10 px-6 text-xs font-medium text-muted-foreground">Date</TableHead>
                <TableHead className="h-10 px-6 text-xs font-medium text-muted-foreground">Title</TableHead>
                <TableHead className="h-10 px-6 text-xs font-medium text-muted-foreground">Duration</TableHead>
                <TableHead className="h-10 px-6 text-xs font-medium text-muted-foreground">Key Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customer.gongCalls.map((call) => (
                <TableRow key={`${call.date}-${call.title}`}>
                  <TableCell className="px-6 py-4 text-sm tabular-nums whitespace-nowrap">{call.date}</TableCell>
                  <TableCell className="px-6 py-4 text-sm font-medium">{call.title}</TableCell>
                  <TableCell className="px-6 py-4 text-sm tabular-nums whitespace-nowrap">{call.duration}</TableCell>
                  <TableCell className="px-6 py-4 text-sm max-w-[400px]">{call.keyPoints}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
}

function LinearIssuesTable({ customer }: CustomerDetailProps) {
  const hasIssues = customer.linearIssues.length > 0;

  return (
    <div className="rounded-xl border border-border-subtle bg-card">
      <div className="flex items-start justify-between px-6 pt-6 pb-1">
        <div>
          <h3 className="text-base font-semibold text-foreground">Open Linear Issues</h3>
        </div>
        <PinButton chartId={`red-account-linear-${customer.id}`} />
      </div>

      {customer.linearIssuesNote && (
        <div className="px-6 pt-3 pb-1">
          <p className="text-sm text-muted-foreground italic">{customer.linearIssuesNote}</p>
        </div>
      )}

      {!hasIssues && !customer.linearIssuesNote && (
        <div className="px-6 py-6 text-sm text-muted-foreground italic">
          No open Linear issues found.
        </div>
      )}

      {hasIssues && (
        <>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">{customer.linearIssues.length} issues</span>
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
          <Table>
            <TableHeader>
              <TableRow className="border-t border-border-subtle hover:bg-transparent">
                <TableHead className="h-10 px-6 text-xs font-medium text-muted-foreground">ID</TableHead>
                <TableHead className="h-10 px-6 text-xs font-medium text-muted-foreground">Title</TableHead>
                <TableHead className="h-10 px-6 text-xs font-medium text-muted-foreground">Status</TableHead>
                <TableHead className="h-10 px-6 text-xs font-medium text-muted-foreground">Priority</TableHead>
                <TableHead className="h-10 px-6 text-xs font-medium text-muted-foreground">Assignee</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customer.linearIssues.map((issue) => (
                <TableRow key={issue.id}>
                  <TableCell className="px-6 py-4 text-sm tabular-nums whitespace-nowrap font-mono text-muted-foreground">
                    {issue.id}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm max-w-[320px]">{issue.title}</TableCell>
                  <TableCell className={cn("px-6 py-4 text-sm", statusBg(issue.status))}>
                    {issue.status}
                  </TableCell>
                  <TableCell className={cn("px-6 py-4 text-sm", priorityBg(issue.priority))}>
                    {issue.priority}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm">{issue.assignee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
}

function AnalysisCard({ customer }: CustomerDetailProps) {
  return (
    <div className="rounded-xl border border-border-subtle bg-card">
      <div className="flex items-start justify-between px-6 pt-6 pb-4">
        <h3 className="text-base font-semibold text-foreground">Analysis</h3>
      </div>
      <div className="px-6 pb-6 flex flex-col gap-4">
        <p className="text-sm text-foreground leading-relaxed">{customer.analysis}</p>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-red-500 shrink-0" />
            <p className="text-sm font-semibold text-foreground">Immediate actions needed:</p>
          </div>
          <ul className="flex flex-col gap-1.5 pl-6">
            {customer.immediateActions.map((action) => (
              <li key={action} className="text-sm text-foreground list-disc">
                {action}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function RedAccountReview() {
  const [activeCustomer, setActiveCustomer] = useState(redCustomerDetails[0].id);

  const customer = redCustomerDetails.find((c) => c.id === activeCustomer) ?? redCustomerDetails[0];

  return (
    <div className="flex flex-col gap-6">
      {/* Customer sub-tabs */}
      <div className="flex gap-1 flex-wrap border-b border-border">
        {redCustomerDetails.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCustomer(c.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors",
              activeCustomer === c.id
                ? "border-b-2 border-foreground text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* ARR badge */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          Red Account
        </span>
        <span className="text-sm text-muted-foreground">
          ARR: <span className="font-semibold text-foreground">{customer.arr}</span>
        </span>
      </div>

      <AnalysisCard customer={customer} />
      <CustomerOverviewTable customer={customer} />
      <GongCallsTable customer={customer} />
      <LinearIssuesTable customer={customer} />
    </div>
  );
}
