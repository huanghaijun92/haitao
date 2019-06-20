const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "https://api.asilu.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
      }
    })
  );
  app.use(
    proxy("/readnovel", {
      target: "https://m.readnovel.com",
      changeOrigin: true,
      pathRewrite: {
        "^/readnovel": ""
      }
    })
  );
};
