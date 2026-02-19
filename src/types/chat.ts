export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: CitationSource[];
  feedback?: "up" | "down" | null;
  isStreaming?: boolean;
}

export interface CitationSource {
  title: string;
  url: string;
}

export interface ChatState {
  messages: ChatMessage[];
  isOpen: boolean;
  isStreaming: boolean;
  conversationId: string;
  error: string | null;
}

export type ChatAction =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "ADD_MESSAGE"; message: ChatMessage }
  | { type: "APPEND_STREAM"; messageId: string; content: string }
  | { type: "UPDATE_MESSAGE"; messageId: string; updates: Partial<ChatMessage> }
  | { type: "SET_STREAMING"; isStreaming: boolean }
  | { type: "SET_ERROR"; error: string | null }
  | { type: "CLEAR_MESSAGES" }
  | { type: "SET_CONVERSATION_ID"; conversationId: string };

export interface ChatContextValue {
  state: ChatState;
  sendMessage: (content: string) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
  clearMessages: () => void;
  setFeedback: (messageId: string, feedback: "up" | "down" | null) => void;
}
