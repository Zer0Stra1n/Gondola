module.exports = {
  notify: false,
  server: {
    middleware: {
      // overrides the second middleware default with new settings
      1: require('connect-history-api-fallback')({index: '/webroot/index.html', verbose: true})
    }
  }
};