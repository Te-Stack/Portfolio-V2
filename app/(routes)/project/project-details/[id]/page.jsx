import What from "@/app/components/what/What";
import Image from "next/image";
import project1 from "../../../../../public/Project-pics-1.png"
import ProjectComponent from "@/app/components/parallax/Projectparallax";



 
const ProductDetails = () => {
    const data ={
        1:project1
    }
    
    return ( 
        <div className=""> 
            <Image src={data[1]} width={1300} height={500} />
            

            
            This is the project details pages with ids I am trying to work on i think i have an idea but omo 
            <div><button>View Live </button></div>
            <ProjectComponent
                name="S.T.O.R.E"
                challengeDetails="wait"
                s
                solutionDetails="wait"
            
            />

            <What />

        </div>
     );
}
 
export default ProductDetails;