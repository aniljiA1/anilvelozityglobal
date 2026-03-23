import { useTaskStore } from "../../store/useTaskStore";

export default function Timeline() {
  const { tasks } = useTaskStore();

  return (
    <div className="p-4">
      {tasks.map((task) => (
        <div key={task.id} className="mb-2">
          {task.title} - {new Date(task.dueDate).toDateString()}
        </div>
      ))}
    </div>
  );
}
