import Hero from './components/Hero/Hero'
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects'
import What from './components/what/What'
import MoreFromMe from './components/MoreFromMe/MoreFromMe'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <What />
      <MoreFromMe />
    </main>
  )
}
