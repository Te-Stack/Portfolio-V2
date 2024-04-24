import Image from "next/image";
import "./aboutme.css"

const Aboutme = () => {
    return ( 
        <div className="aboutme">
            <h1>My name is Quincy Oghenetejiri , I am a Software Developer and Technical Writer</h1>
            <div className="flex">
                <div>
                    <Image src="/vercel.svg" width={350} height={350} />
                </div>
                <div>
                
                <p>I'm a software engineer focused on solving problems using frontend technology. I am interested in user experience, accessibility, design engineering, gaming, web3, web animations, cloud engineering and golang.</p>

                </div>
            

            </div>
           

        </div>
     );
}
 
export default Aboutme;