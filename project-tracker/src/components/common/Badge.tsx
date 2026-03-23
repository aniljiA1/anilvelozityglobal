type Priority = "critical" | "high" | "medium" | "low";

type BadgeProps = {
  priority: Priority;
};

const colors: Record<Priority, string> = {
  critical: "bg-red-500",
  high: "bg-orange-500",
  medium: "bg-yellow-500",
  low: "bg-green-500",
};

export default function Badge({ priority }: BadgeProps) {
  return (
    <span
      className={`text-white px-2 py-1 text-xs rounded-full font-medium ${colors[priority]}`}
    >
      {priority}
    </span>
  );
}
