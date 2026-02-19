"use client";

import { MessageSquare } from "lucide-react";
import { useChat } from "@/hooks/use-chat";
import { Button } from "@/components/ui/button";

export function ChatTrigger() {
  const { openSidebar } = useChat();

  return (
    <Button
      onClick={openSidebar}
      className="fixed bottom-6 right-6 z-40 h-12 gap-2 rounded-full !px-[35px] shadow-lg"
      aria-label="Open chat"
    >
      <MessageSquare className="size-5 -scale-x-100" />
      <span className="text-sm font-medium">Chat</span>
    </Button>
  );
}
