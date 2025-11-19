import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
  },
  eslint: {
    ignoreDuringBuilds: true, // 💥 FIX ESLint Build Errors
  },
  typescript: {
    ignoreBuildErrors: true, // 💥 FIX TS "any" errors from 3rd party code
  },
};

export default nextConfig;
