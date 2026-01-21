// Hashnode API integration
const HASHNODE_API = 'https://gql.hashnode.com';
const HASHNODE_HOST = 'quincyoghenetejiri.hashnode.dev';

// GraphQL query to fetch all publications
const GET_POSTS_QUERY = `
    query GetPosts($host: String!, $first: Int!) {
        publication(host: $host) {
            title
            posts(first: $first) {
                edges {
                    node {
                        id
                        title
                        brief
                        slug
                        publishedAt
                        coverImage {
                            url
                        }
                        tags {
                            name
                        }
                        author {
                            name
                            profilePicture
                        }
                    }
                }
            }
        }
    }
`;

// GraphQL query to fetch a single post by slug
const GET_POST_BY_SLUG_QUERY = `
    query GetPostBySlug($host: String!, $slug: String!) {
        publication(host: $host) {
            post(slug: $slug) {
                id
                title
                brief
                slug
                publishedAt
                coverImage {
                    url
                }
                content {
                    html
                }
                tags {
                    name
                }
                author {
                    name
                    profilePicture
                }
            }
        }
    }
`;

export async function getHashnodePosts(limit = 10) {
    try {
        const response = await fetch(HASHNODE_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: GET_POSTS_QUERY,
                variables: {
                    host: HASHNODE_HOST,
                    first: limit
                }
            }),
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        const data = await response.json();

        if (data.errors) {
            console.error('Hashnode API Error:', data.errors);
            return [];
        }

        const posts = data.data?.publication?.posts?.edges || [];

        return posts.map(({ node }) => ({
            id: node.id,
            title: node.title,
            excerpt: node.brief,
            slug: node.slug,
            date: node.publishedAt,
            image: node.coverImage?.url || '/default-blog-image.jpg',
            tags: node.tags?.map(tag => tag.name) || [],
            author: {
                name: node.author?.name || 'Quincy Oghenetejiri',
                image: node.author?.profilePicture
            }
        }));
    } catch (error) {
        console.error('Failed to fetch Hashnode posts:', error);
        return [];
    }
}

export async function getHashnodePostBySlug(slug) {
    try {
        const response = await fetch(HASHNODE_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: GET_POST_BY_SLUG_QUERY,
                variables: {
                    host: HASHNODE_HOST,
                    slug: slug
                }
            }),
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        const data = await response.json();

        if (data.errors) {
            console.error('Hashnode API Error:', data.errors);
            return null;
        }

        const post = data.data?.publication?.post;

        if (!post) return null;

        return {
            id: post.id,
            title: post.title,
            excerpt: post.brief,
            slug: post.slug,
            date: post.publishedAt,
            image: post.coverImage?.url || '/default-blog-image.jpg',
            content: post.content?.html || '',
            tags: post.tags?.map(tag => tag.name) || [],
            author: {
                name: post.author?.name || 'Quincy Oghenetejiri',
                image: post.author?.profilePicture
            }
        };
    } catch (error) {
        console.error('Failed to fetch Hashnode post:', error);
        return null;
    }
}
