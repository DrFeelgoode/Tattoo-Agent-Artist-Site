/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://tattooagent.art",
  // robots.txt is manually maintained in public/robots.txt
  // with AI crawler directives and llms.txt references
  generateRobotsTxt: false,
  exclude: ["/api/*"],
};
