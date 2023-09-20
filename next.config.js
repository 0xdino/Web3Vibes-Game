const { withSentryConfig } = require("@sentry/nextjs");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(eot|ttf|woff|woff2|otf|mp4|pdf|webm|gltf)$/,
      type: "asset",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);

if (process.env.SENTRY_DSN) {
  module.exports = withSentryConfig(
    module.exports,
    { silent: true },
    { hideSourceMaps: true }
  );
}
