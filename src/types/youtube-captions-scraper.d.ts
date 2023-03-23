//youtube-captions-scraper.d.ts
declare module 'youtube-captions-scraper' {
    export function getSubtitles(opts: Options): Promise<Caption[]>
}

type Caption = {
    start: number,
    dur: number,
    text: string
}

type Options = {
    videoID: string,
    lang?: string
}