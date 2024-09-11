/** @type {import('next').NextConfig} */
export const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tse1.mm.bing.net',
                port: '',
            },
        ],
    },
};

export default nextConfig;
