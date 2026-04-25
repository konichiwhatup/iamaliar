import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    const isDev = process.env.NODE_ENV !== "production";
    const frameAncestors = isDev
      ? "frame-ancestors 'self' http://localhost:3333 https://iamaliar.sanity.studio"
      : "frame-ancestors 'self' https://iamaliar.sanity.studio";
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: frameAncestors,
          },
        ],
      },
    ]
  },
};

export default nextConfig;
