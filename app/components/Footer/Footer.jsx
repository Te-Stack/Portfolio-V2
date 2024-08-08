import Link from "next/link";
import "./footer.css"

const Footer = () => {
    return ( 
    
        
    <footer className="footer">
      <div className="footer-desktop">
        <div className="footer-column">
          <h2 className="logo">Q.O</h2>
          <p className="copyright">©2024 Quincy</p>
          <p className="madeby">Developed By Quincy</p>
        </div>
        <div className="footer-column">
          <h2>Projects</h2>
          <ul>
            <li><Link href="/Project">Projects</Link></li>
            <li><Link href="/Blog">Blog</Link></li>
            <li><Link href="/About">About</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Contact</h2>
          <ul>
            <li><Link href="https://linktr.ee/quincyoghenex">Linktree</Link></li>
            <li><Link href="https://www.twitter.com/Quincyoghenex">Twitter</Link></li>
            <li><Link href="https://www.linkedin.com/in/quincy-oghenetejiri">LinkedIn
            </Link></li>
            <li><Link href="https://mailto:ukumakubequincy@gmail.com">ukumakubequincy@gmail.com</Link></li>
            

          </ul>
        </div>
      </div>
      <div className="footer-mobile">
        <div className="footer-content">
          <div className="footer-column">
            <h2>Projects</h2>
            <ul>
            <li><Link href="/Project">Projects</Link></li>
            <li><Link href="/Blog">Blog</Link></li>
            <li><Link href="/About">About</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>Contact</h2>
            <ul>
            <li><Link href="https://linktr.ee/quincyoghenex">Linktree</Link></li>
            <li><Link href="https://www.twitter.com/Quincyoghenex">Twitter</Link></li>
            <li><Link href="https://www.linkedin.com/in/quincy-oghenetejiri">LinkedIn
            </Link></li>
            <li><Link href="mailto:ukumakubequincy@gmail.com">ukumakubequincy@gmail.com</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <h2 className="logo">Q.O</h2>
          <p className="copyright">©2024 Quincy</p>
          
        </div>
      </div>
    </footer>

     );
}
 
export default Footer;