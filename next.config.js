const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Fix: Missing "./lib/helpers" specifier in "axios" package
      "axios/lib": path.resolve(__dirname, "./node_modules/axios/lib"),
    };

    return config;
  },
};

module.exports = nextConfig;
