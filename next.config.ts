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
    // Sanity Studio がデプロイされる URL は *.sanity.studio のサブドメイン
    // ローカル開発時は localhost:3333 も許可
    const frameAncestors = isDev
      ? "frame-ancestors 'self' http://localhost:3333 https://*.sanity.studio"
      : "frame-ancestors 'self' https://*.sanity.studio";
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
