import { useEffect } from "react";
import { useTaskStore } from "../store/useTaskStore";
import { generateTasks } from "../utils/generateTasks";
import Column from "../components/kanban/Column";
import { useDrag } from "../hooks/useDrag";
import VirtualList from "../components/list/VirtualList";
import Timeline from "../components/timeline/Timeline";

type Status = "todo" | "in-progress" | "review" | "done";

export default function Dashboard() {
  const { tasks, setTasks, updateTask, view, setView } = useTaskStore();
  const { onDragStart, onDrop } = useDrag(updateTask);

  useEffect(() => {
    setTasks(generateTasks(100));
  }, [setTasks]);

  const grouped: Record<Status, typeof tasks> = {
    todo: tasks.filter((t) => t.status === "todo"),
    "in-progress": tasks.filter((t) => t.status === "in-progress"),
    review: tasks.filter((t) => t.status === "review"),
    done: tasks.filter((t) => t.status === "done"),
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setView("kanban")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            view === "kanban"
              ? "bg-blue-500 text-white"
              : "bg-white border hover:bg-gray-100"
          }`}
        >
          Kanban
        </button>

        <button
          onClick={() => setView("list")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            view === "list"
              ? "bg-green-500 text-white"
              : "bg-white border hover:bg-gray-100"
          }`}
        >
          List
        </button>

        <button
          onClick={() => setView("timeline")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            view === "timeline"
              ? "bg-purple-500 text-white"
              : "bg-white border hover:bg-gray-100"
          }`}
        >
          Timeline
        </button>
      </div>

      {/* Views */}
      {view === "kanban" && (
        <div className="flex gap-6 overflow-x-auto pb-4">
          <Column
            title="To Do"
            status="todo"
            tasks={grouped.todo}
            onDrop={onDrop}
            onDragStart={onDragStart}
          />
          <Column
            title="In Progress"
            status="in-progress"
            tasks={grouped["in-progress"]}
            onDrop={onDrop}
            onDragStart={onDragStart}
          />
          <Column
            title="Review"
            status="review"
            tasks={grouped.review}
            onDrop={onDrop}
            onDragStart={onDragStart}
          />
          <Column
            title="Done"
            status="done"
            tasks={grouped.done}
            onDrop={onDrop}
            onDragStart={onDragStart}
          />
        </div>
      )}

      {view === "list" && (
        <div className="bg-white rounded-lg shadow p-4">
          <VirtualList />
        </div>
      )}

      {view === "timeline" && (
        <div className="bg-white rounded-lg shadow p-4">
          <Timeline />
        </div>
      )}
    </div>
  );
}
