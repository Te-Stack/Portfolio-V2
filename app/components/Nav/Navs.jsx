"use client"
import Link from "next/link";
import "./Navs.css"
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Nav = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                {/* Logo/Name Section */}
                <div className="nav-brand">
                    <Link href="/" className="nav-name">
                        Quincy Oghenetejiri
                    </Link>
                    <span className="nav-tagline">Software Developer. Technical Writer.</span>
                </div>

                {/* Navigation Links */}
                <div className="nav-links-wrapper">
                    <ul className="nav-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/articles">Articles</Link></li>
                    </ul>

                    <div className="nav-actions">
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
