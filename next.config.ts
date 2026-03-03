import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  // Strict mode for catching bugs early
  reactStrictMode: true,
};

export default nextConfig;
