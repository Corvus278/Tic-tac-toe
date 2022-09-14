/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/Tic-tac-toe/" : "",
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
