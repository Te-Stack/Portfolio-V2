"use client"
import Image from "next/image";
import "./projects.css"
import ReactCurvedText from "react-curved-text";

const Project = ({img}) => {
    return ( 
        <div className="example">
            <Image src={img} width={1200} height={1000} />
            <div class="content">
                <div class="text">
                <ReactCurvedText
                width={300}
                height={300}
                cx={190}
                cy={120}
                rx={100}
                ry={100}
                startOffset={100}
                reversed={true}
                text="curved text"
                /><ReactCurvedText
                width={370}
                height={300}
                cx={190}
                cy={120}
                rx={100}
                ry={100}
                startOffset={100}
                text="curved text"
                />
                </div>
            </div>
            
        </div>
     );
}
 
export default Project;