<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "out",
};
=======
const path = require("path");
>>>>>>> 0508489bd3762ac4b641ad657b20b6d77373a170

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};
