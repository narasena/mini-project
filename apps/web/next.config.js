/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.loket.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

module.exports = nextConfig
