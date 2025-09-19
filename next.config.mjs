/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // skip ESLint errors during npm run build
  },
};

export default nextConfig;