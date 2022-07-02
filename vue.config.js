const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/coffee", // process.env.NODE_ENV === "production" ? "/coffee/" : "/",
})
