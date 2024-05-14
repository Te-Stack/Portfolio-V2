import Image from "next/image";
import "./split.css"


const Split = () => {
    return ( 
        <div className="flex flex-col p-8 ">
            <Image src="/Store 2.png" className="p-4" width={1200} height={170} />
            <div className="flex flex-col md:flex-row">
            <Image src="/Store 1.png" className="p-2" width={580} height={270} />
            <Image src="/Store 3.png" className="p-2" width={580} height={270} />
            
            </div>
            
            
           
            <Image src="/Store 4.png" className="p-4" width={1200} height={170} />


        </div>
     );
}
 
export default Split;