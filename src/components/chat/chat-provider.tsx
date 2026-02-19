"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import type {
  ChatAction,
  ChatContextValue,
  ChatState,
} from "@/types/chat";
import { getMatchedResponse } from "@/data/chat-responses";

const STREAM_INTERVAL_MS = 18;

const initialState: ChatState = {
  messages: [],
  isOpen: false,
  isStreaming: false,
  conversationId: crypto.randomUUID(),
  error: null,
};

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.message] };
    case "APPEND_STREAM":
      return {
        ...state,
        messages: state.messages.map((msg) =>
          msg.id === action.messageId
            ? { ...msg, content: msg.content + action.content }
            : msg
        ),
      };
    case "UPDATE_MESSAGE":
      return {
        ...state,
        messages: state.messages.map((msg) =>
          msg.id === action.messageId ? { ...msg, ...action.updates } : msg
        ),
      };
    case "SET_STREAMING":
      return { ...state, isStreaming: action.isStreaming };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "CLEAR_MESSAGES":
      return {
        ...state,
        messages: [],
        conversationId: crypto.randomUUID(),
        error: null,
      };
    case "SET_CONVERSATION_ID":
      return { ...state, conversationId: action.conversationId };
    default:
      return state;
  }
}

export const ChatContext = createContext<ChatContextValue | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const openSidebar = useCallback(() => dispatch({ type: "OPEN" }), []);
  const closeSidebar = useCallback(() => dispatch({ type: "CLOSE" }), []);
  const toggleSidebar = useCallback(() => {
    dispatch(state.isOpen ? { type: "CLOSE" } : { type: "OPEN" });
  }, [state.isOpen]);

  const clearMessages = useCallback(
    () => dispatch({ type: "CLEAR_MESSAGES" }),
    []
  );

  const setFeedback = useCallback(
    (messageId: string, feedback: "up" | "down" | null) => {
      dispatch({
        type: "UPDATE_MESSAGE",
        messageId,
        updates: { feedback },
      });
    },
    []
  );

  const sendMessage = useCallback(
    (content: string) => {
      if (state.isStreaming || !content.trim()) return;

      const userMessage = {
        id: crypto.randomUUID(),
        role: "user" as const,
        content: content.trim(),
      };
      dispatch({ type: "ADD_MESSAGE", message: userMessage });

      const assistantId = crypto.randomUUID();
      const assistantMessage = {
        id: assistantId,
        role: "assistant" as const,
        content: "",
        isStreaming: true,
      };
      dispatch({ type: "ADD_MESSAGE", message: assistantMessage });
      dispatch({ type: "SET_STREAMING", isStreaming: true });

      const fullResponse = getMatchedResponse(content);
      let charIndex = 0;

      const interval = setInterval(() => {
        // Stream 2-4 characters at a time for natural feel
        const chunkSize = Math.floor(Math.random() * 3) + 2;
        const chunk = fullResponse.slice(charIndex, charIndex + chunkSize);
        charIndex += chunkSize;

        if (chunk) {
          dispatch({
            type: "APPEND_STREAM",
            messageId: assistantId,
            content: chunk,
          });
        }

        if (charIndex >= fullResponse.length) {
          clearInterval(interval);
          dispatch({
            type: "UPDATE_MESSAGE",
            messageId: assistantId,
            updates: { isStreaming: false },
          });
          dispatch({ type: "SET_STREAMING", isStreaming: false });
        }
      }, STREAM_INTERVAL_MS);
    },
    [state.isStreaming]
  );

  // Keyboard shortcut: Cmd+/ or Ctrl+/
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        dispatch(state.isOpen ? { type: "CLOSE" } : { type: "OPEN" });
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state.isOpen]);

  return (
    <ChatContext.Provider
      value={{
        state,
        sendMessage,
        toggleSidebar,
        closeSidebar,
        openSidebar,
        clearMessages,
        setFeedback,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
