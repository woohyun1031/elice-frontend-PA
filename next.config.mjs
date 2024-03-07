/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/edu',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-api.elice.io',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
