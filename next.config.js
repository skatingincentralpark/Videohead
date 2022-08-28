module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "i.vimeocdn.com"],
  },
  async redirects() {
    return [
      {
        source: "/admin/:path*",
        destination: "https://sanity-nextjs-js-boilerplate.sanity.studio",
        permanent: true,
      },
    ];
  },
};
