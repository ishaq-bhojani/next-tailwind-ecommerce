/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'tailwindui.com', "fakestoreapi.com"],
  },
}

module.exports = nextConfig
