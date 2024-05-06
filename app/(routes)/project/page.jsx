import Project from "@/app/components/Projects/Projects";
import project1 from "../../../public/Project-pics-1.png"
import project2 from "../../../public/Project-pics-2.png"
import project3 from "../../../public/React-Native-1.png"

const Projects = () => {
    return ( 
        <div>
            <div className="projectpage">
                <div>
                <h1>Projects</h1>
                <p>Discover prestigious projects</p>

                </div>
                

            </div>
            <Project img={project1} h2="S.T.O.R.E" p="E.Commerce Website" href="/project/project-details/1" />
            <Project img={project2} h2="Student's Finance Club" p="Organisational Website " href="/project/project-details/2" />
            <Project  img={project3} h2="Job Application App" p="Mobile Application " href="/project/project-details/3"  />



        </div>
     );
}
 
export default Projects;