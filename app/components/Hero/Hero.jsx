import Link from "next/link";
import "./hero.css"
import Image from "next/image";



const Hero = () => {
    return ( 
        <div className="hero" >
            <p>Framer Partner</p>
            <h1>Get your potential clients with this template</h1>
            <p>Maximize Engagement and Boost Conversions with Custom UI/UX Design Solutions</p>
            <p><Link href="#" >Start Project request</Link></p>
            <div className="images py-4">
                <Image className="image" src="/next.svg" width={120} height={100} />

            </div>

        </div>
     );
}
 
export default Hero;
