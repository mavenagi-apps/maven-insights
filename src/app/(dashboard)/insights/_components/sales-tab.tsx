import { OkrSection } from "@/components/okr-section";
import { salesOkrs } from "@/data/mock-sales";
import { OpenDealsTable } from "./sales-tab/open-deals-table";
import { SalesForecastTable } from "./sales-tab/sales-forecast-table";

export function SalesTab() {
  return (
    <div className="flex flex-col gap-6 px-10 pt-10 pb-10">
      <OkrSection
        okrs={salesOkrs}
        chartId="sales-okrs"
        insight="ARR is tracking at 22% with $80M pipeline at 50% — strong pipeline momentum, but close-rate acceleration is needed to hit the $20M target by Q1 end."
      />
      <OpenDealsTable />
      <SalesForecastTable />
    </div>
  );
}
