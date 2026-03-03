/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://tattooagent.art",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
  exclude: ["/api/*"],
};
