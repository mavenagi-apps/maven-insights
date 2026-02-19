"use client";

import Markdown from "react-markdown";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useChat } from "@/hooks/use-chat";
import { ThinkingIndicator } from "./thinking-indicator";
import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageType } from "@/types/chat";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { setFeedback } = useChat();
  const isUser = message.role === "user";
  const isEmptyAssistant =
    !isUser && message.isStreaming && message.content === "";

  return (
    <div className={cn("flex gap-3 px-4 py-3", isUser && "justify-end")}>
      <div
        className={cn(
          "max-w-[85%] rounded-xl px-4 py-2.5",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground"
        )}
      >
        {isEmptyAssistant ? (
          <ThinkingIndicator />
        ) : isUser ? (
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="chat-markdown prose prose-sm max-w-none text-sm">
            <Markdown>{message.content}</Markdown>
          </div>
        )}

        {!isUser && !message.isStreaming && message.content && (
          <div className="mt-2 flex items-center gap-1 border-t border-border/50 pt-2">
            <button
              type="button"
              aria-label="Thumbs up"
              onClick={() =>
                setFeedback(
                  message.id,
                  message.feedback === "up" ? null : "up"
                )
              }
              className={cn(
                "rounded-md p-1 transition-colors hover:bg-background/60",
                message.feedback === "up"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <ThumbsUp className="size-3.5" />
            </button>
            <button
              type="button"
              aria-label="Thumbs down"
              onClick={() =>
                setFeedback(
                  message.id,
                  message.feedback === "down" ? null : "down"
                )
              }
              className={cn(
                "rounded-md p-1 transition-colors hover:bg-background/60",
                message.feedback === "down"
                  ? "text-destructive"
                  : "text-muted-foreground"
              )}
            >
              <ThumbsDown className="size-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
