import Project from "@/app/components/Projects/Projects";
import project1 from "../../../public/Project-pics-1.png"
import project2 from "../../../public/Project-pics-2.png"
import project3 from "../../../public/Port 1.png"
import project4 from "../../../public/Sms-dash.jpg"

import Button from "@/app/components/button/button";
import Link from "next/link";

const Projects = () => {
    
    return ( 
        <div>
            <div className="projectpage">
                <div>
                <h1>Projects</h1>
                

                </div>
                

            </div>
            <Project img={project4} h2="Student Management System" p="Student Management System" href="/project/project-details/SMS" />
            <Project img={project1} h2="S.T.O.R.E" p="E.Commerce Website" href="/project/project-details/Store" />
            <Project img={project2} h2="Student's Finance Club" p="Organisational Website " href="/project/project-details/Sfc" />
            <Project  img={project3} h2="Quincy Oghenetejiri Ukumakube" p=" Portfolio Website" href="/project/project-details/Quincy"  />
            <Link className="text-center mb-4" href="https://github.com/Te-Stack?tab=repositories" target="_blank">
            <Button value="View More Project" />


            </Link>




        </div>
     );
}
 
export default Projects;