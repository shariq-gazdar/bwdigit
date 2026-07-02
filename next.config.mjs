/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bwdigit.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
