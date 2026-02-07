"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { ChartCardHeader } from "@/components/chart-card-header";
import type { BarChartData } from "@/types/dashboard";

interface BarChartCardProps {
  data: BarChartData;
}

export function BarChartCard({ data }: BarChartCardProps) {
  const chartConfig = data.categories.reduce<ChartConfig>(
    (acc, category) => {
      acc[category.key] = {
        label: category.label,
        color: category.color,
      };
      return acc;
    },
    {}
  );

  return (
    <Card className="border border-border-subtle">
      <ChartCardHeader title={data.title} subtitle={data.subtitle} />
      <CardContent className="p-6 pt-4">
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart data={data.data} barGap={1} barCategoryGap="20%">
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            {data.categories.map((category) => (
              <Bar
                key={category.key}
                dataKey={category.key}
                fill={category.color}
                radius={[2, 2, 0, 0]}
                maxBarSize={20}
              />
            ))}
          </BarChart>
        </ChartContainer>
        <BarChartLegend categories={data.categories} />
      </CardContent>
    </Card>
  );
}

function BarChartLegend({
  categories,
}: {
  categories: BarChartData["categories"];
}) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-4 justify-center">
      {categories.map((category) => (
        <div key={category.key} className="flex items-center gap-1.5">
          <div
            className="h-2.5 w-2.5 rounded-sm"
            style={{ backgroundColor: category.color }}
          />
          <span className="text-xs text-muted-foreground">
            {category.label}
          </span>
        </div>
      ))}
    </div>
  );
}
