"use client";

import { Pin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInsightsTab } from "@/components/insights-tab-context";

interface PinButtonProps {
  chartId: string;
}

export function PinButton({ chartId }: PinButtonProps) {
  const { isPinned, togglePin } = useInsightsTab();
  const pinned = isPinned(chartId);

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`h-8 w-8 ${pinned ? "text-primary" : "text-muted-foreground"}`}
      onClick={() => togglePin(chartId)}
      aria-label={pinned ? "Unpin from My View" : "Pin to My View"}
    >
      <Pin className={`h-3.5 w-3.5 ${pinned ? "fill-primary" : ""}`} />
    </Button>
  );
}
