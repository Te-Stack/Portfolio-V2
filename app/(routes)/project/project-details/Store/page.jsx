import What from "@/app/components/what/What";
import Image from "next/image";
import project1 from "../../../../../public/Project-pics-1.png"
import data1 from "../../../../../public/Store 2.png"
import data2 from "../../../../../public/Store 1.png"
import data3 from "../../../../../public/Store 3.png"
import data4 from "../../../../../public/Store 4.png"
import ProjectComponent from "@/app/components/parallax/Projectparallax";
import Split from "@/app/components/split/split";
import Button from "@/app/components/button/button";
import Link from "next/link";



 
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
                featureDetails="The E-Commerce Store is built using React.js, Tailwind CSS, and Sass. This store allows customers to browse products on various pages, such as the home page, shop page, and detailed pages for men, women, and children. Users can add, remove, and check out products, with state management handled by React State and Context API. The store uses the local storage of the device as its database​​.

                The website's features include:
                

                Home Page: Displays featured products and promotions.
                Shop Page: Allows users to browse all available products.
                Product Detail Pages: Provide detailed information about each product.
                Cart Page: Users can review and manage their selected items before proceeding to checkout.
                Checkout Option: Facilitates the purchase process"
                
                developmentDetails="I followed a structured development process involving several key steps. The process began with setting up the project environment using React.js, Tailwind CSS, and Sass for styling. State management was implemented using React State and Context API to handle the application's data flow. Pages were created for home, shop, product details, and cart functionalities. Local storage was utilized to manage the cart data. The site was then deployed on Vercel, ensuring it was optimized for performance and accessibility."
            
            />
            



            <Split data1={data1} data2={data2} data3={data3}data4={data4} />
            <Link className="text-center mb-4" href="https://react-e-commerce-website-amber.vercel.app/" target="_blank">
            <Button value="View Live" />


            </Link>

            <What />

        </div>
     );
}
 
export default ProductDetails;