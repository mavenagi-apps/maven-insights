import { DonutChartCard } from "./donut-chart-card";
import { BarChartCard } from "./bar-chart-card";
import { mockDonutCharts, mockBarCharts } from "@/data/mock-charts";

export function ChartsGrid() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <DonutChartCard data={mockDonutCharts[0]} />
      <BarChartCard data={mockBarCharts[0]} />
      <DonutChartCard data={mockDonutCharts[1]} />
      <BarChartCard data={mockBarCharts[1]} />
    </div>
  );
}
