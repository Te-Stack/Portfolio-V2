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
            <p>&copy; 2024, All right reserved</p>
            <p>Developed by Quincy</p>
            </div>
            
            <div>
                <p><Link href="">Projects</Link></p>
                <p><Link href="">Blog</Link></p>
                <p><Link href="">About</Link></p>
                
                
            </div>
            <div className="con">
                <Link href="">Contact</Link>
                <Link href="https://mailto:ukumakubequincy@gmail.com">ukumakubequincy@gmail.com</Link>
                <Link href="https://www.linkedin.com/in/quincy-oghenetejiri">Linkedin</Link>
                <Link href="https://www.twitter.com/Quincyoghenex" target="_blank" rel="noreferrer"> Twitter</Link>
               
                <div className="flex">
               <Link href="https://www.github.com/Te-Stack"><FaGithubSquare /></Link>
               <Link href="https://www.github.com/Te-Stack"><FaHashnode/></Link>

                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;