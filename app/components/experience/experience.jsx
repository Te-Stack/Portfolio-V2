"use client"
import Link from "next/link";
import "./experience.css"
import { delay, easeIn, easeOut, motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useState,useEffect } from "react";  
import Button from "../button/button";
import Image from "next/image";

const Experience = () => {
  

  const controls = useAnimation();
  const control = useAnimation()
  const control1 = useAnimation()
  const control2 = useAnimation()
  const control3 = useAnimation()
  const control4 = useAnimation()
  const control5 = useAnimation()


    const [ref, inView] = useInView()
    const [ref1, inView1] = useInView()
    const [ref2, inView2] = useInView()
    const [ref3, inView3] = useInView()
    const [ref4, inView4] = useInView()
    const [ref5, inView5] = useInView()

    const boxVariant = {
        visible: { opacity: 1,y:-40,  transition:{delay: 0.7, ease:easeIn, duration:1}},
        hidden: { opacity: 0,y:40, transition:{duration:0.2, ease:easeOut} },
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
      }, [control4, inView4]);
      useEffect(() => {
        if (inView5) {
          control5.start("visible");
        } else {
            control5.start("hidden");
          }
      }, [control5, inView5]);

     
    return (  
        <div className="experience">
          <h1>Experience</h1>
          <Link href="https://drive.google.com/file/d/1CWZugv63oCor673VvXy2cw04fTqPVdrc/view?usp=sharing" target="_blank"><Button value="Download Resume" /></Link>  
 
            <div className="pt-10 px-6 md:p-14">
            <motion.div variants={boxVariant} ref={ref} initial="hidden"
        animate={control} className="cv">
            <h3>Freelancing Software Developer/Technical Writer - Remote </h3>
            <small>AUGUST 2024 - PRESENT </small>

          
            

            <div className="cvdetails">
            <p className="pb-4">Key Accomplishments:</p>
                  
                  <li>Wrote technical articles that surpassed over 10K views on platforms in turns increasing the usage of their
                  product.</li>
                  <li>Applied software engineering principles such as DRY, SOLID and KISS when building web and mobile application
                  for clients.</li>
                  <li>Search Engine Optimization (SEO) and Performance are taken into considerations when building software
                  products for clients by picking the right tool.</li>

            </div>

            
          </motion.div>
          <motion.div variants={boxVariant} ref={ref1} initial="hidden"
        animate={control1} className="cv">
            <h3>Frontend Developer - PiHub - Remote </h3>
            <small>AUGUST 2022 – MARCH 2023 </small>

            <div className="cvdetails">
            <p className="pb-4">Key Accomplishments:</p>
                  
                  <li>Upgraded outdated packages and refractor codebase and design which in turn improved the user experience of
                  the site.</li>
                  <li>Ensure all software activities are conducted in accordance with the Software Development Life Cycle.</li>
                  <li>Wrote maintainable and readable code thus making it easy to work with other developers thereby increasing team work spirit in the workplace.</li>
                  <li>Work to mentor and challenge team members in turn improving the relationship between my colleagues.</li>
                  <li>Converted HTML, CSS codebase to Reactjs and SASS increasing the performance of the product by 20%.</li>

            </div>

            
            
          </motion.div>
          <motion.div variants={boxVariant} ref={ref2} initial="hidden"
        animate={control2} className="cv">
            <h3>Freelancing Web Consultant</h3>
            <small>APRIL 2021 – JAN 2022 </small>

            <div className="cvdetails">
            <p className="pb-4">Key Accomplishments:</p>
                  
                  <li>Worked with other developers in building and contributing to open source projects in turn contributing to the
                  community.</li>
                  <li>Built scalable and responsive web application for client which improved the online presence of their businesses.</li>
                  <li>Collaborated in a diverse team consisting of 6 persons to develop a student organization web application with
                  the MERN stack which help to increase the number of members in the organization.</li>
            </div>
            
          </motion.div>
          <motion.div variants={boxVariant} ref={ref3} initial="hidden"
        animate={control3} className="cv">
            <h3>Intern Frontend Developer - Migrants Solutions</h3>
            <small>JUNE 2020 – DECEMBER 2020 </small>

            <div className="cvdetails">
            <p className="pb-4">Key Accomplishments:</p>
                  
                  <li>Collaborated in a team of 4 for a website redesign competition as the team lead where we design the
                  wireframes with figma and built a web application which was submitted for the competition.</li>
                  <li>Team lead of my team and assisted in solving of error bugs for my team members.</li>
                  <li>Contributed to open source pro on GitHub and assisted in solving of error bug for my team members.</li>
            </div>

            
            
          </motion.div>

            </div>
          

          <h1>Education</h1>
          <div className="pt-10 px-6 md:p-14">
          <motion.div variants={boxVariant} ref={ref4} initial="hidden"
        animate={control4} className="cv">
            <h3>Biochemistry (B.Sc) - University of Benin</h3>
            <small>JANUARY 2018 – DECEMBER 2022 </small>

            <div className="cvdetails">
            <p className="pb-4">Key Accomplishments:</p>
            <li>Volunteer at GoAbitfurther Africa.</li>
            <li>Member of Student Finance Club -UNIBEN CHAPTER </li>
                  
                  
                  
                  
                  
            </div>

            
            
          </motion.div>

          </div>
          
        </div>
     );
}
 
export default Experience;