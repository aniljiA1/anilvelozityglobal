import TaskCard from "./TaskCard";
import type { Task, Status } from "../../types";

type ColumnProps = {
  title: string;
  status: Status;
  tasks: Task[];
  onDrop: (status: Status) => void;
  onDragStart: (id: string) => void;
};

export default function Column({
  title,
  status,
  tasks,
  onDrop,
  onDragStart,
}: ColumnProps) {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDrop(status)}
      className="w-72 bg-gray-100 p-4 rounded-xl shadow-md flex flex-col max-h-[80vh]"
    >
      {/* Header */}
      <h2 className="text-lg font-semibold mb-3 flex justify-between">
        <span>{title}</span>
        <span className="text-sm text-gray-500">{tasks.length}</span>
      </h2>

      {/* Task List */}
      <div className="flex flex-col gap-3 overflow-y-auto">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDragStart={onDragStart} />
        ))}
      </div>
    </div>
  );
}
