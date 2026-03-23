import { create } from "zustand";
import type { Task } from "../types";

interface TaskState {
  tasks: Task[];
  view: "kanban" | "list" | "timeline";
  setTasks: (tasks: Task[]) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  setView: (view: TaskState["view"]) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  view: "kanban",

  setTasks: (tasks) => set({ tasks }),

  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    })),

  setView: (view) => set({ view }),
}));
