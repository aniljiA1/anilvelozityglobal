import type { Task, Priority } from "../../types";

type Props = {
  task: Task;
  startDate: Date;
  endDate: Date;
};

const colors: Record<Priority, string> = {
  critical: "bg-red-500",
  high: "bg-orange-500",
  medium: "bg-yellow-500",
  low: "bg-green-500",
};

export default function TaskBar({ task, startDate, endDate }: Props) {
  const taskStart = new Date(task.startDate);
  const taskEnd = new Date(task.dueDate);

  const totalDuration = endDate.getTime() - startDate.getTime();

  const left =
    ((taskStart.getTime() - startDate.getTime()) / totalDuration) * 100;

  const width =
    ((taskEnd.getTime() - taskStart.getTime()) / totalDuration) * 100;

  return (
    <div
      className={`absolute h-6 rounded-md ${colors[task.priority]} flex items-center`}
      style={{
        left: `${left}%`,
        width: `${width}%`,
      }}
    >
      <span className="text-xs text-white px-2 truncate">{task.title}</span>
    </div>
  );
}
