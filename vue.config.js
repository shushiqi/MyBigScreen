const webpack = require('webpack');
const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './', //publicPath取代了baseUrl
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: true,
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("./src/")).set("public", resolve("./public"))
  },
  configureWebpack: () => {

  },
  // 配置 webpack-dev-server
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: "https://www.enter-iot.cn",
        // target: "http://localhost:25279/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ''
        }
      },
      // '/yzkapi': {
      //   target: "http://api.yzk.yzkcloud.com:8080/webapi/zhixun",
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/yzkapi": ''
      //   }
      // },
    },
    before: app => {
    }
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
}
