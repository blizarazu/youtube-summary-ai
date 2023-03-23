import Head from 'next/head'
import { Blobs } from '@/components/Blobs'
import { LinkInput } from '@/components/LinkInput'
import { Preview } from '@/components/Preview'
import { LangSelector } from '@/components/LangSelector'

export default function Home() {
  return (
    <>
      <Head>
        <title>Youtube AI Summariser</title>
        <meta name="description" content="Generate a summary of a YouTube vide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black h-screen w-screen text-center pt-40'>
        <h1 className='bg-gradient-to-r via-gray text-6xl font-bold text-white'>
          Summarise YouTube Video
        </h1>
        <div className='flex flex-col justify-center w-3/5 mx-auto my-10'>
          <div className="mb-5 lg:w-60 md:w-1/2 w-full">
            <LangSelector></LangSelector>
          </div>
          <LinkInput></LinkInput>
          <div className='my-8'>
            <Preview />
          </div>
        </div>
        <Blobs />
      </main>
    </>
  )
}
