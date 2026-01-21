import Link from "next/link";
import Image from "next/image";
import "./FeaturedProjects.css";

const projects = [
    {
        id: 1,
        title: "Student Management System",
        description: "Worked as a Lead Frontened Engineer on the Student Management System at Novaxa Technologies. A comprehensive platform for administrators, teachers, and staff to manage student information, attendance, and academic records.",
        href: "https://sms.novaxa.tech/",
        image: "https://res.cloudinary.com/dha7gjz6y/image/upload/v1769017271/Sms-dash_uhrt3z.jpg",
        target: "_blank"
    },
    {
        id: 2,
        title: "S.T.O.R.E",
        description: "E-commerce website built with React.js, Tailwind CSS, and Sass. Features product browsing, cart management, and checkout.",
        href: "https://react-e-commerce-website-amber.vercel.app/",
        image: "https://res.cloudinary.com/dha7gjz6y/image/upload/v1769017271/Project-pics-1_qywimo.png",
        target: "_blank"
    },
    {
        id: 3,
        title: "End-to-End Encrypted Messaging App",
        description: "Built an end-to-end encrypted messaging application demonstrating secure client-side encryption and key management. The project focuses on encryption fundamentals, message confidentiality, and secure data handling in modern web applications.",
        href: "https://github.com/Te-Stack/Encryption-App",
        image: "https://res.cloudinary.com/dha7gjz6y/image/upload/v1768989269/Authentication_screen_mkhs6r.jpg",
        target: "_blank"
    },
    {
        id: 4,
        title: "Real-Time Translation Chat App (Frontend)",
        description: "Built the frontend for a real-time chat application with live message translation. The project focuses on React architecture, real-time event handling, and multilingual user experience. The backend and AI translation services are implemented separately.",
        href: "https://github.com/Te-Stack/Real-Time-Translation-Frontend",
        image: "https://res.cloudinary.com/dha7gjz6y/image/upload/v1768992811/Login_page_l3ur6r.png",
        target: "_blank"
    },
    {
        id: 5,
        title: "Smart Meeting Assistant",
        description: "Developed a smart meeting assistant that integrates real-time video communication with AI-powered features such as meeting insights and summaries. The project demonstrates full-stack integration, real-time data handling, and LLM-assisted workflows.",
        href: "https://github.com/Te-Stack/Smart-Meeting-Assistant",
        image: "https://res.cloudinary.com/dha7gjz6y/image/upload/v1768989243/Stream_Video_UI_wdccwk.png",
        target: "_blank"
    },
    {
        id: 6,
        title: "Accessible Chat and Video Communication App",
        description: "Developed an accessible chat and video communication application with a strong focus on inclusive design, usability, and real-time interactions. The project explores accessibility best practices in modern communication platforms.",
        href: "https://github.com/Te-Stack/Accessible-Chat-and-Video-App",
        image: "https://res.cloudinary.com/dha7gjz6y/image/upload/v1768989086/Hub_View_ood46h.jpg",
        target: "_blank"
    }


];

const FeaturedProjects = () => {
    return (
        <section className="projects-section">
            <div className="projects-container">
                <div className="projects-header">
                    <h2 className="projects-title">Featured Projects</h2>
                    <p className="projects-subtitle">
                        A selection of projects I've worked on, showcasing my skills in web development and problem-solving.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <Link href={project.href} target={project.target} key={project.id} className="project-card">

                            <div className="project-image-wrapper">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={340}
                                    className="project-image"
                                />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <span className="project-link">
                                    View Project
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="projects-cta">
                    <Link href="https://github.com/Te-Stack" className="btn-view-all" target="_blank">
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProjects;
