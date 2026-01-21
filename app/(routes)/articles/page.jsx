import Link from "next/link";
import "./articles.css";

// Guest articles for various publications - sorted newest to oldest
const articles = [
    // 2025
    {
        id: 1,
        title: "How to Implement Real-Time Language Translation in Chat with LLMs",
        publication: "GetStream",
        date: "2025",
        href: "https://getstream.io/blog/real-time-chat-translation/"
    },
    {
        id: 2,
        title: "How to Deploy Your Node.js Backend to Railway in Minutes",
        publication: "Maroorode",
        date: "2025",
        href: "https://maroorode.com/blog-details/how-to-deploy-your-node-js-backend-to-railway-in-minutes"
    },
    {
        id: 3,
        title: "How to Build AI Meeting Assistant",
        publication: "GetStream",
        date: "2025",
        href: "https://getstream.io/blog/ai-meeting-assistant/"
    },
    {
        id: 4,
        title: "How to Build a Secure React Native Chat App with End-to-End Encryption",
        publication: "GetStream",
        date: "2025",
        href: "https://getstream.io/blog/react-native-encrypted-chat/"
    },
    {
        id: 5,
        title: "Build an Accessible Chat and Video App in React",
        publication: "GetStream",
        date: "2025",
        href: "https://dev.to/quincyoghenetejiri/build-an-accessible-chat-and-video-app-in-react-5db9"
    },
    {
        id: 6,
        title: "Cody vs. Cursor: Choosing the Right AI Code Assistant for Your Development Workflow",
        publication: "DevTools Academy",
        date: "2025",
        href: "https://www.devtoolsacademy.com/blog/cody-vs-cursor-choosing-the-right-ai-code-assistant-for-your-development-workflow/"
    },
    // 2024
    {
        id: 7,
        title: "How to use the App Directory in Next.js",
        publication: "freeCodeCamp",
        date: "2024",
        href: "https://www.freecodecamp.org/news/app-directory-nextjs/"
    },
    {
        id: 8,
        title: "How to View PDF in Expo (React Native)",
        publication: "Withframe",
        date: "2024",
        href: "https://withfra.me/react-native-tutorials/how-to-view-pdf-in-react-native"
    },
    // 2023
    {
        id: 9,
        title: "How to use Redux Toolkit to Manage State in Your React Application",
        publication: "freeCodeCamp",
        date: "2023",
        href: "https://www.freecodecamp.org/news/use-redux-toolkit-to-manage-state-in-react-apps/"
    },
    {
        id: 10,
        title: "How to Get the Length of a List in Python",
        publication: "Cherry Servers",
        date: "2023",
        href: "https://www.cherryservers.com/blog/how-to-get-the-length-of-a-list-in-python"
    },
    // 2022
    {
        id: 11,
        title: "How to Use the GitHub Actions Matrix Strategy in Deployments",
        publication: "Adam the Automator",
        date: "2022",
        href: "https://adamtheautomator.com/github-actions-matrix/"
    }
];

export default function ArticlesPage() {
    return (
        <main className="articles-page">
            <div className="articles-container">
                {/* Header */}
                <header className="articles-header">
                    <h1 className="articles-title">Articles</h1>
                    <p className="articles-subtitle">
                        I've written technical articles for publications like GetStream, freeCodeCamp,
                        Adam the Automator, DevTools Academy, and more.
                    </p>
                    <p className="articles-count">{articles.length} articles published</p>
                </header>

                {/* Articles List */}
                <div className="articles-list">
                    {articles.map((article) => (
                        <Link
                            href={article.href}
                            key={article.id}
                            target="_blank"
                            className="article-item"
                        >
                            <div className="article-content">
                                <span className="article-publication">{article.publication}</span>
                                <h2 className="article-title">{article.title}</h2>
                            </div>
                            <div className="article-meta">
                                <span className="article-date">{article.date}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
