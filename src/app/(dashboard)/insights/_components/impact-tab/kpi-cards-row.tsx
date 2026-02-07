import { KpiCard } from "./kpi-card";
import { mockKpiCards } from "@/data/mock-kpi";

export function KpiCardsRow() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {mockKpiCards.map((card) => (
        <KpiCard key={card.id} {...card} />
      ))}
    </div>
  );
}
