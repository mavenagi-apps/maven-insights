export interface KpiCardData {
  id: string;
  title: string;
  value: string;
  trendValue: string;
  trendDirection: "up" | "down" | "neutral";
  trendLabel: string;
}

export interface ChartSegment {
  name: string;
  value: number;
  fill: string;
}

export interface DonutChartData {
  id: string;
  title: string;
  subtitle: string;
  centerValue: string;
  centerLabel: string;
  segments: ChartSegment[];
}

export interface BarChartCategory {
  key: string;
  label: string;
  color: string;
}

export interface BarChartData {
  id: string;
  title: string;
  subtitle: string;
  categories: BarChartCategory[];
  data: Record<string, string | number>[];
}

export interface TableRow {
  id: string;
  cells: string[];
}

export interface ColumnDefinition {
  key: string;
  label: string;
  sortable: boolean;
}
