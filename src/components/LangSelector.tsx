import { LANGUAGES } from "@/config/languages";
import { useLinksStore } from "@/stores/link";
import { ChangeEvent } from "react";

export function LangSelector() {
  const { lang, setLanguage, streaming } = useLinksStore((state) => ({
    lang: state.lang,
    setLanguage: state.setLang,
    streaming: state.streaming,
  }));

  const selected = LANGUAGES.find((f) => f.code === lang);

  function handleChange(event: any) {
    console.log(event.target);
    setLanguage(event.target.value);
  }

  return (
    <>
      <label
        htmlFor="languages"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
      >
        Summary language
      </label>
      <select
        disabled={streaming}
        onChange={handleChange}
        value={selected?.code}
        id="language"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Same language as video</option>
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.localicedName}
          </option>
        ))}
      </select>
    </>
  );
}
