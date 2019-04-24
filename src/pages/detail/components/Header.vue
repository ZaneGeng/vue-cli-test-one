<template>
  <div>
    <!--返回按钮-->
    <router-link
      tag="div"
      to="/"
      class="header-back"
      v-if="isShow"
      >
      <span class="iconfont">&#xe624;</span>
    </router-link>
    <!--返回横幅-->
    <router-link
      tag="div"
      to="/"
      class="header"
      v-if="!isShow"
      :style="opacityStyle"
    >
      <div class="header-top">
        <span class="iconfont">&#xe624;</span>
      </div>
      <p class="header-title">景点详情</p>
    </router-link>
    <p >{{top}}</p>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShow: true,
      /* 距离顶部高度 */
      top: '',
      /* 透明度 */
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    /* 鼠标滚动事件 */
    handleScroll () {
      /* 距离顶部高度 */
      let top = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        top = document.documentElement.scrollTop /* 获取举例顶部的距离 */
      } else if (document.body) {
        top = document.body.scrollTop
      }
      console.log(top)
      if (top > 60) {
        /* 顶部渐变色显示 */
        this.opacityStyle.opacity = (top / 140) > 1 ? 1 : (top / 140)
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }

}
</script>

<style lang="stylus" scoped>
  /* 返回按钮圆圈样式 */
  .header-back
    position: absolute
    top: .3rem
    left: .3rem
    width: .8rem
    height : .8rem
    z-index: 99
    background: rgba(0, 0, 0, .5)
    border-radius : 1rem
    text-align : center
    .iconfont
      color: white
      line-height: .8rem
      padding-right:.07rem

  /* 返回横幅样式 */
  /* css样式引入样式，需要用@import */
  @import "~@/assets/style/selfCss.styl"
  .header
    position:fixed
    z-index: 99
    width: 100%
    height : 0.86rem
    line-height: 0.86rem
    background: $bgColor
    color: #fff
    text-align : center
    .header-top
      position : absolute
      left:.1rem
      top:0
      width : .64rem
</style>
