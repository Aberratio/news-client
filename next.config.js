const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "f0jcovsk";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: `/images/${sanityProjectId}/production/**`,
      },
    ],
    minimumCacheTTL: 86400,
    imageSizes: [32, 128],
    deviceSizes: [750, 1920],
  },
  reactStrictMode: false,
  // swcMinify: true,
  trailingSlash: true,
  output: "standalone",
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
