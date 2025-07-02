/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "utfs.io",
      "images.macrumors.com",
      "platform.theverge.com",
      "i0.wp.com"
    ]
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
