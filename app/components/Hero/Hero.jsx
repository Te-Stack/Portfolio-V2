import Link from "next/link";
import "./hero.css"
import Image from "next/image";



const Hero = () => {
    return ( 
        <div className="hero" >
            <p>Framer Partner</p>
            <h1>Get your <span>potential clients</span>  <br/> <span>with this template</span></h1>
            <p>Maximize Engagement and Boost Conversions with Custom UI/UX Design Solutions</p>
            <p><Link href="#" >Start Project request</Link></p>
            <div className="images flex py-4">
                <Image className="image px-2" src="/next.svg" width={120} height={100} />
                <Image className="image px-2" src="/vercel.svg" width={120} height={100} />
                <Image className="image px-2" src="/react.svg" width={120} height={100} />
                <Image className="image px-2" src="/express.svg" width={120} height={100} />
                <Image className="image px-2" src="/vue.svg" width={120} height={100} />
                <Image className="image px-2" src="/python.svg" width={120} height={100} />
                <Image className="image px-2" src="/mongodb.svg" width={120} height={100} />
                <Image className="image px-2" src="/nodejs.svg" width={120} height={100} />
                <Image className="image px-2" src="/go.svg" width={120} height={100} />

            </div>

        </div>
     );
}
 
export default Hero;
