<!--顶部搜索和城市选择-->
<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<!--lang使用stylus插件写css，scoped使本css只对本组件起作用，不会影响其他组件-->
<style lang="stylus" scoped>
  /* css样式引入样式，需要用@import */
  @import "~@/assets/style/selfCss.styl"
  .header
    height : 0.86rem
    line-height: 0.86rem
    display: flex
    background: $bgColor
    color: #fff
    .header-left
      width : .64rem
      float: left
      text-align: center
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
</style>
