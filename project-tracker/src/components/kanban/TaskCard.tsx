import type { Task } from "../../types";
import Avatar from "../common/Avatar";
import Badge from "../common/Badge";

type TaskCardProps = {
  task: Task;
  onDragStart: (id: string) => void;
};

export default function TaskCard({ task, onDragStart }: TaskCardProps) {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(task.id)}
      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-grab active:cursor-grabbing border border-gray-100"
    >
      {/* Title */}
      <h3 className="font-semibold text-gray-800">{task.title}</h3>

      {/* Description (optional) */}
      {task.description && (
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center mt-3">
        <Avatar name={task.assignee} />
        <Badge priority={task.priority} />
      </div>
    </div>
  );
}
