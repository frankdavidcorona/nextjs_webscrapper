/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['img.asmedia.epimg.net'],
  },
}

module.exports = nextConfig
