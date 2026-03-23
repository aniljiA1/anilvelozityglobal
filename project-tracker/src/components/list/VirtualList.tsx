import { useTaskStore } from "../../store/useTaskStore";
import { useSort } from "../../hooks/useSort";
import TableRow from "./TableRow";

export default function VirtualList() {
  const { tasks } = useTaskStore();

  const { sortedTasks, toggleSort, sortKey, order } = useSort(tasks);

  return (
    <div className="p-4">
      {/* Table Header */}
      <div className="grid grid-cols-5 gap-3 p-3 border-b font-semibold bg-gray-50">
        <div onClick={() => toggleSort("title")} className="cursor-pointer">
          Title {sortKey === "title" && (order === "asc" ? "↑" : "↓")}
        </div>

        <div>Assignee</div>

        <div onClick={() => toggleSort("priority")} className="cursor-pointer">
          Priority {sortKey === "priority" && (order === "asc" ? "↑" : "↓")}
        </div>

        <div>Status</div>

        <div onClick={() => toggleSort("dueDate")} className="cursor-pointer">
          Due Date {sortKey === "dueDate" && (order === "asc" ? "↑" : "↓")}
        </div>
      </div>

      {/* Table Rows */}
      {sortedTasks.map((task) => (
        <TableRow key={task.id} task={task} />
      ))}
    </div>
  );
}
