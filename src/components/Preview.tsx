import { useLinksStore } from "@/stores/link";

export function Preview() {
  const { summary } = useLinksStore(({ summary }) => ({ summary }));

  return (
    <div className="overflow-hidden bg-white p-20 text-left stroke-gray-200 rounded-lg">
      {summary?.split("\n").map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
}
