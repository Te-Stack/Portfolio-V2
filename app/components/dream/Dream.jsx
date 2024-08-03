"use client"
import Link from "next/link";
import "./dream.css"
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
const Dream = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant = {
        visible: { opacity: 1, scale: 1,transition:{duration: 0.5} },
        hidden: { opacity: 0, scale: 0 },
      }

      useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
        // else {
        //     control.start("hidden");
        //   }
      }, [control, inView]);
    return ( 
        <motion.div variants={boxVariant} ref={ref} initial="hidden"
        animate={control}  className="dream">
            <p>I CAN'T WAIT TO HEAR FROM YOU!</p>
            <h3> Reach out, and <br/> together, we can turn  <br/> your vision into a well-documented, perfectly developed success.</h3>
            <p><Link href="#" >Start Project request</Link></p>



        </motion.div>
     );
}
 
export default Dream;