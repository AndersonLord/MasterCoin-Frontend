/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  exportPathMap: () => ({
    "/": {
      page: "/",
    },
  }),
}
