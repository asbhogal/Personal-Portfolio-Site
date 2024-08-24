import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {

  eslint: {
    dirs: ['components', 'src', 'utils', 'app'],
  },
  // Your Next.js config here
  experimental: {
    reactCompiler: false,
  },
  images: {
    domains: ['localhost'],
  },
};

export default withPayload(nextConfig);
