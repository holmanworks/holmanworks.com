import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { Thumbnail } from '@components/Thumbnail'
import { Benefits } from '@components/Benefits'
import { redirect } from 'next/navigation'

export default function Home() {

  return (
    <>      
    <main>

      <Header />
      <Thumbnail />
      <Footer />
  
      </main>
    </>
  )
}
