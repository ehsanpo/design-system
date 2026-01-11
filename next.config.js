/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/design-system',
  images: {
    domains: ['images.pexels.com'],
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;