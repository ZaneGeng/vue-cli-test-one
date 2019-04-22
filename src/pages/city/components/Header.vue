<template>
  <div class="header">
    <!--顶部-->
    <div class="header-top">
      <router-link to="/" class="router">
        <span class="iconfont">&#xe624;</span>
      </router-link>
      <p>城市选择</p>
    </div>
    <!--搜索-->
    <div class="header-search">
      <input type="text" class="search-input" value="输入城市名称或字母"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    width: 100%
    height: 1.7rem
    background-color : #00bcd4
    .header-top
      position : relative
      height : .9rem
      line-height: .9rem
      text-align : center
      color: white
      .router
        position : absolute
        left: .3rem
        color: white
    .header-search
      height : .7rem
      line-height : .7em
      background-color : #00bcd4
      overflow: hidden
      text-align : center
      .search-input
        overflow: hidden
        width: 95%
        height: .6rem
        text-align : center
        border-radius : .06rem
        color: gray
</style>
