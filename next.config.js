/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: false,
    images: {
        unoptimized: true
    },
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
}

module.exports = nextConfig
