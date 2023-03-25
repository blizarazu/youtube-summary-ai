import { Select, SelectLabel, SelectOptions } from "@/components/Select";
import { SUMMARY_TYPES } from "@/config/summary-types";
import { useLinksStore } from "@/stores/link";

export function TypeSelector({ className }: TypeSelectorProps) {
  const { type, setType, streaming } = useLinksStore((state) => ({
    type: state.type,
    setType: state.setType,
    streaming: state.streaming,
  }));

  const selected =
    SUMMARY_TYPES.find((t) => t.value === type) || SUMMARY_TYPES[0];

  function handleChange(event: any) {
    setType(event.target.value);
  }

  return (
    <Select
      id="summary_type"
      name="summary_type"
      disabled={streaming}
      onChange={handleChange}
      value={selected.value}
      className={className}
    >
      <SelectLabel htmlFor="summary_type">Summary type</SelectLabel>
      <SelectOptions>
        {SUMMARY_TYPES.map(({ value, name }) => (
          <option value={value} key={value}>
            {name}
          </option>
        ))}
      </SelectOptions>
    </Select>
  );
}

type TypeSelectorProps = {
  className?: string;
};
