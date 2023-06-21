/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // transpilePackages: ['three']
  // transpilePackages: ['three'],
}

module.exports = nextConfig

// const withTM = require('next-transpile-modules')(['three'])
// module.exports = withTM()
