import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        destination: 'https://www.amansinghbhogal.com/api/media/file/:path*',
        source: '/api/media/file/:path*',
      },
    ];
  },
};

export default nextConfig;
