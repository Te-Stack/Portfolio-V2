import Image from "next/image";
import "./what.css"

const What = () => {
    return ( 
        <div className="what">
            <h2>What they about us?</h2>
            <p>"Quincy is an outstanding frontend developer I've worked with on numerous projects. His creativity, attention to detail, and reliability make him a valuable asset to any team. I've recommended him for other projects, and he consistently delivers exceptional results, earning praise from clients and colleagues alike. I highly endorse Quincy for any frontend development project."</p>
            <div className="flex flex-column md:flex-row justify-evenly">
                <div>
                    <Image className="image px-8" src="/maro.webp" width={100} height={50} />
                </div>
                <div>
                    <h5>Maro Orode</h5>
                    <p>Software Developr</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default What;