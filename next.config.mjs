/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/Parallax-effect" : "",
};

export default nextConfig;
