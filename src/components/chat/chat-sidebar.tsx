"use client";

import { useChat } from "@/hooks/use-chat";
import {
  Sheet,
  SheetContent,
  SheetDescription,
} from "@/components/ui/sheet";
import { ChatHeader } from "./chat-header";
import { MessageList } from "./message-list";
import { ChatInput } from "./chat-input";

export function ChatSidebar() {
  const { state, closeSidebar } = useChat();

  return (
    <Sheet open={state.isOpen} onOpenChange={(open) => !open && closeSidebar()}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[420px] max-w-full p-0 sm:max-w-[420px] gap-0"
      >
        <SheetDescription className="sr-only">
          Chat with Maven AGI assistant
        </SheetDescription>
        <ChatHeader />
        <MessageList />
        <ChatInput />
      </SheetContent>
    </Sheet>
  );
}
