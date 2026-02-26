"use client";

import { useCallback, useState } from "react";

const MIN_COL_WIDTH = 60;

/**
 * Provides drag-to-resize state for table columns.
 *
 * Usage:
 *   const { widths, startResize } = useColumnResize(COLUMNS.length);
 *
 * On each <TableHead>:
 *   style={widths[i] !== undefined ? { width: widths[i], minWidth: widths[i] } : undefined}
 *
 * Inside each <TableHead>, add the drag handle:
 *   <div onMouseDown={(e) => startResize(i, e)} className="absolute right-0 top-0 h-full w-1 cursor-col-resize hover:bg-primary/20 active:bg-primary/40" />
 */
export function useColumnResize(count: number) {
  const [widths, setWidths] = useState<(number | undefined)[]>(() =>
    Array(count).fill(undefined)
  );

  const startResize = useCallback(
    (index: number, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const th = (e.currentTarget as HTMLElement).closest("th");
      const startX = e.clientX;
      // Use the rendered width of the th as the starting point so we always
      // begin from the actual current size regardless of prior state.
      const startWidth = th?.getBoundingClientRect().width ?? 120;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const newWidth = Math.max(
          MIN_COL_WIDTH,
          startWidth + moveEvent.clientX - startX
        );
        setWidths((prev) => {
          const next = [...prev];
          next[index] = newWidth;
          return next;
        });
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    []
  );

  return { widths, startResize };
}
