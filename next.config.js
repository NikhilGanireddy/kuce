/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
        },
    }, images: {
        domains: ["www.kuce.ac.in", "kuce.ac.in"],
    }
}

module.exports = nextConfig
