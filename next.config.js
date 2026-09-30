/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  assetPrefix: "/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
