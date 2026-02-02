/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  // Enable SWC minification for improved performance
  swcMinify: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Production optimizations
  compress: true,
  poweredByHeader: false,

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = withBundleAnalyzer(nextConfig);
