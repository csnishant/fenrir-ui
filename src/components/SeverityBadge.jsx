export default function SeverityBadge({ type, count }) {
  const colors = {
    critical: "bg-critical text-white",
    high: "bg-high text-white",
    medium: "bg-medium text-white",
    low: "bg-low text-white"
  }

  return (
    <span className={`px-2 py-1 text-xs rounded ${colors[type]}`}>
      {count}
    </span>
  )
}