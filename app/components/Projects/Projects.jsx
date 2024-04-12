"use client"
import Image from "next/image";
import "./projects.css"
import ReactCurvedText from "react-curved-text";
import Curved from "../curved/curved";

const Project = ({img}) => {
    return ( 
        <div className="example">
            <Image src={img} width={1200} height={1000} />
            <div class="content">
                <div className="text">
                    <Curved/>
                </div>
                
                
            </div>
            <div>
                <h1>Beyond</h1>
                <p>Logo Design. Packaging. website</p>
            </div>
            
        </div>
     );
}
 
export default Project;