/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  i18n: {
    locales: ["en", "ur"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;