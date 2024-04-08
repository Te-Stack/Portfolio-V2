import Link from "next/link";
import "./hero.css"
import Image from "next/image";



const Hero = () => {
    return ( 
        <div className="hero" >
            <p>Framer Partner</p>
            <h1 className="hidden md:block">Get your <span>potential clients</span>  <br/> <span className="pl-8">   with this template</span></h1>
            <h1 className="block md:hidden">Get your <span>potential <br/>  clients</span>  <span>with this template</span></h1>
            <p>Maximize Engagement and Boost Conversions with Custom UI/UX Design Solutions</p>
            <p><Link href="#" >Start Project request</Link></p>
            <div className="logos py-4">
                <div className="logos-slide">
                <Image className="image  px-8" src="/next.svg" width={120} height={100} />
                <Image className="image px-8" src="/vercel.svg" width={120} height={100} />
                <Image className="image px-8" src="/react.svg" width={120} height={100} />
                <Image className="image px-8" src="/express.svg" width={120} height={100} />
                <Image className="image px-8" src="/vue.svg" width={120} height={100} />
                <Image className="image px-8" src="/python.svg" width={120} height={100} />
                <Image className="image px-8" src="/mongodb.svg" width={120} height={100} />
                <Image className="image px-8" src="/nodejs.svg" width={120} height={100} />
                <Image className="image px-8" src="/go.svg" width={120} height={100} />
                </div>
                <div className="logos-slide">
                <Image className="image  px-8" src="/next.svg" width={120} height={100} />
                <Image className="image px-8" src="/vercel.svg" width={120} height={100} />
                <Image className="image px-8" src="/react.svg" width={120} height={100} />
                <Image className="image px-8" src="/express.svg" width={120} height={100} />
                <Image className="image px-8" src="/vue.svg" width={120} height={100} />
                <Image className="image px-8" src="/python.svg" width={120} height={100} />
                <Image className="image px-8" src="/mongodb.svg" width={120} height={100} />
                <Image className="image px-8" src="/nodejs.svg" width={120} height={100} />
                <Image className="image px-8" src="/go.svg" width={120} height={100} />
                </div>
                

            </div>

        </div>
     );
}
 
export default Hero;
