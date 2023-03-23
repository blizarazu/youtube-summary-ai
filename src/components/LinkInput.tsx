import { SyntheticEvent, useRef, useEffect } from "react";
import { SendIcon } from "@/components/Icons";
import { useLinksStore } from "@/stores/link";
import { Loading } from "./Loading";

export function LinkInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const generateSummary = useLinksStore((state) => state.generateSummary);
  const setLink = useLinksStore((state) => state.setLink);
  const streaming = useLinksStore((state) => state.streaming);
  const link = useLinksStore((state) => state.link);
  const lang = useLinksStore((state) => state.lang);

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    generateSummary(link, lang);
  }

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          value={link}
          onChange={(event) => {
            const { value } = event.target;
            setLink(value);
          }}
          disabled={streaming}
          ref={inputRef}
          autoFocus
          placeholder="Enter YouTube video link"
          name="link"
          type="text"
          className={`resize-none pr-10 placeholder-white/30 rounded-2xl block w-full text-md px-6 text-xl py-4 border border-zinc-600 bg-white/5 backdrop-blur-3xl sm:text-md shadow-lg text-white outline-none overflow-hidden transition ring-white/40 focus:ring-2`}
        ></input>
        <div className="absolute right-4 top-0 h-full flex justify-center items-center">
          {streaming ? (
            <Loading />
          ) : (
            <button className="transition-all hover:scale-125" type="submit">
              <SendIcon />
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
