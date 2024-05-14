import What from "@/app/components/what/What";
import Image from "next/image";
import project1 from "../../../../../public/Project-pics-1.png"
import ProjectComponent from "@/app/components/parallax/Projectparallax";
import Split from "@/app/components/split/split";



 
const ProductDetails = () => {
    const data ={
        1:project1
    }
    
    return ( 
        <div className="mt-20"> 
            <div className="">
            <Image src={data[1]} width={1250} height={500} />
                
            </div>
            
            

            
        
            <ProjectComponent
                name="S.T.O.R.E"
                small='E-commerce website '
                featureDetails="Blog Section: Leveraging Next.js's server-side rendering (SSR) capabilities, I developed a captivating blog section that offers a diverse range of articles, insights, and resources on mental health and personal development. "
                
                developmentDetails="The Unveiled Nation website was meticulously crafted using JavaScript's Next.js framework, renowned for its versatility and performance in building powerful web applications. With SQL as the chosen database language, I seamlessly integrated robust backend functionalities with a dynamic and responsive front-end interface, ensuring a seamless user experience across all devices."
            
            />
            <Split/>

            <What />

        </div>
     );
}
 
export default ProductDetails;