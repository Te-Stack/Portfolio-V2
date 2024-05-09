import What from "@/app/components/what/What";
import Image from "next/image";
import project1 from "../../../../../public/Project-pics-1.png"



const ProductDetails = () => {
    return ( 
        <div className=""> 
            <Image src={project1} width={1200} height={500} />
            

            
            This is the project details pages with ids I am trying to work on i think i have an idea

            <What />

        </div>
     );
}
 
export default ProductDetails;