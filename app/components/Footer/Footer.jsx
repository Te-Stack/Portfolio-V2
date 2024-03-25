import Link from "next/link";
import "./footer.css"

const Footer = () => {
    return ( 
        <footer>
        <div className="pane">
            <div>
                <small>Designed and Developed By:</small>
            <h1 className="footer-logo">Quincy Oghenetejiri</h1>
            </div>
            <div className="con">
                <Link href="https://wa.link/6yvpoe" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp mx-2"></i></Link>
                <Link href="https://www.linkedin.com/in/quincy-oghenetejiri"><i className="fab fa-linkedin mx-2" target="_blank" rel="noreferrer"></i></Link>
                <Link href="https://www.github.com/Te-Stack" target="_blank" rel="noreferrer"><i className="fab fa-github mx-2"></i></Link>
                <Link href="https://www.twitter.com/Quincyoghenex" target="_blank" rel="noreferrer"><i className="fab fa-twitter mx-2"></i></Link>
                <Link href="https://quincyoghenetejiri.hashnode.dev/" target="_blank" rel="noreferrer"><i className="fab fas fa-blog mx-2"></i></Link>
            </div>
            <div>
                <p>&copy; Copyright 2021, All right reserved</p>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;