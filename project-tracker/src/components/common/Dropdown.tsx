import { useState } from "react";

type DropdownProps = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export default function Dropdown({ value, options, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-white border border-gray-300 px-3 py-2 rounded-md shadow-sm text-left hover:border-gray-400 focus:outline-none"
      >
        {value}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="px-3 py-2 hover:bg-blue-50 cursor-pointer transition"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
