export const DEFAULT: PromptType[] = [
    {
        type: '100_words',
        prompt: `Assume that you are a person able to synthesize the content of a video from the transcript of the video. The summary has to be done in about 100 words with a margin of 15 words up or down. Just generate the summary without any further explanation or indication. Tell me in the same language in which the video transcript is written.`
    }, {
        type: '250_words',
        prompt: `Assume that you are a person able to synthesize the content of a video from the video transcript. The summary has to be done in about 250 words with a margin of 20 words up or down. Just generate the summary without any other explanation or indication. Tell me in the same language in which the video transcript is written.`
    }, {
        type: 'key_points',
        prompt: `Assume that you are a person able to synthesize the content of a video and list the key points discussed in that video from the transcript. Just generate the key points without any further explanation or indication. Tell me in the same language in which the video transcript is written.`
    }
]

export const PROMPTS: Prompt[] = [
    {
        lang: 'es',
        types: [
            {
                type: '100_words',
                prompt: `Asume que eres una persona capaz de sintetizar el contenido de un vídeo partiendo de la transcripción de dicho vídeo. El resumen tiene que estar hecho en unas 100 palabras con un margen de 15 palabras arriba o abajo. Tienes que mostrar el resumen en español aunque la transcripción esté en otro dioma. Sólo genera el resumen sin ninguna otra explicación ni indicación.`
            }, {
                type: '250_words',
                prompt: `Asume que eres una persona capaz de sintetizar el contenido de un vídeo partiendo de la transcripción de dicho vídeo. El resumen tiene que estar hecho en unas 250 palabras con un margen de 20 palabras arriba o abajo. Tienes que mostrar el resumen en español aunque la transcripción esté en otro dioma. Sólo genera el resumen sin ninguna otra explicación ni indicación.`
            }, {
                type: 'key_points',
                prompt: `Asume que eres una persona capaz de sintetizar el contenido de un vídeo y enumerar los puntos clave que se tratan en dicho vídeo partiendo de la transcripción. Tienes que mostrar esos putnos clave en español aunque la transcripción esté en otro dioma. Sólo genera los puntos clave sin ninguna otra explicación ni indicación.`
            }
        ]
    }, {
        lang: 'en',
        types: [
            {
                type: '100_words',
                prompt: `Assume that you are a person able to synthesise the content of a video from the transcript of the video. The summary has to be about 100 words with a margin of 15 words above or below. You have to show the summary in English even if the transcript is in another language. Just generate the summary without any other explanation or indication.`
            }, {
                type: '250_words',
                prompt: `Assume that you are a person able to synthesise the content of a video from the transcript of the video. The summary has to be about 250 words with a margin of 20 words above or below. You have to show the summary in English even if the transcript is in another language. Just generate the summary without any other explanation or indication.`
            }, {
                type: 'key_points',
                prompt: `Assume that you are a person who is able to synthesise the content of a video and list the key points covered in the video from the transcript. You have to show those key points in English even if the transcript is in another language. Just generate the key points without any further explanation or indication.`
            }
        ]
    }, {
        lang: 'fr',
        types: [
            {
                type: '100_words',
                prompt: `Supposez que vous êtes une personne capable de synthétiser le contenu d'une vidéo à partir de la transcription de la vidéo. Le résumé doit faire environ 100 mots avec une marge de 15 mots en plus ou en moins. Vous devez présenter le résumé en français même si la transcription est dans une autre langue. Il suffit de générer le résumé sans aucune autre explication ou indication.`
            }, {
                type: '250_words',
                prompt: `Supposez que vous êtes une personne capable de synthétiser le contenu d'une vidéo à partir de la transcription de la vidéo. Le résumé doit faire environ 250 mots avec une marge de 20 mots en plus ou en moins. Vous devez présenter le résumé en français même si la transcription est dans une autre langue. Il suffit de générer le résumé sans autre explication ou indication.`
            }, {
                type: 'key_points',
                prompt: `Supposons que vous soyez une personne capable de synthétiser le contenu d'une vidéo et de dresser la liste des points clés abordés dans la vidéo à partir de la transcription. Vous devez montrer ces points clés en français même si la transcription est dans une autre langue. Produisez simplement les points clés sans autre explication ou indication.`
            }
        ]
    }, {
        lang: 'de',
        types: [
            {
                type: '100_words',
                prompt: `Gehen Sie davon aus, dass Sie in der Lage sind, den Inhalt eines Videos anhand der Abschrift des Videos zusammenzufassen. Die Zusammenfassung muss etwa 100 Wörter umfassen, mit einem Spielraum von 15 Wörtern nach oben oder unten. Sie müssen die Zusammenfassung in deutscher Sprache darstellen, auch wenn das Transkript in einer anderen Sprache ist. Erstellen Sie einfach die Zusammenfassung ohne weitere Erklärungen oder Hinweise.`
            }, {
                type: '250_words',
                prompt: `Gehen Sie davon aus, dass Sie in der Lage sind, den Inhalt eines Videos anhand der Abschrift des Videos zusammenzufassen. Die Zusammenfassung muss etwa 250 Wörter umfassen, mit einer Marge von 20 Wörtern nach oben oder unten. Sie müssen die Zusammenfassung in deutscher Sprache darstellen, auch wenn das Transkript in einer anderen Sprache ist. Erstellen Sie einfach die Zusammenfassung ohne weitere Erklärungen oder Hinweise.`
            }, {
                type: 'key_points',
                prompt: `Nehmen wir an, Sie sind in der Lage, den Inhalt eines Videos zusammenzufassen und die wichtigsten Punkte, die in dem Video behandelt werden, anhand der Abschrift aufzulisten. Sie müssen diese Kernpunkte in deutscher Sprache wiedergeben, auch wenn die Abschrift in einer anderen Sprache ist. Geben Sie einfach die wichtigsten Punkte ohne weitere Erklärungen oder Hinweise an.`
            }
        ]
    }
]

type Prompt = {
    lang: string
    types: PromptType[]
}

type PromptType = {
    type: string
    prompt: string
}