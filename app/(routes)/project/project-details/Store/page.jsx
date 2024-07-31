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
                
                developmentDetails="Building the E-Commerce Store involves a series of development steps to ensure a functional and visually appealing web application. Tools and Technologies: Use React.js for building the user interface, Tailwind CSS for styling, and Sass for additional styling capabilities.
                Version Control: Set up a GitHub repository for version control and collaboration​ (GitHub)​​ (Ecommerce Website)​.Component Structure: Develop a component-based structure using React. Each part of the site (e.g., header, footer, product card) is built as a reusable component.
                State Management: Implement state management using React State and Context API to handle the application's state across different components.
                Routing: Use React Router for navigation between different pages, such as the home page, shop page, and product detail pages​ (GitHub)​.Tailwind CSS: Apply Tailwind CSS for responsive design and utility-first styling.
                Sass: Use Sass for advanced CSS capabilities, like nesting and variables, to keep the styles organized and maintainable. Product Pages: Create pages for displaying products, including categories for men, women, and children.
                Cart and Checkout: Implement the cart functionality where users can add and remove items, and a checkout process to finalize purchases.
                Local Storage: Use local storage to save cart data and user preferences, providing a seamless experience even after page reloads​ (GitHub)​​ (Ecommerce Website)​. Unit Testing: Write unit tests for individual components to ensure they work as expected.
                Integration Testing: Test the integration of different components and features to ensure they work together without issues.
                User Testing: Conduct user testing to gather feedback and make necessary adjustments to the UI and functionality."
            
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