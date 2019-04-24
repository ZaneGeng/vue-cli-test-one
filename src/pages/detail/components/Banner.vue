<template>
  <div>
    <!--banner图-->
    <div class="banner">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
        @click="handleImgClick"
      />
      <div class="banner-info">
        <p class="info-title">大连圣亚海洋世界(AAAA景区)</p>
        <p class="info-number"><span class="iconfont">&#xe632;</span> 39</p>
      </div>
    </div>

    <!--画廊轮播图-->
    <fade-animation>
      <!--作为插槽放入动画中，实现过渡效果-->
      <common-gallary
        :gallaryImgList="gallaryImgList"
        v-show="gallaryShow"
        @closeGallary="closeGallary"
      ></common-gallary>
    </fade-animation>

  </div>

</template>

<script>
import CommonGallary from '../../common/gallary/Gallary'
import axios from 'axios'
import FadeAnimation from '../../common/fade/FadeAnimition'

export default {
  name: 'DetailBanner',
  data () {
    return {
      /* gallary画廊是否显示 */
      gallaryShow: false,
      /* gallary画廊数据 */
      gallaryImgList: []
    }
  },
  components: {
    FadeAnimation,
    CommonGallary
  },
  methods: {
    /* 获取gallary画廊数据 */
    getGallary () {
      axios.get('/api/detail.json')
        .then((response) => {
          let res = response.data
          if (res.ret && res.data != null) {
            console.log(res.data)

            this.gallaryImgList = res.data.gallaryImgs
          }
        })
        .catch(function (error) {
          console.error(error)
        })
    },
    /* 显示gallary画廊 */
    handleImgClick () {
      this.gallaryShow = true
    },
    /* 隐藏gallary画廊 */
    closeGallary () {
      this.gallaryShow = false
    }
  },
  /* 生命周期钩子 */
  mounted () {
    /* 读取画廊轮播图json数据 */
    this.getGallary()
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow : hidden
    height: 0
    padding-bottom : 55%
    background-color : #cccccc
    position: relative
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      bottom: 0
      left: 0
      right: 0
      height: .6rem
      line-height : .6rem
      background: rgba(0, 0, 0, .5)
      color: white
      .info-title
        flex: 1
        margin-left: .2rem
      .info-number
        margin-right: .2rem
</style>
