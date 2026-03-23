import type { Task } from "../../types";
import Dropdown from "../common/Dropdown";
import { useTaskStore } from "../../store/useTaskStore";

type Status = "todo" | "in-progress" | "review" | "done";

export default function TableRow({ task }: { task: Task }) {
  const { updateTask } = useTaskStore();

  return (
    <div className="grid grid-cols-5 gap-3 p-3 border-b text-sm items-center hover:bg-gray-50 transition">
      {/* Title */}
      <div className="font-medium text-gray-800">{task.title}</div>

      {/* Assignee */}
      <div className="text-gray-600">{task.assignee}</div>

      {/* Priority */}
      <div className="capitalize">{task.priority}</div>

      {/* Status Dropdown */}
      <Dropdown
        value={task.status}
        options={["todo", "in-progress", "review", "done"]}
        onChange={(val: string) =>
          updateTask(task.id, { status: val as Status })
        }
      />

      {/* Due Date */}
      <div className="text-gray-500">
        {new Date(task.dueDate).toLocaleDateString()}
      </div>
    </div>
  );
}
