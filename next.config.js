const { getRedirectStatus } = require("next/dist/lib/load-custom-routes");

module.exports = {
  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,
  target: "serverless",
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/messaging",
        permanent: true,
      },
    ];
  },
};
