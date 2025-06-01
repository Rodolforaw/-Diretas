/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["placeholder.svg"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

module.exports = nextConfig
