import { NextApiRequest, NextApiResponse } from "next";
import { getYoutubeVideoLang, youtubeCaptionDownload } from "@/services/youtube-download";
import { buildPrompt } from "@/services/chatgpt";
import { OPENAI_API_URL } from '@/config/consts'

const { OPENAI_API_KEY } = process.env

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end()

    let { videoid, lang } = req.query;
    videoid = videoid instanceof Array ? videoid[0] : videoid;
    lang = lang instanceof Array ? lang[0] : lang;

    if (!videoid) return res.status(400).json({ error: 'Link is required' })

    let transcription, reader;
    try {
        transcription = await getTranscription(videoid)

        if (!transcription) return res.status(400).end()

        reader = await getSummary(transcription, lang)
    } catch (e) {
        return res.status(500).json({ error: `Something went wrong: ${e}` });
    }

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        Connection: 'keep-alive',
        'Cache-Control': 'no-cache, no-transform',
        'Content-Encoding': 'none',
        'Content-Type': 'text/event-stream; charset=utf-8'
    })

    if (!reader)
        return res.end(`data: [DONE]\n\n`)

    const decoder = new TextDecoder('utf-8')

    while (true) {
        const { done, value } = await reader.read();

        if (done)
            return res.end('data: [DONE]\n\n')

        const chunk = decoder.decode(value)
        const transformedChunk = chunk.split('\n').filter(Boolean).map((line) => line.replace('data: ', '').trim())

        for (const data of transformedChunk) {
            if (data === '[DONE]')
                return res.end('data: [DONE]\n\n')

            try {
                const json = JSON.parse(data)
                const { content } = json.choices?.[0]?.delta
                content && res.write(`data: ${JSON.stringify(content)}\n\n`)
            } catch (error) {
                console.error(error)
            }
        }
    }
}

async function getTranscription(videoId: string) {
    const lang = await getYoutubeVideoLang(videoId)
    return youtubeCaptionDownload(videoId, lang);
}

async function getSummary(transcripition: string, lang?: string) {
    const messages = await buildPrompt(transcripition, lang);
    const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: messages,
            stream: true,
            stop: ['\ninfo:']
        })
    })

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText)
    }

    if (!response?.body)
        throw new Error("Unknown error. No AI response.")

    return response.body?.getReader();
}