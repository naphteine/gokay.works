/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.gokay.works",
        port: "",
        pathname: "/gg/**",
      },
    ],
  },
};

export default nextConfig;
