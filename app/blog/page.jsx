import Link from "next/link";
import Image from "next/image";
import { getHashnodePosts } from "@/lib/hashnode";
import "./blog.css";

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
    const posts = await getHashnodePosts(10);

    return (
        <main className="blog-page">
            <div className="blog-container">
                {/* Header */}
                <header className="blog-header">
                    <h1 className="blog-title">Blog</h1>
                    <p className="blog-subtitle">
                        Thoughts on technologies and lifestyle.
                    </p>
                </header>

                {/* Blog Grid */}
                {posts.length > 0 ? (
                    <div className="blog-grid">
                        {posts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={post.id}
                                className="blog-card"
                            >
                                <div className="blog-card-image">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={600}
                                        height={340}
                                        className="blog-image"
                                    />
                                </div>
                                <div className="blog-card-content">
                                    <span className="blog-date">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </span>
                                    <h2 className="blog-card-title">{post.title}</h2>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <div className="blog-tags">
                                        {post.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="blog-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="blog-empty">
                        <p>No blog posts yet. Check back soon!</p>
                        <Link
                            href="https://quincypulse.hashnode.dev"
                            target="_blank"
                            className="blog-hashnode-link"
                        >
                            Visit my Hashnode blog →
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
}
