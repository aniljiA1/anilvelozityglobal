import { useState } from "react";
import type { Task } from "../types";

type SortKey = "title" | "priority" | "dueDate";
type SortOrder = "asc" | "desc";

export function useSort(tasks: Task[]) {
  const [sortKey, setSortKey] = useState<SortKey>("title");
  const [order, setOrder] = useState<SortOrder>("asc");

  const toggleSort = (key: SortKey) => {
    setSortKey((prevKey) => {
      if (prevKey === key) {
        setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
        return prevKey;
      } else {
        setOrder("asc");
        return key;
      }
    });
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortKey === "title") {
      return order === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }

    if (sortKey === "priority") {
      const map = {
        critical: 4,
        high: 3,
        medium: 2,
        low: 1,
      };

      return order === "asc"
        ? map[b.priority] - map[a.priority]
        : map[a.priority] - map[b.priority];
    }

    if (sortKey === "dueDate") {
      return order === "asc"
        ? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        : new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
    }

    return 0;
  });

  return { sortedTasks, toggleSort, sortKey, order };
}
