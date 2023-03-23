import { create } from "zustand";
import { APIS } from '@/config/consts'

export const useLinksStore = create<LinkStore>((set, get) => ({
  summary: null,
  streaming: false,
  link: '',
  lang: '',
  setLink: (link) => {
    set({ summary: null, link })
  },
  setLang: (lang) => {
    set({ summary: null, lang })
  },
  generateSummary: async (link, lang?) => {
    set({ streaming: true });

    const videoId = link.split('v=')[1]?.split('&')[0];

    let url = `${APIS.GENERATE}?videoid=${videoId}`
    if (lang)
      url += `&lang=${lang}`

    const eventSource = new EventSource(url)
    let summary = ''

    eventSource.onerror = (error) => {
      console.error(error)
      eventSource.close()
      set(() => ({ streaming: false }));
    }

    eventSource.onmessage = (event) => {
      const { data } = event

      if (data === '[DONE]') {
        set(() => ({ streaming: false }))

        eventSource.close()
        return
      }

      summary += JSON.parse(data)
      set(() => ({ summary }))
    }
  },
}));

type LinkStore = {
  summary: string | null
  streaming: boolean
  link: string
  lang: string
  setLink(link: string): any
  setLang(lang: string): any
  generateSummary(link: string, lang?: string): any
}