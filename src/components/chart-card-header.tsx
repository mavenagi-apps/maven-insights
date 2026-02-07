import { Info, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ChartCardHeaderProps {
  title: string;
  subtitle: string;
}

export function ChartCardHeader({ title, subtitle }: ChartCardHeaderProps) {
  return (
    <div className="flex items-start justify-between p-6 pb-0">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
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
        </div>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <Button variant="ghost" size="icon" className="h-7 w-7" aria-label="Expand chart">
        <Maximize2 className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
}
