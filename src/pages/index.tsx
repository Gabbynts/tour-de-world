import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Service from '@/sections/Service'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Layout>
      <Head>
        <title>Tour De World</title>
        <meta name="TourDeWorld" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <main className='z-10'>
        <Hero />
        
        <About />
        
        <Service />
      </main>
    </Layout>
      
    </>
  )
}
