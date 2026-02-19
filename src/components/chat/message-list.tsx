"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useChat } from "@/hooks/use-chat";
import { ChatMessage } from "./chat-message";
import { EmptyState } from "./empty-state";
import { Button } from "@/components/ui/button";

export function MessageList() {
  const { state } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const hasMessages = state.messages.length > 0;

  // Auto-scroll to bottom on new messages / streaming
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 100;
    if (isNearBottom) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [state.messages]);

  // Track scroll position to show/hide scroll-to-bottom button
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function handleScroll() {
      if (!el) return;
      const distanceFromBottom =
        el.scrollHeight - el.scrollTop - el.clientHeight;
      setShowScrollButton(distanceFromBottom > 200);
    }
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToBottom() {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  if (!hasMessages) {
    return <EmptyState />;
  }

  return (
    <div ref={containerRef} className="chat-scrollbar relative flex-1 overflow-y-auto">
      <div className="flex flex-col py-2">
        {state.messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={bottomRef} />
      </div>

      {showScrollButton && (
        <div className="sticky bottom-3 flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToBottom}
            className="gap-1 rounded-full shadow-md"
            aria-label="Scroll to bottom"
          >
            <ArrowDown className="size-3.5" />
          </Button>
        </div>
      )}
    </div>
  );
}
