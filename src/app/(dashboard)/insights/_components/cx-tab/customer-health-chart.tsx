"use client";

import { Line, LineChart, XAxis, YAxis } from "recharts";
import { PinButton } from "@/components/pin-button";
import { AiInsight } from "@/components/ai-insight";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { customerHealth } from "@/data/mock-cx";

const chartConfig = {
  green: { label: "Green", color: "#22c55e" },
  yellow: { label: "Yellow", color: "#eab308" },
  red: { label: "Red", color: "#ef4444" },
} satisfies ChartConfig;

export function CustomerHealthChart() {
  return (
    <div className="rounded-xl border border-border-subtle bg-card">
      <div className="flex items-start justify-between px-6 pt-6 pb-1">
        <h3 className="text-base font-semibold text-foreground">
          Customer Health
        </h3>
        <PinButton chartId="customer-health" />
      </div>
      <p className="text-sm text-muted-foreground px-6">
        53 customers — Health score trend
      </p>
      <AiInsight>
        Green accounts nearly doubled since June (16 to 31) while red dropped by more than half — proactive engagement efforts are clearly moving the needle on customer health.
      </AiInsight>

      <div className="px-6 pb-6 pt-4">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <LineChart data={customerHealth} margin={{ left: 10 }}>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="green"
              type="monotone"
              stroke="var(--color-green)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="yellow"
              type="monotone"
              stroke="var(--color-yellow)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="red"
              type="monotone"
              stroke="var(--color-red)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
