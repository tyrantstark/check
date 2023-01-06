const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    historyApiFallback: true,
    proxy: "http://localhost:4000",
    allowedHosts: 'auto' | 'all',
    
  },
}
