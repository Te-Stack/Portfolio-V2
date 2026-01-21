/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.hashnode.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '*.hashnode.dev',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
