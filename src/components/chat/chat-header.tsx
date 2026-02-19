"use client";

import { RotateCcw, X } from "lucide-react";
import { useChat } from "@/hooks/use-chat";
import { MavenLogo } from "@/components/maven-logo";
import { Button } from "@/components/ui/button";
import { SheetTitle } from "@/components/ui/sheet";

export function ChatHeader() {
  const { clearMessages, closeSidebar } = useChat();

  return (
    <div className="flex items-center justify-between border-b border-border px-4 py-3">
      <SheetTitle asChild>
        <div>
          <MavenLogo />
        </div>
      </SheetTitle>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={clearMessages}
          aria-label="Reset conversation"
        >
          <RotateCcw className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={closeSidebar}
          aria-label="Close chat"
        >
          <X className="size-4" />
        </Button>
      </div>
    </div>
  );
}
