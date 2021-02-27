module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    /**
     * @tip  原先定义 viewportWidth 750 viewportHeight: 1334
     * 这样方便不用换算原始尺寸/2 但会出现一个问题 引入的UI组件会更小相当于在原有尺寸 /2 
     * 选用一种方案：
     *  1. scss 做一个通用的函数 /2
     *  2. exclude 去除 node_modules
     */
    "postcss-px-to-viewport": {
      viewportWidth: 375,     // (Number) 视窗的宽度，对应的是我们设计稿的宽度.
      viewportHeight: 667,    // (Number) 视窗的高度，根据750设备的宽度来指定
      unitPrecision: 3,       // (Number) 指定`px`转换为视窗单位值的小数位数
      viewportUnit: 'vw',     // (String) 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'],  // (Array)指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1,       // (Number) 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false,       // (Boolean) 允许在媒体查询中转换`px
      // exclude: /(\/|\\)(node_modules)(\/|\\)/ // 不包含
    },
    'cssnano': { // 4.0的用法
      'cssnano-preset-advanced': {
        zindex: false,
        autoprefixer: false
      }
    }
  }
}