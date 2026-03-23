export function formatDueDate(date: string) {
  const d = new Date(date);
  const today = new Date();

  const diff = (today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);

  if (diff > 7) return `${Math.floor(diff)} days overdue`;
  if (diff > 0) return "Overdue";
  if (diff === 0) return "Due Today";

  return d.toLocaleDateString();
}
