import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AiInsightProps {
  children: string;
  className?: string;
}

export function AiInsight({ children, className }: AiInsightProps) {
  return (
    <div className={cn("flex items-start gap-2 px-6 pb-1", className)}>
      <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
      <p className="text-sm italic text-muted-foreground">{children}</p>
    </div>
  );
}
