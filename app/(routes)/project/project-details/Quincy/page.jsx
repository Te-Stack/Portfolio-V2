import What from "@/app/components/what/What";
import Image from "next/image";
import project1 from "../../../../../public/Port 1.png"
import data1 from "../../../../../public/Port 4.png"
import data2 from "../../../../../public/Port 2.png"
import data3 from "../../../../../public/Port 3.png"
import data4 from "../../../../../public/Port 5.png"
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
                name="Quincy Oghenetejiri Ukumakube"
                small="Portfolio Website"
                featureDetails="The website is a comprehensive platform designed to support the finance-related educational and professional development of students at the University of Benin. Key features of the website include:
                Home Page: Introduction to the club, highlighting its mission to provide students with knowledge and skills in finance.
                About Us: Detailed information about the club's purpose, history, and the benefits it offers to its members. It emphasizes the club's role in bringing relevant financial information to undergraduates.
                Teams: Information about the various teams within the club, detailing their roles and contributions to the club's activities.
                Events: Updates on upcoming events, workshops, seminars, and other activities organized by the club to enhance the practical knowledge and skills of its members.
                Publications: Access to newsletters, articles, and other publications created by the club, which provide insights into the finance industry and related fields.
                Join Us: A section where students can sign up to become members of the club, providing them with opportunities to participate in events and access club resources."
                
                developmentDetails="The development of the Student Finance Club (Uniben) website, a full-stack web application, involved several steps: design, frontend development, backend development, database integration, and deployment. The UI/UX design was crafted using Adobe XD. A team of developers, including myself, built the frontend using React.js, a popular JavaScript framework. The server was developed with Express.js, and a RESTful API was created to manage data such as events, blog posts, and member information. User authentication and authorization were implemented for secure access. MongoDB was used to store event, blog, and user data. The frontend was deployed on Netlify, while the backend was hosted on Heroku. Unit and integration tests were conducted to ensure the functionality of each component and API."
            
            />
            



            <Split data1={data1} data2={data2} data3={data3}data4={data4} />
            <Link className="text-center mb-4" href="/" target="_blank">
            <Button value="View Live" />


            </Link>

            <What />

        </div>
     );
}
 
export default ProductDetails;