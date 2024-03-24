"use client"

import Link from "next/link";
import "./Navs.css"

const Nav = () => {
    return ( 
        <header className="hero">
        <nav className="navbar">
            <a href="/"><h1 className="navbar-logo">
              Quincy Oghenetejiri
            </h1></a>
            <div>
                <ul className="nav-menu">
                        
                    <li className="nav-item"><Link href="#" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link href="#About" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link href="#Projects" className="nav-link">Projects</Link></li>
                    <li className="nav-item"><Link href="#Contact" className="nav-link">Contact Me</Link></li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    </header>
     );
}
 
export default Nav;
