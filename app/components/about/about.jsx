import Image from "next/image";
import "./aboutme.css"
import Link from "next/link";
  
const Aboutme = () => {
    return ( 
        <div className="aboutme">
            <h1>My name is Quincy Oghenetejiri Ukumakube,I am a Software Developer and Technical Writer</h1>
            <div className="md:flex flex-row justify-between px-4">
                <div>
                    <Image src="/Quincy-Nysc-Pics.jpg" width={1300} height={400} />
                </div>
                <div className="details px-12">
                    <Link className="text-center" href="mailto:ukumakubequincy@gmail.com">Contact Me</Link>
                
                <p>I'm a software developer and technical writer with 3 years of experience, focused on creating efficient solutions and clear documentation</p>

                </div>
            

            </div>
           

        </div>
     );
}
 
export default Aboutme;