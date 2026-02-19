"use client";

import { useChat } from "@/hooks/use-chat";
import branding from "@/config/chat-branding.json";
import { MessageSquare } from "lucide-react";

export function EmptyState() {
  const { sendMessage } = useChat();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
        <MessageSquare className="size-6 text-primary" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">
          {branding.welcomeTitle}
        </h3>
        <p className="text-sm text-muted-foreground">
          {branding.welcomeSubtitle}
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-xs">
        {branding.suggestedQuestions.map((question) => (
          <button
            key={question}
            type="button"
            onClick={() => sendMessage(question)}
            className="rounded-lg border border-border px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:bg-accent"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
