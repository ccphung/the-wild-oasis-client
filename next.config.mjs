/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["wykcrrqsrohyydqeboxy.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wykcrrqsrohyydqeboxy.supabase.co",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
