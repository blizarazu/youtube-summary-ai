import { LANGUAGES } from "@/config/languages";
import { useLinksStore } from "@/stores/link";
import { Select, SelectLabel, SelectOptions } from "./Select";

export function LangSelector({ className }: LabelSelectorProps) {
  const { lang, setLanguage, streaming } = useLinksStore((state) => ({
    lang: state.lang,
    setLanguage: state.setLang,
    streaming: state.streaming,
  }));

  const selected = LANGUAGES.find((f) => f.code === lang);

  function handleChange(event: any) {
    setLanguage(event.target.value);
  }

  return (
    <Select
      id="language"
      name="language"
      disabled={streaming}
      onChange={handleChange}
      value={selected?.code}
      className={className}
    >
      <SelectLabel htmlFor="language">Language for the summary</SelectLabel>
      <SelectOptions>
        <option value="">Same as video</option>
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.localicedName}
          </option>
        ))}
      </SelectOptions>
    </Select>
  );
}

type LabelSelectorProps = {
  className?: string;
};
