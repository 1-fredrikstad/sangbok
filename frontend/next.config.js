const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");
const cacheStrats = require("./cache")

/* const config = {
    publicRuntimeConfig: {
        localeSubpaths,
    },
} */
module.exports =withPWA({
  i18n,
  pwa: {
    dest: "public",
    runtimeCaching: cacheStrats
  }
});

//module.exports = withPlugins([], config);
