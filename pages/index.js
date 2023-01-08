import Head from 'next/head'
import About from '../components/About'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Hero from "../components/Haro"
import Navbar from '../components/Navbar'
import Services from "../components/Services"


export default function Home() {
  return (
    <>
      <Head>
        <title>Tahmid Ahmed Portfolio</title>
        <meta name="description" content="Tahmid Ahmed Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative overflow-x-hidden text-white'>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Footer />
      </main>
    </>
  )
}
