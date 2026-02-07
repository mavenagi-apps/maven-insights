import { KpiCardsRow } from "./kpi-cards-row";
import { ChartsGrid } from "./charts-grid";
import { DataTableSection } from "./data-table-section";

export function ImpactTab() {
  return (
    <div className="flex flex-col gap-5 px-10 pt-10 pb-10">
      <div className="flex items-center">
        <h2 className="text-lg font-bold text-foreground">
          Maven&apos;s impact on your business
        </h2>
      </div>
      <KpiCardsRow />
      <ChartsGrid />
      <DataTableSection />
    </div>
  );
}
