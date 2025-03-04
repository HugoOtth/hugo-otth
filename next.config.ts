import type { NextConfig } from "next";

module.exports = {
  output: 'export',
  basePath: '/hugo-otth',
  assetPrefix: process.env.MODE_ENV === 'production' ? 'https://www.hugo-otth.com' : '',
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
