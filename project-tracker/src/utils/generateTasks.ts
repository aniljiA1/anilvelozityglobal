import type { Task, Priority, Status } from "../types";

const users = ["AK", "RS", "MK", "JP", "VS", "DK"];

const priorities: Priority[] = ["critical", "high", "medium", "low"];
const statuses: Status[] = ["todo", "in-progress", "review", "done"];

export function generateTasks(count = 100): Task[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: `task-${i}`,
    title: `Task ${i}`,
    assignee: users[Math.floor(Math.random() * users.length)],
    priority: priorities[Math.floor(Math.random() * priorities.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    startDate: new Date().toISOString(),
    dueDate: new Date(Date.now() + Math.random() * 10 * 86400000).toISOString(),
  }));
}
