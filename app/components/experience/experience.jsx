"use client"
import Link from "next/link";
import "./experience.css"
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const Experience = () => {
   
    
    return ( 
        <div className="experience">
          <h1>Experience</h1>
          <p><Link href="https://drive.google.com/file/d/1gFqYISHgQNsjYmmYYlxvR0WQbMpyw311/view?usp=drive_link" target="__blank" >Download Resume</Link></p>

          <div>
            <h3>Software Developer/Technical -- Freelancing Remote </h3>
            <small>April 2023 - Present </small>

            <h5>Key Accomplishments</h5>
                  
            <p><li>Wrote technical articles that surpassed over 10K views on platforms in turns increasing the usage of their
            product.</li></p>
            <p><li>Applied software engineering principles such as DRY, SOLID and KISS when building web and mobile application
            for clients.</li></p>
            <p><li>Search Engine Optimization (SEO) and Performance are taken into considerations when building software
            products for clients by picking the right tool.</li></p>
            
          </div>
        </div>
     );
}
 
export default Experience;