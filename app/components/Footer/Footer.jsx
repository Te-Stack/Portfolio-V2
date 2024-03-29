import Link from "next/link";
import "./footer.css"
import { FaLinkedin, FaGithubSquare, FaTwitter,FaFreeCodeCamp  } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <footer>
        <div className="pane">
            <div>
            <p>Quincy</p>
            <Link href="#">&copy; 2024, Quincy</Link>
            <p href="">Developed By <Link href="https://www.twitter.com/Quincyoghenex">Quincy</Link></p>
            </div>
            
            <div>
                <p className="pb-2"><Link className="outlier " href="">Projects</Link></p>
                <p className="pb-2"><Link href="" >Blog</Link></p>
                <p><Link href="">About</Link></p>
                
                
            </div>
            <div className="con">
                <Link className="outlier pb-2" href="">Contact</Link>
                <Link className="pb-2" href="https://mailto:ukumakubequincy@gmail.com">ukumakubequincy@gmail.com</Link>
                <Link className="pb-2" href="https://www.linkedin.com/in/quincy-oghenetejiri">Linkedin</Link>
                <Link className="pb-2" href="https://www.twitter.com/Quincyoghenex" target="_blank" rel="noreferrer"> Twitter</Link>
               
                <div className="flex">
               <Link className="icon px-2" href="https://www.github.com/Te-Stack"><FaGithubSquare /></Link>
               <Link className="icon" href="https://quincyoghenetejiri.hashnode.dev/"><FaHashnode/></Link>

                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;