
// 移动端开发调试工具
const EaudaWebpackPlugin = require('eruda-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV
const assetsDir = 'static'

module.exports = {
  // 基本路径
  publicPath: './',
  assetsDir: assetsDir,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/dev-api': {
        target: `http://10.159.41.11:49000`,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    
    // 清除prefetch
    // 是一种 resource hint，用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。
    // Prefetch 链接将会消耗带宽。如果你的应用很大且有很多 async chunk，而用户主要使用的是对带宽较敏感的移动端，
    // 那么你可能需要关掉 prefetch 链接并手动选择要提前获取的代码区块
    config.plugins.delete('prefetch')

    // 更改下 source-map 方式
    config.when(NODE_ENV === 'development', config => config.devtool('cheap-eval-source-map'))
  },
  configureWebpack: (config) => {

    // 测试环境和本地环境 增加 虚拟控制台
    if (NODE_ENV !== 'production') {
      config.plugins.push(new EaudaWebpackPlugin({ force: true, entry: [/app.*\.js$/] }))
    }
    
    // 性能警告
    config.performance = {
      hints:'warning',
      //入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }
  }
}
