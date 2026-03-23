import { useState } from "react";

type Status = "todo" | "in-progress" | "review" | "done";

type UpdateTask = (id: string, updates: { status: Status }) => void;

export function useDrag(updateTask: UpdateTask) {
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const onDragStart = (id: string) => {
    setDraggedId(id);
  };

  const onDrop = (status: Status) => {
    if (!draggedId) return;

    updateTask(draggedId, { status });
    setDraggedId(null);
  };

  return { onDragStart, onDrop };
}
