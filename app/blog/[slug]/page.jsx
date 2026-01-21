import { getHashnodePostBySlug, getHashnodePosts } from "@/lib/hashnode";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import "./post.css";

export const revalidate = 3600; // Revalidate every hour

// Generate static paths for all posts
export async function generateStaticParams() {
    const posts = await getHashnodePosts(50);
    return posts.map(post => ({ slug: post.slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getHashnodePostBySlug(slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${post.title} | Quincy Oghenetejiri`,
        description: post.excerpt
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = await getHashnodePostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Create share URL for X/Twitter
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://quincyoghenetejiri.dev/blog/${slug}`)}`;

    return (
        <main className="post-page">
            <article className="post-container">
                {/* Back link */}
                <Link href="/blog" className="back-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Blog
                </Link>

                {/* Post Header */}
                <header className="post-header">
                    <div className="post-meta">
                        <span className="post-date">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                        <span className="post-author">by {post.author.name}</span>
                    </div>
                    <h1 className="post-title">{post.title}</h1>
                    <div className="post-tags">
                        {post.tags.map(tag => (
                            <span key={tag} className="post-tag">{tag}</span>
                        ))}
                    </div>
                </header>

                {/* Featured Image */}
                {post.image && (
                    <div className="post-image-wrapper">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={1200}
                            height={600}
                            className="post-image"
                            priority
                        />
                    </div>
                )}

                {/* Post Content - HTML from Hashnode */}
                <div
                    className="post-content hashnode-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share Section */}
                <div className="post-share">
                    <Link href="/blog" className="back-to-blog-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Blog
                    </Link>
                    <a
                        href={shareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-x-btn"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        Share on X
                    </a>
                </div>
            </article>
        </main>
    );
}
