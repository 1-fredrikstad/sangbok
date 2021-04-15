const withPWA = require("next-pwa");
const cacheStrats = require("./cache")

module.exports =withPWA({
  target: 'serverless',
  pwa: {
    dest: "public",
    runtimeCaching: cacheStrats
  }
});
