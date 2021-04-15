const withPWA = require('next-pwa');
const cacheStrats = require('./cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching: cacheStrats,
  },
  target: 'serverless',
});
