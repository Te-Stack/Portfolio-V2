// "use client"
import Image from "next/image";
import "./projects.css"
import ReactCurvedText from "react-curved-text";
import Curved from "../curved/curved";
import Link from "next/link";




const Project = ({img, h2, p, href}) => {
    return ( 
        <div className="example py-12">
            <Image src={img} width={1200} height={500} />
            <div className="content ">
                <Link href={href} className="text">
                    <Curved/>
                </Link>
                
            </div>
            <div className="details">
                <h2>{h2}</h2>
                <p>{p}</p>
                
            </div>
            
            
        </div>
     );
}
 
export default Project;