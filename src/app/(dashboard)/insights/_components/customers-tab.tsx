import { CustomersTable } from "./customers-tab/customers-table";

export function CustomersTab() {
  return (
    <div className="flex flex-col gap-6 px-10 pt-10 pb-10">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Customers</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          All active customers — ARR, health, usage, and activity at a glance.
        </p>
      </div>
      <CustomersTable />
    </div>
  );
}
