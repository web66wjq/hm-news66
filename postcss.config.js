module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 设置为37.5是为了不影响到第三方的组件库 比如vant-ui, 我们需要把设计稿缩小一倍测量
      // 设置为75，直接量750的设计稿 640
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
