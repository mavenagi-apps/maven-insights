"use client";

export function ThinkingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <span className="thinking-dot size-2 rounded-full bg-muted-foreground/60" />
      <span className="thinking-dot size-2 rounded-full bg-muted-foreground/60 [animation-delay:150ms]" />
      <span className="thinking-dot size-2 rounded-full bg-muted-foreground/60 [animation-delay:300ms]" />
    </div>
  );
}
