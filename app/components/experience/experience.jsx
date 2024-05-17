"use client"
import Link from "next/link";
import "./experience.css"
import { easeIn, easeOut, motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";  

const Experience = () => {
  const control = useAnimation()
  const control1 = useAnimation()
    const [ref, inView] = useInView()
    const [ref1, inView1] = useInView()

    const boxVariant = {
        visible: { opacity: 1, scale:1,  easeIn, transition:{duration: 0.5} },
        hidden: { opacity: 0, scale: 0, easeOut },
      }
    const boxVariant2 = {
        visible: { opacity: 1, scale:1,  easeIn, transition:{duration: 0.5} },
        hidden: { opacity: 0, scale: 0, easeOut },
      }

      useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
            control.start("hidden");
          }
      }, [control, inView]);
      useEffect(() => {
        if (inView1) {
          control1.start("visible");
        } else {
            control1.start("hidden");
          }
      }, [control1, inView1]);
   
    
    return (  
        <div className="experience">
          <h1>Experience</h1>
          <p><Link href="https://drive.google.com/file/d/1gFqYISHgQNsjYmmYYlxvR0WQbMpyw311/view?usp=drive_link" target="__blank" >Download Resumes</Link></p>

          <motion.div variants={boxVariant} ref={ref} initial="hidden"
        animate={control} className="cv">
            <h3>Freelancing Software Developer/Technical Writer - Remote </h3>
            <small>APRIL 2023 - PRESENT </small>

            <div className="cvdetails">
            <p className="pb-4">Key Accomplishments:</p>
                  
                  <p><li>Wrote technical articles that surpassed over 10K views on platforms in turns increasing the usage of their
                  product.</li></p>
                  <p><li>Applied software engineering principles such as DRY, SOLID and KISS when building web and mobile application
                  for clients.</li></p>
                  <p><li>Search Engine Optimization (SEO) and Performance are taken into considerations when building software
                  products for clients by picking the right tool.</li></p>

            </div>

            
            
          </motion.div>
          <motion.div variants={boxVariant2} ref={ref1} initial="hidden"
        animate={control1} className="cv">
            <h3>Frontend Developer - PiHub - Remote </h3>
            <small>AUGUST 2022 – MARCH 2023 </small>

            <div className="cvdetails">
            <p className="pb-4">Key Accomplishments:</p>
                  
                  <p><li>Upgraded outdated packages and refractor codebase and design which in turn improved the user experience of
                  the site.</li></p>
                  <p><li>Ensure all software activities are conducted in accordance with the Software Development Life Cycle.</li></p>
                  <p><li>Wrote maintainable and readable code thus making it easy to work with other developers thereby increasing team work spirit in the workplace.</li></p>
                  <p><li>Work to mentor and challenge team members in turn improving the relationship between my colleagues.</li></p>
                  <p><li>Converted HTML, CSS codebase to Reactjs and SASS increasing the performance of the product by 20%.</li></p>

            </div>

            
            
          </motion.div>
          <div className="cv">
            <h3>Freelancing Web Consultant</h3>
            <small>AUGUST 2022 – MARCH 2023 </small>

            <div className="cvdetails">
            <p className="pb-4">Key Accomplishments:</p>
                  
                  <p><li>Upgraded outdated packages and refractor codebase and design which in turn improved the user experience of
                  the site.</li></p>
                  <p><li>Ensure all software activities are conducted in accordance with the Software Development Life Cycle.</li></p>
                  <p><li>Wrote maintainable and readable code thus making it easy to work with other developers thereby increasing team work spirit in the workplace.</li></p>
                  <p><li>Work to mentor and challenge team members in turn improving the relationship between my colleagues.</li></p>
                  <p><li>Converted HTML, CSS codebase to Reactjs and SASS increasing the performance of the product by 20%.</li></p>

            </div>

            
            
          </div>
          <div className="cv">
            <h3>Intern Frontend Developer - Migrants Solutions</h3>
            <small>AUGUST 2022 – MARCH 2023 </small>

            <div className="cvdetails">
            <p className="pb-4">Key Accomplishments:</p>
                  
                  <p><li>Upgraded outdated packages and refractor codebase and design which in turn improved the user experience of
                  the site.</li></p>
                  <p><li>Ensure all software activities are conducted in accordance with the Software Development Life Cycle.</li></p>
                  <p><li>Wrote maintainable and readable code thus making it easy to work with other developers thereby increasing team work spirit in the workplace.</li></p>
                  <p><li>Work to mentor and challenge team members in turn improving the relationship between my colleagues.</li></p>
                  <p><li>Converted HTML, CSS codebase to Reactjs and SASS increasing the performance of the product by 20%.</li></p>

            </div>

            
            
          </div>

          <h1>Education</h1>
          <div className="cv">
            <h3>Biochemistry (B.Sc) - University of Benin</h3>
            <small>JANUARY 2018 – DECEMBER 2022 </small>

            <div className="cvdetails">
            <p className="pb-4">Key Accomplishments:</p>
                  
                  <p><li>Upgraded outdated packages and refractor codebase and design which in turn improved the user experience of
                  the site.</li></p>
                  <p><li>Ensure all software activities are conducted in accordance with the Software Development Life Cycle.</li></p>
                  <p><li>Wrote maintainable and readable code thus making it easy to work with other developers thereby increasing team work spirit in the workplace.</li></p>
                  <p><li>Work to mentor and challenge team members in turn improving the relationship between my colleagues.</li></p>
                  <p><li>Converted HTML, CSS codebase to Reactjs and SASS increasing the performance of the product by 20%.</li></p>

            </div>

            
            
          </div>
        </div>
     );
}
 
export default Experience;