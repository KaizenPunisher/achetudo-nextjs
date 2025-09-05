import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
