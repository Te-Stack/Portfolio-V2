import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Project from './components/Projects/Projects'
import Why from './components/why/Why'
import project1 from "../public/Project-pics-1.png"
import project2 from "../public/Project-pics-2.png"
import project3 from "../public/React-Native-1.png"
import What from './components/what/What'
import MyComponent from './components/parallax/Parallax'
import Blog from './components/blog/blog'
import Dream from './components/dream/Dream'



export default function Home() {
  return (
    <main >
        <Hero/>
        <Project img={project1} h2="S.T.O.R.E" p="E.Commerce Website" href="/project/project-details/Store"  />
        <Project img={project2} h2="Student's Finance Club" p="Organisational Website and omo" href="/project/project-details/Sfc"   />
        <Project  img={project3} h2="Job Application App" p="Mobile Application " href="/project/project-details/Job"  />
        <MyComponent/>
        {/* <Why/> */}
        <What/>
        <Blog/>
        <Dream/>

        
        
      
    </main>
  )
}


