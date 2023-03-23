import fs from 'fs';
import { Deepgram } from '@deepgram/sdk'
import { PrerecordedTranscriptionOptions, TranscriptionSource } from '@deepgram/sdk/dist/types';

const { DEEPGRAM_API_KEY } = process.env

export async function getDeepgramTranscription(filePath: string) {
    if (!DEEPGRAM_API_KEY) throw new Error("Deepgram API key is required")

    if (!filePath) throw new Error("File path is required")

    const file: TranscriptionSource = {
        buffer: fs.readFileSync(filePath),
        mimetype: 'audio/mp3'
    }
    const options: PrerecordedTranscriptionOptions = {
        punctuate: true,
        detect_language: true
    }

    const deepgram = new Deepgram(DEEPGRAM_API_KEY)

    const result = await deepgram.transcription.preRecorded(file, options)
    return result.results?.channels[0].alternatives[0].transcript
}