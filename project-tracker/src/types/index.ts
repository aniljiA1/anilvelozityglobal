export type Priority = "critical" | "high" | "medium" | "low";

export type Status = "todo" | "in-progress" | "review" | "done";

export type Task = {
  id: string;
  title: string;
  assignee: string;
  priority: Priority;
  status: Status;
  startDate: string;
  dueDate: string;
};
