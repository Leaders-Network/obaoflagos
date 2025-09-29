/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "guardian.ng",
      "i0.wp.com",
      "tribuneonlineng.com",
      "dailypost.ng",
      "netstorage-legit.akamaized.net",
      "www.vanguardngr.com",
      "thenationonlineng.net",
      "dailytrust.com",
      "punchng.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
