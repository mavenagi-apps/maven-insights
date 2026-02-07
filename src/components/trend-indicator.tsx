import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendIndicatorProps {
  value: string;
  direction: "up" | "down" | "neutral";
  label: string;
}

export function TrendIndicator({ value, direction, label }: TrendIndicatorProps) {
  const Icon =
    direction === "up"
      ? TrendingUp
      : direction === "down"
        ? TrendingDown
        : Minus;

  return (
    <div className="flex items-center gap-1.5 pt-2">
      <Icon
        className={cn(
          "h-3.5 w-3.5",
          direction === "up" && "text-trend-positive",
          direction === "down" && "text-trend-negative",
          direction === "neutral" && "text-muted-foreground"
        )}
      />
      <span
        className={cn(
          "text-xs font-medium",
          direction === "up" && "text-trend-positive",
          direction === "down" && "text-trend-negative",
          direction === "neutral" && "text-muted-foreground"
        )}
      >
        {value}
      </span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}
