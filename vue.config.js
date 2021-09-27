module.exports = {
    outputDir: "dist",
    assetsDir: "assets",
    lintOnSave: false,
    devServer: {
      open: true,
      host: "localhost",
      port: "8083",
      https: false,
      hotOnly: false,
      proxy: {
        "/api": {
          target: "http://localhost:8083", 
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
      },
    },
  };