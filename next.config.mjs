/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/tamehi",
  assetPrefix: "/tamehi",
  env: {
    NEXT_PUBLIC_RESAS_API_KEY: process.env.NEXT_PUBLIC_RESAS_API_KEY,
    NEXT_PUBLIC_PREFECTURES_API_URL:
      process.env.NEXT_PUBLIC_PREFECTURES_API_URL,
    NEXT_PUBLIC_POPULATION_API_URL: process.env.NEXT_PUBLIC_POPULATION_API_URL,
  },
  exportPathMap: async function () {
    console.log("Export Path Map called with basePath:", "/tamehi");
    return {
      "/": { page: "/" },
    };
  },
};

console.log("Next config loaded with basePath:", nextConfig.basePath);
console.log("Next config loaded with assetPrefix:", nextConfig.assetPrefix);

export default nextConfig;
