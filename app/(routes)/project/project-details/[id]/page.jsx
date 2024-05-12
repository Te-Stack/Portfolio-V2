import What from "@/app/components/what/What";
import Image from "next/image";
import project1 from "../../../../../public/Project-pics-1.png"
import MyComponent from "@/app/components/parallax/Parallax";




const ProductDetails = () => {
    const data ={
        1:project1
    }
    
    return ( 
        <div className=""> 
            <Image src={data[1]} width={1300} height={500} />
            

            
            This is the project details pages with ids I am trying to work on i think i have an idea but omo 
            <div><button>View Live </button></div>
            <MyComponent/>

            <What />

        </div>
     );
}
 
export default ProductDetails;