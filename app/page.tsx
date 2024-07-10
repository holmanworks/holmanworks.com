import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { HeroBanner } from '@components/Hero-Banner'
import { Steps } from '@components/Steps'
import { Benefits } from '@components/Benefits'
import { redirect } from 'next/navigation'

export default function Home() {

  return (
    <>      
    <main>

      <Header />
      <HeroBanner />
      <Benefits />
      <Steps />
      <Footer />
  
      </main>
    </>
  )
}
