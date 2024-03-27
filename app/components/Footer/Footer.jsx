import Link from "next/link";
import "./footer.css"
import { FaLinkedin, FaGithubSquare, FaTwitter,FaFreeCodeCamp  } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
const Footer = () => {
    return ( 
        <footer>
        <div className="pane">
            <div>
                <small>Designed and Developed By:</small>
            <h1 className="footer-logo">Quincy Oghenetejiri</h1>
            <p>&copy; Copyright 2021, All right reserved</p>
            </div>
            
            <div>
                <p>&copy; Copyright 2021, All right reserved</p>
            </div>
            <div className="con">
                <Link href="">Contact</Link>
                <Link href="https://www.linkedin.com/in/quincy-oghenetejiri">Linkedin</Link>
                <Link href="https://www.github.com/Te-Stack" target="_blank" rel="noreferrer">GitHub</Link>
                <Link href="https://www.twitter.com/Quincyoghenex" target="_blank" rel="noreferrer"> Twitter</Link>
                <Link href="https://quincyoghenetejiri.hashnode.dev/" target="_blank" rel="noreferrer">  hashnode</Link>
                <div className="flex">
                <span><FaLinkedin /></span>
                <FaGithubSquare /> 
                <FaTwitter/>
                <FaHashnode/>

                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;