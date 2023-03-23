import { useLinksStore } from "@/stores/link";

export function Preview() {
  const { summary } = useLinksStore(({ summary }) => ({ summary }));

  return <section className="overflow-hidden bg-white p-20 text-left stroke-gray-200 rounded-lg">{summary}</section>;
}
