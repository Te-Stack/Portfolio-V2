import Link from "next/link";
import "./MoreFromMe.css";

const categories = [
    {
        id: 1,
        title: "Blog",
        description: "Technical articles and tutorials on web development, JavaScript, and more.",
        href: "/blog",
        color: "purple",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
        )
    },
    {
        id: 2,
        title: "Articles",
        description: "Guest articles for publications like freeCodeCamp and Adam the Automator.",
        href: "/articles",
        color: "orange",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
            </svg>
        )
    },
    {
        id: 3,
        title: "GitHub",
        description: "Check out my open source projects and contributions.",
        href: "https://github.com/Quincyoghenetejiri",
        color: "green",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        )
    },
    {
        id: 4,
        title: "Contact",
        description: "Have a project in mind or want to collaborate? Let's connect!",
        href: "mailto:ukumakubequincy@gmail.com",
        color: "blue",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        )
    }
];

const MoreFromMe = () => {
    return (
        <section className="more-section">
            <div className="more-container">
                <div className="more-header">
                    <h2 className="more-title">More from Me</h2>
                    <p className="more-subtitle">
                        Explore my work, writings, and ways to connect.
                    </p>
                </div>

                <div className="more-grid">
                    {categories.map((category) => (
                        <Link
                            href={category.href}
                            key={category.id}
                            className={`more-card more-card--${category.color}`}
                        >
                            <div className="more-card-icon">
                                {category.icon}
                            </div>
                            <div className="more-card-content">
                                <h3 className="more-card-title">{category.title}</h3>
                                <p className="more-card-description">{category.description}</p>
                            </div>
                            <span className="more-card-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MoreFromMe;
