import { Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TrendIndicator } from "@/components/trend-indicator";
import type { KpiCardData } from "@/types/dashboard";

export function KpiCard({ title, value, trendValue, trendDirection, trendLabel }: KpiCardData) {
  return (
    <Card className="bg-surface border-2 border-border-subtle">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-6 px-6">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-3.5 w-3.5 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>More info about {title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent className="px-6 pb-2">
        <div className="text-4xl font-extrabold tracking-tight text-text-emphasis">
          {value}
        </div>
        <TrendIndicator
          value={trendValue}
          direction={trendDirection}
          label={trendLabel}
        />
      </CardContent>
    </Card>
  );
}
