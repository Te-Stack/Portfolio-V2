import Image from "next/image";
import "./split.css"


const Split = ({data1, data2, data3, data4}) => {
    return ( 
        <div className="flex flex-col p-8 ">
            <Image src={data1} className="p-4" width={1200} height={170} />
            <div className="flex flex-col md:flex-row">
            <Image src={data2} className="p-2" width={580} height={270} />
            <Image src={data3} className="p-2" width={580} height={270} />
            
            </div>
            
            
           
            <Image src={data4} className="p-4" width={1200} height={170} />


        </div>
     );
}
 
export default Split;