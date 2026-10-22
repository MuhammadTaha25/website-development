import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow the placeholder SVGs used during development; replace with real
    // raster photography before launch and this can be removed. No remote
    // image domains/patterns are configured, so next/image only ever
    // optimizes local files from /public — not arbitrary attacker-supplied
    // SVGs — which keeps this low-risk despite the flag being on.
    dangerouslyAllowSVG: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
