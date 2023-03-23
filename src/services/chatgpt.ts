import { LANGUAGES } from "@/config/languages";

export async function buildPrompt(transcription: string, lang = "") {
    if (!transcription) throw new Error("Transcriptions is required")

    const langName = LANGUAGES.find(language => language.code === lang)

    const langPrompt = langName ?
        `Es importante que hagas el resumen en ${langName.name}.` :
        "Es importante que hagas el resumen en el mismo idioma que el de la transcripción del vídeo."

    return [
        {
            role: 'system',
            content: `Asume que eres una persona capaz de sintetizar el contenido de un vídeo en un resumen de entorno a 100 palabras partiendo de la transcripción de dicho vídeo, que puede estar en cualquier idioma. Sólo genera el resumen sin ninguna otra explicación. ${langPrompt}`
        },
        { role: 'user', content: transcription }
    ]
}