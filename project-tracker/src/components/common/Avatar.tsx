export default function Avatar({ name }: { name: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
      {name}
    </div>
  );
}
