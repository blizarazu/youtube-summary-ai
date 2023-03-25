import { SUMMARY_TYPES } from '@/config/summary-types';
import { LANGUAGES } from "@/config/languages";
import { DEFAULT, PROMPTS } from '@/config/prompts';

export async function buildPrompt(transcription: string, lang = '', type = SUMMARY_TYPES[0].value) {
    if (!transcription) throw new Error("Transcriptions is required")

    const langName = LANGUAGES.find(language => language.code === lang)

    const langPrompts = PROMPTS.find(p => p.lang === langName?.code)
    const prompts = langPrompts ? langPrompts.types : DEFAULT;
    const { prompt } = prompts.find(p => p.type === type) || {};

    if (!prompt)
        throw new Error("Invalid summary type")

    return [
        {
            role: 'system',
            content: prompt
        },
        { role: 'user', content: transcription }
    ]
}
