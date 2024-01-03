/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.iconscout.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
