/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/adhd-product-research' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
