import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/brand/logo-fundo-azul.jpg",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
