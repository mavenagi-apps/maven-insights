"use client";

import { Pie, PieChart, Label, Cell } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { ChartCardHeader } from "@/components/chart-card-header";
import type { DonutChartData } from "@/types/dashboard";

interface DonutChartCardProps {
  data: DonutChartData;
}

export function DonutChartCard({ data }: DonutChartCardProps) {
  const chartConfig = data.segments.reduce<ChartConfig>(
    (acc, segment, index) => {
      acc[`segment-${index}`] = {
        label: segment.name,
        color: segment.fill,
      };
      return acc;
    },
    {}
  );

  return (
    <Card className="border border-border-subtle">
      <ChartCardHeader title={data.title} subtitle={data.subtitle} />
      <CardContent className="p-6 pt-4">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data.segments}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={95}
              strokeWidth={2}
              stroke="white"
            >
              {data.segments.map((segment, index) => (
                <Cell key={`cell-${index}`} fill={segment.fill} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 8}
                          className="fill-text-emphasis text-2xl font-bold"
                        >
                          {data.centerValue}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 14}
                          className="fill-muted-foreground text-xs"
                        >
                          {data.centerLabel}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <ChartLegend segments={data.segments} />
      </CardContent>
    </Card>
  );
}

function ChartLegend({
  segments,
}: {
  segments: DonutChartData["segments"];
}) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-4 justify-center">
      {segments.map((segment, index) => (
        <div key={index} className="flex items-center gap-1.5">
          <div
            className="h-2.5 w-2.5 rounded-sm"
            style={{ backgroundColor: segment.fill }}
          />
          <span className="text-xs text-muted-foreground">{segment.name}</span>
        </div>
      ))}
    </div>
  );
}
