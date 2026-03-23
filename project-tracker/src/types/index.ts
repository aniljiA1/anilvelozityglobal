export type Priority = "critical" | "high" | "medium" | "low";

export type Status = "todo" | "in-progress" | "review" | "done";

export type Task = {
  id: string;
  title: string;
  description?: string; // optional
  assignee: string;
  priority: Priority;
  status: Status;
  startDate: string;
  dueDate: string;
};
