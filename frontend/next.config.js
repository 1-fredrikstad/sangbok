const { i18n } = require("./next-i18next.config");

/* const config = {
    publicRuntimeConfig: {
        localeSubpaths,
    },
} */
module.exports = {
  target: "serverless",
  i18n,
};

//module.exports = withPlugins([], config);
