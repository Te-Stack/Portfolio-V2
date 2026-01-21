import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Custom frontmatter parser (no external dependencies needed)
function parseFrontmatter(fileContents) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = fileContents.match(frontmatterRegex);

    if (!match) {
        return { data: {}, content: fileContents };
    }

    const frontmatterStr = match[1];
    const content = match[2];

    // Parse YAML-like frontmatter
    const data = {};
    const lines = frontmatterStr.split('\n');

    for (const line of lines) {
        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) continue;

        const key = line.slice(0, colonIndex).trim();
        let value = line.slice(colonIndex + 1).trim();

        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }

        // Parse arrays (e.g., tags: ["a", "b"])
        if (value.startsWith('[') && value.endsWith(']')) {
            value = value.slice(1, -1)
                .split(',')
                .map(item => item.trim().replace(/^["']|["']$/g, ''));
        }

        data[key] = value;
    }

    return { data, content };
}

export function getAllPosts() {
    // Get all markdown files from the posts directory
    const fileNames = fs.readdirSync(postsDirectory);

    const allPosts = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            // Remove ".md" from file name to get slug
            const slug = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Parse frontmatter
            const { data, content } = parseFrontmatter(fileContents);

            return {
                slug,
                title: data.title || '',
                excerpt: data.excerpt || '',
                date: data.date || '',
                author: data.author || '',
                tags: Array.isArray(data.tags) ? data.tags : [],
                image: data.image || '',
                content
            };
        });

    // Sort posts by date (newest first)
    return allPosts.sort((a, b) => {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
    });
}

export function getPostBySlug(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = parseFrontmatter(fileContents);

    return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        author: data.author || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        image: data.image || '',
        content
    };
}

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => fileName.replace(/\.md$/, ''));
}
