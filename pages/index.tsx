import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Hero from '../components/hero'

const Home: NextPage = () => {
  return (
    <div >
      <Header />
      <Hero />
      <Head>
        <title>Meet3Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



    

      <footer className="flex h-15 w-full items-center justify-center">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <b>Meet3Club</b>
        
        </a>
      </footer>
    </div>
  )
}

export default Home
