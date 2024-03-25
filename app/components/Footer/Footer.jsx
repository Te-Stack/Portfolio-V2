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
            </div>
            <div className="con">
                <Link href="https://www.linkedin.com/in/quincy-oghenetejiri"><span><FaLinkedin /></span>Linkedin</Link>
                <Link href="https://www.github.com/Te-Stack" target="_blank" rel="noreferrer"><FaGithubSquare /> GitHub</Link>
                <Link href="https://www.twitter.com/Quincyoghenex" target="_blank" rel="noreferrer"><FaTwitter/> twitter</Link>
                <Link href="https://quincyoghenetejiri.hashnode.dev/" target="_blank" rel="noreferrer"> <FaHashnode/> hashnode</Link>
            </div>
            <div>
                <p>&copy; Copyright 2021, All right reserved</p>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;