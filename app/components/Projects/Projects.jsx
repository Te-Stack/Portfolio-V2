"use client"
import Image from "next/image";
import "./projects.css"
import ReactCurvedText from "react-curved-text";
import Curved from "../curved/curved";
import Link from "next/link";



const Project = ({img, h2, p}) => {
    return ( 
        <div className="example py-12">
            <Image src={img} width={1200} height={500} />
            <div class="content">
                <Link href="#" className="text">
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