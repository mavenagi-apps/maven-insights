import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PageHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-5xl font-extrabold tracking-tight text-text-emphasis">
        MavenX
      </h1>
      <Button variant="outline" size="icon" className="h-8 w-8" aria-label="More options">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
}
