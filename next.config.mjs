/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/tamehi", // リポジトリ名に合わせて設定
  assetPrefix: "/tamehi", // 静的ファイルのプレフィックスを設定
  env: {
    NEXT_PUBLIC_RESAS_API_KEY: process.env.NEXT_PUBLIC_RESAS_API_KEY,
    NEXT_PUBLIC_PREFECTURES_API_URL:
      process.env.NEXT_PUBLIC_PREFECTURES_API_URL,
    NEXT_PUBLIC_POPULATION_API_URL: process.env.NEXT_PUBLIC_POPULATION_API_URL,
  },
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
};

export default nextConfig;
