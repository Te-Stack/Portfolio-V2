import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Project from './components/Projects/Projects'



export default function Home() {
  return (
    <main >
        <Hero/>
        <Project img="/Project-pics-1.png"  />
        <Project img="/Project-pics-2.png"  />
      
    </main>
  )
}


