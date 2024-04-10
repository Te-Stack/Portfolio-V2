import Image from "next/image";


const Project = ({img}) => {
    return ( 
        <div className="">
            <Image src={img} width={120} height={100} />
            
        </div>
     );
}
 
export default Project;