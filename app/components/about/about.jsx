import Image from "next/image";
import "./aboutme.css"
import Link from "next/link";

const Aboutme = () => {
    return ( 
        <div className="aboutme">
            <h1>My name is Quincy Oghenetejiri , I am a Software Developer and Technical Writer</h1>
            <div className="md:flex flex-row justify-between">
                <div>
                    <Image src="/Author Pics (1).jpg" width={1300} height={400} />
                </div>
                <div className="details">
                    <Link className="text-center" href="/">Contact Me</Link>
                
                <p>I'm a software engineer focused on solving problems using frontend technology. with 3 years experience I am interested in user experience, accessibility, design engineering, gaming, web3, web animations, cloud engineering and golang.</p>

                </div>
            

            </div>
           

        </div>
     );
}
 
export default Aboutme;