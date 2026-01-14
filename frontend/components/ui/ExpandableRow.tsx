import { useState } from "react";

export default function ExpandableRow({
  title,
  badge,
  badgeColor,
  summary,
  details,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 flex justify-between items-start text-left hover:bg-gray-50"
      >
        <div>
          <div className="font-medium text-gray-900">{title}</div>
          <div className="text-sm text-gray-500">{summary}</div>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${badgeColor}`}
        >
          {badge}
        </span>
      </button>

      {open && <div className="px-4 pb-4 text-sm text-gray-600">{details}</div>}
    </div>
  );
}
