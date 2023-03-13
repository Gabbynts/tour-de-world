import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Service from '@/sections/Service'

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
      <main className='z-10 relative overflow-hidden '>
        <Hero />
        
        <About />
        
        <Service />
      </main>
    </Layout>
      
    </>
  )
}
