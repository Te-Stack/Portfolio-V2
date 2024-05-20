"use client"
import Link from "next/link";
import "./experience.css"
import { delay, easeIn, easeOut, motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useState,useEffect } from "react";  
import Button from "../button/button";
import Image from "next/image";

const Experience = () => {
  const [scrollPosition, setScrollPosition] = useState(0);


  const controls = useAnimation();
  const control = useAnimation()
  const control1 = useAnimation()
  const control2 = useAnimation()
  const control3 = useAnimation()
  const control4 = useAnimation()


    const [ref, inView] = useInView()
    const [ref1, inView1] = useInView()
    const [ref2, inView2] = useInView()
    const [ref3, inView3] = useInView()
    const [ref4, inView4] = useInView()

    const boxVariant = {
        visible: { opacity: 1,y:-40,  transition:{delay: 0.7, ease:easeIn, duration:1}},
        hidden: { opacity: 0,y:40, transition:{duration:0.2, ease:easeOut} },
      }
    // const boxVariant2 = {
    //     visible: { opacity: 1, easeIn, transition:{duration: 1} },
    //     hidden: { opacity: 0,},
    //   }

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
      }, [control, inView1]);

      useEffect(() => {
        if (inView2) {
          control2.start("visible");
        } else {
            control2.start("hidden");
          }
      }, [control2, inView2]);

      useEffect(() => {
        if (inView3) {
          control3.start("visible");
        } else {
            control3.start("hidden");
          }
      }, [control3, inView3]);

      useEffect(() => {
        if (inView4) {
          control4.start("visible");
        } else {
            control4.start("hidden");
          }
      }, [control3, inView4]);

      // Function to handle scroll event
  const handleScroll = async () => {
    if (window.scrollY > 100) { // Adjust threshold as needed
      await controls.start({
        scaleX: window.scrollY / 500, // Adjust scaling factor as needed
        transition: { duration: 0.5 },
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (  
        <div className="experience">
          <h1>Experience</h1>
          <Link href="https://drive.google.com/file/d/1gFqYISHgQNsjYmmYYlxvR0WQbMpyw311/view?usp=drive_link" target="_blank"><Button value="Download Resume" /></Link>
          <div className="flex justify-evenly">
            <div className="circl p-4 m-4">
            <motion.svg width="200" height="200" viewBox="0 0 200 20" fill="#F15827" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="75"
          y1="50"
          x2="50" // Use progress to control the end position of the line
          y2={controls.progress * 100}
          stroke="#F15827"
          strokeWidth="5"
          animate={controls}
        />
    </motion.svg>
              
            

          </div>
         

            <div>
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
          <motion.div variants={boxVariant} ref={ref1} initial="hidden"
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
          <motion.div variants={boxVariant} ref={ref2} initial="hidden"
        animate={control2} className="cv">
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

            
            
          </motion.div>
          <motion.div variants={boxVariant} ref={ref3} initial="hidden"
        animate={control3} className="cv">
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

            
            
          </motion.div>

            </div>

          </div>
          

          <h1>Education</h1>
          <motion.div variants={boxVariant} ref={ref4} initial="hidden"
        animate={control4} className="cv">
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

            
            
          </motion.div>
        </div>
     );
}
 
export default Experience;