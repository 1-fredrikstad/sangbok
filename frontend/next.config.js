const withPWA = require('next-pwa');
const cacheStrats = require('./cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching: cacheStrats,
  },
  target: 'serverless',
});
