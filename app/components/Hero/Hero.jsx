"use client"
import Link from "next/link";
import "./hero.css"
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const Hero = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant = {
        visible: { opacity: 1, scale: 1,transition:{duration: 0.3} },
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
        animate={control} className="hero" >
            <small>Quincy Oghenetejiri</small>
            <h1 className="hidden md:block">Building <span>software and</span>  <br/> <span className="pl-8">crafting words</span></h1>
            <h1 className="block md:hidden">Building <span>software and <br/> </span>  <span>crafting words</span></h1>
            <p>Software Developer | Technical Writer</p>
            <p><Link href="mailto:ukumakubequincy@gmail.com" >Get in Touch &gt;</Link></p>
            <div className="logos py-4">
                <div className="logos-slide">
                <Image className="image  px-8" src="/next.svg" width={120} height={100} />
                <Image className="image px-8" src="/react.svg" width={120} height={100} />
                <Image className="image px-8" src="/express.svg" width={120} height={100} />
                <Image className="image px-8" src="/vue.svg" width={120} height={100} />
                <Image className="image px-8" src="/python.svg" width={120} height={100} />
                <Image className="image px-8" src="/nodejs.svg" width={120} height={100} />
                <Image className="image px-8" src="/go.svg" width={120} height={100} />
                <Image className="image px-8" src="/tailwind.svg" width={120} height={100} />
                <Image className="image px-8" src="/firebase.svg" width={120} height={100} />
                <Image className="image px-8" src="/sass.svg" width={120} height={100} />
                </div>
                <div className="logos-slide">
                <Image className="image  px-8" src="/next.svg" width={120} height={100} />
                <Image className="image px-8" src="/react.svg" width={120} height={100} />
                <Image className="image px-8" src="/express.svg" width={120} height={100} />
                <Image className="image px-8" src="/vue.svg" width={120} height={100} />
                <Image className="image px-8" src="/python.svg" width={120} height={100} />
                <Image className="image px-8" src="/nodejs.svg" width={120} height={100} />
                <Image className="image px-8" src="/go.svg" width={120} height={100} />
                <Image className="image px-8" src="/tailwind.svg" width={120} height={100} />
                <Image className="image px-8" src="/firebase.svg" width={120} height={100} />
                <Image className="image px-8" src="/sass.svg" width={120} height={100} />
                </div>
                

            </div>

        </motion.div>
     );
}
 
export default Hero;
