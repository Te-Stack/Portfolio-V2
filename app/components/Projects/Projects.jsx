import Image from "next/image";
import "./projects.css"

const Project = ({img}) => {
    return ( 
        <div className="example">
            <Image src={img} width={1200} height={1000} />
            <div class="content">
                <div class="text">This is the content</div>
            </div>
            
        </div>
     );
}
 
export default Project;