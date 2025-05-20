import What from "@/app/components/what/What";
import Image from "next/image";
import project1 from "../../../../../public/sms-3.jpg"
import data1 from "../../../../../public/sms-dash.jpg"
import data2 from "../../../../../public/sms-result.png"
import data3 from "../../../../../public/sms-login.png"
import data4 from "../../../../../public/sms-4.jpg"
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
                name="School Management Software"
                small=' SMS'
                featureDetails="This School Management software is a system that allows Administrators, Teachers, and Staff members to store, organize, and access student information such as contact details, demographics, and academic records.


                The sotware contain various key features such as:
                1. Report Card Compilation 
                2. Attendance Tracking 
                3.Homework and Assignment Management
                4. Billing and Fee Management.
                5. Library Management"
                
                developmentDetails="As the lead front-end developer for the SMS (Smart Management System) platform, I played a critical role in shaping the user interface and overall user experience of the application. I led the design and implementation of responsive, intuitive, and accessible interfaces using modern JavaScript technologies. By translating complex backend logic into clear, user-friendly components, I ensured seamless interactions across the platform. My work involved collaborating closely with backend engineers, designers, and stakeholders to deliver a cohesive and performant product that met both functional and aesthetic expectations.

Beyond coding, I was instrumental in setting front-end development standards and workflows for the project. I guided architectural decisions, optimized performance, and implemented reusable components to ensure scalability and maintainability. Additionally, my leadership extended to mentoring junior developers and conducting code reviews, which helped uphold code quality and consistency throughout the codebase. My contributions directly impacted the platform’s usability, performance, and success in delivering a streamlined management solution.
"
            
            />
            



            <Split data1={data1} data2={data2} data3={data3}data4={data4} />
            <Link className="text-center mb-4" href="https://novaxa-sms.vercel.app/" target="_blank">
            <Button value="View Live" />


            </Link>

            <What />

        </div>
     );
}
 
export default ProductDetails;