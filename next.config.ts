import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/**",
        search: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
