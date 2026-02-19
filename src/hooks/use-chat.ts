"use client";

import { useContext } from "react";
import { ChatContext } from "@/components/chat/chat-provider";
import type { ChatContextValue } from "@/types/chat";

export function useChat(): ChatContextValue {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
