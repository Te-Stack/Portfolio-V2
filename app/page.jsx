import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Project from './components/Projects/Projects'



export default function Home() {
  return (
    <main >
        <Hero/>
        <Project img="/Project-pics-1.png" h2="S.T.O.R.E" p="E.Commerce Website" />
        <Project img="/Project-pics-2.png" h2="Student's Finance Club" p="Organisational Website "  />
        <Project className="contentLong" img="/React-Native-1.png" h2="Job Application App" p="Mobile Application "  />
      
    </main>
  )
}


