import What from "@/app/components/what/What";
import Image from "next/image";
import project1 from "../../../../../public/Project-pics-1.png"
import ProjectComponent from "@/app/components/parallax/Projectparallax";
import Split from "@/app/components/split/split";
import Button from "@/app/components/button/button";



 
const ProductDetails = () => {
    const data ={
        1:project1
    }
    
    return ( 
        <div className="mt-20"> 
            <div className="">
            <Image src={data[1]} width={1250} height={500} />
                
            </div>
            
            

            
            <Button value="view live" />
        
            <ProjectComponent
                name="S.T.O.R.E"
                small='E-commerce website '
                featureDetails="Blog Section: Leveraging Next.js's server-side rendering (SSR) capabilities, I developed a captivating blog section that offers a diverse range of articles, insights, and resources on mental health and personal development. Through interactive React components and optimized content delivery, users can engage with informative content while experiencing lightning-fast page load times.
                Events Page: With a focus on community engagement and support, the Unveiled Nation website features an events page that dynamically showcases upcoming workshops, seminars, and therapeutic sessions. By harnessing the power of SQL databases for data management and retrieval, I implemented a seamless event management system, allowing users to stay informed and participate in transformative experiences.
                E-commerce Page: In alignment with Unveiled Nation's mission to provide accessible resources for mental well-being, I developed an e-commerce page where customers can explore and purchase products and resources directly from the website. Through secure payment gateways and intuitive checkout processes, users can seamlessly shop for books, tools, and other therapeutic resources, fostering a supportive environment for personal growth and healing. "
                
                developmentDetails="The Unveiled Nation website was meticulously crafted using JavaScript's Next.js framework, renowned for its versatility and performance in building powerful web applications. With SQL as the chosen database language, I seamlessly integrated robust backend functionalities with a dynamic and responsive front-end interface, ensuring a seamless user experience across all devices."
            
            />

            <Split/>

            <What />

        </div>
     );
}
 
export default ProductDetails;