"use client"
import { useState } from "react";
import Link from "next/link";
import "./Navs.css"
import Button from "../button/button";



const Nav = () => {
    const [active,setActive] = useState(false)

    const toggleLinks = () => {
        setActive(!active);
      };

      

    return ( 
        <header>
        <nav className="navbar">
            <a href="/"><h1 className="navbar-logo font-bold">
              Q.O
            </h1></a>
            <div>
                
                <ul  className={`${active ? "nav-menu active" : "nav-menu"  }`}>
                        
                    <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link href="/project" className="nav-link">Projects</Link></li>
                    <li className="nav-item"><Link href="/blog" className="nav-link">Blog</Link></li>
                    <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link href="mailto:ukumakubequincy@gmail.com" className="nav-link btn">Contact Me</Link></li>
                </ul>
                <div className={`${active ? "hamburger active" : "hamburger"  }`}  onClick={toggleLinks} >
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
