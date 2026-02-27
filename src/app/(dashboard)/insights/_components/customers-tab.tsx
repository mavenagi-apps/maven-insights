import { CustomersTable } from "./customers-tab/customers-table";
import { customers, getCustomerPhase } from "@/data/mock-customers";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Derived stats (computed once from mock data)
// ---------------------------------------------------------------------------

const TODAY = new Date("2026-02-26");

function daysUntil(dateStr: string | null): number | null {
  if (!dateStr) return null;
  const diff = new Date(dateStr).getTime() - TODAY.getTime();
  return Math.round(diff / (1000 * 60 * 60 * 24));
}

const totalArr = customers.reduce((sum, c) => sum + c.arr, 0);
const greenCount = customers.filter((c) => c.health === "Green").length;
const yellowCount = customers.filter((c) => c.health === "Yellow").length;
const redCount = customers.filter((c) => c.health === "Red").length;

const expansionCustomers = customers.filter((c) => c.expansionOpps > 0);
const expansionTotalArr = expansionCustomers.reduce((sum, c) => sum + c.expansionArr, 0);

// All customers with contract ending in 90 days (regardless of phase)
const renewals90d = customers.filter((c) => {
  const days = daysUntil(c.contractEnd);
  return days !== null && days >= 0 && days <= 90;
});
const renewals90dArr = renewals90d.reduce((sum, c) => sum + c.arr, 0);

const onboardingCustomers = customers.filter((c) => getCustomerPhase(c) === "Onboarding");
const onboardingAtRisk = onboardingCustomers.filter(
  (c) => c.onboardingStatus === "At Risk" || c.onboardingStatus === "Off Track"
).length;

function formatArrFull(n: number): string {
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

// ---------------------------------------------------------------------------
// Tile component
// ---------------------------------------------------------------------------

interface TileProps {
  label: string;
  children: React.ReactNode;
  subtitle: string;
  accent?: string;
}

function CustomerTile({ label, children, subtitle, accent }: TileProps) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-border-subtle bg-card px-5 py-4 min-w-0">
      <span className={cn("text-[11px] font-semibold uppercase tracking-wider", accent ?? "text-[#5c2de8]")}>
        {label}
      </span>
      <div className="text-[22px] font-bold text-foreground leading-tight tabular-nums">
        {children}
      </div>
      <span className="text-xs text-muted-foreground">{subtitle}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Health distribution inline component
// ---------------------------------------------------------------------------

function HealthDots() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex items-center gap-1 text-[22px] font-bold text-foreground tabular-nums">
        <span className="h-3.5 w-3.5 rounded-full bg-emerald-500 inline-block shrink-0" />
        {greenCount}
      </span>
      <span className="text-muted-foreground font-light">·</span>
      <span className="flex items-center gap-1 text-[22px] font-bold text-foreground tabular-nums">
        <span className="h-3.5 w-3.5 rounded-full bg-amber-400 inline-block shrink-0" />
        {yellowCount}
      </span>
      <span className="text-muted-foreground font-light">·</span>
      <span className="flex items-center gap-1 text-[22px] font-bold text-foreground tabular-nums">
        <span className="h-3.5 w-3.5 rounded-full bg-red-500 inline-block shrink-0" />
        {redCount}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function CustomersTab() {
  return (
    <div className="flex flex-col gap-6 px-10 pt-10 pb-10">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Customers</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {customers.length} active customers &middot; {formatArrFull(totalArr)} total ARR &middot; Data as of Feb 26, 2026
        </p>
      </div>

      {/* Summary tiles */}
      <div className="grid grid-cols-5 gap-4">
        <CustomerTile
          label="Total ARR"
          subtitle={`${customers.length} active customers`}
          accent="text-[#5c2de8]"
        >
          {formatArrFull(totalArr)}
        </CustomerTile>

        <CustomerTile
          label="Health Distribution"
          subtitle={`${redCount} accounts need attention`}
          accent="text-[#5c2de8]"
        >
          <HealthDots />
        </CustomerTile>

        <CustomerTile
          label="Expansion Pipeline"
          subtitle={`${expansionCustomers.length} active opportunities`}
          accent="text-[#5c2de8]"
        >
          {formatArrFull(expansionTotalArr)}
        </CustomerTile>

        <CustomerTile
          label="Renewals (Next 90d)"
          subtitle={`${renewals90d.length} renewals upcoming`}
          accent="text-[#5c2de8]"
        >
          {formatArrFull(renewals90dArr)}
        </CustomerTile>

        <CustomerTile
          label="Onboarding"
          subtitle={`${onboardingAtRisk} at risk / off track`}
          accent="text-[#5c2de8]"
        >
          {onboardingCustomers.length} active
        </CustomerTile>
      </div>

      <CustomersTable />
    </div>
  );
}
