"use client";

import { Search, Calendar, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function GlobalFilterBar() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search"
          className="pl-9 border-border-normal"
        />
      </div>
      <Button variant="outline" className="gap-2 border-border-subtle shrink-0">
        <Calendar className="h-4 w-4" />
        <span className="font-semibold text-sm">May 12, 2025 - Jun 11, 2025</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
      <Button variant="outline" className="gap-2 border-border-subtle shrink-0">
        <span className="font-semibold text-sm">View by day</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  );
}
