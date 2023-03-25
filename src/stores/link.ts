import { create } from "zustand";
import { APIS } from '@/config/consts'

export const useLinksStore = create<LinkStore>((set, get) => ({
  summary: null,
  streaming: false,
  link: '',
  lang: '',
  type: '',
  setLink: (link) => {
    set({ summary: null, link })
  },
  setLang: (lang) => {
    set({ summary: null, lang })
  },
  setType: (type) => {
    set({ summary: null, type })
  },
  generateSummary: async (link, lang?, type?) => {
    set({ streaming: true });

    const videoId = link.split('v=')[1]?.split('&')[0];

    let url = `${APIS.GENERATE}?videoid=${videoId}`
    if (lang)
      url += `&lang=${lang}`
    if (type)
      url += `&type=${type}`

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
  type: string
  setLink(link: string): void
  setLang(lang: string): void
  setType(type: string): void
  generateSummary(link: string, lang?: string, type?: string): void
}