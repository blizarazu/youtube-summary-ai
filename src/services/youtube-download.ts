import { getSubtitles } from 'youtube-captions-scraper'
import { YOUTUBE_API_URL } from '@/config/consts';

const { YOUTUBE_API_KEY } = process.env

// export async function youtubeDownload(videoId: string, setProgress?: (progress: number) => void) {
//     return new Promise<string>((resolve, reject) => {
//         if (!ffmpeg) throw new Error('Ffmpeg not found')

//         const ytd = new YoutubeMp3Downloader({
//             ffmpegPath: ffmpeg,
//             outputPath: './',
//             youtubeVideoQuality: 'highestaudio',
//             queueParallelism: 2,
//             progressTimeout: 2000
//         })
//         ytd.download(videoId)
//         ytd.on('progress', (data) => {
//             if (setProgress)
//                 setProgress(data.progress.percentage)
//         })
//         ytd.on('finished', async (err, video) => {
//             if (err) return reject(err);

//             return resolve(video.file)
//         })
//     })
// }

export async function getYoutubeVideoLang(videoId: string) {
    if (!YOUTUBE_API_KEY) throw new Error('YouTube API key not found')

    const url = new URL('captions', YOUTUBE_API_URL);
    url.searchParams.append("part", "snippet")
    url.searchParams.append("videoId", videoId)
    url.searchParams.append("key", YOUTUBE_API_KEY)

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText)
    }

    const { items } = await response.json()
    const { snippet } = items.find((item: any) => item.snippet.trackKind === 'asr')
    const lang = snippet?.language ? snippet.language : items[0].language

    return lang
}

export async function youtubeCaptionDownload(videoID: string, lang = 'en') {
    try {
        const captions: Caption[] = await getSubtitles({
            videoID,
            lang
        });
        return captions.reduce<string>((text, caption) => text + caption.text, '')
    } catch (e) {
        throw new Error(`Error getting captions for video ${videoID} and language ${lang}`)
    }
}



