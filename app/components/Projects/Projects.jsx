"use client"
import Image from "next/image";
import "./projects.css"
import ReactCurvedText from "react-curved-text";
import Curved from "../curved/curved";
import Link from "next/link";



const Project = ({img}) => {
    return ( 
        <div className="example py-12">
            <Image src={img} width={1200} height={1000} />
            <div class="content">
                <Link href="#" className="text">
                    <Curved/>
                </Link>
                
            </div>
            <div className="details">
                <h2>Beyond</h2>
                <p>Logo Design. Packaging. website</p>
                
            </div>
            
            
        </div>
     );
}
 
export default Project;