import Image from "next/image";
import "./split.css"


const Split = () => {
    return ( 
        <div className="flex ">
            <Image src="/Store 1.png" width={450} height={270} />
            <Image src="/Store 2.png" width={450} height={270} />
            <Image src="/Store 3.png" width={450} height={270} />
            <Image src="/Store 4.png" width={450} height={270} />


        </div>
     );
}
 
export default Split;