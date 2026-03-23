import { useState } from "react";

export function useVirtualScroll(total: number, rowHeight: number) {
  const [scrollTop, setScrollTop] = useState(0);
  const viewportHeight = 500;

  const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - 5);
  const endIndex = Math.min(
    total,
    Math.ceil((scrollTop + viewportHeight) / rowHeight) + 5
  );

  const totalHeight = total * rowHeight;

  return {
    startIndex,
    endIndex,
    setScrollTop,
    totalHeight,
  };
}