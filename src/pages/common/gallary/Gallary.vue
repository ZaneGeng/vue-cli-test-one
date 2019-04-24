<!--画廊轮播-->
<template>
  <div class="gallary" @click="handleGallayClick">
    <div class="wrapper">
      <!--swiper轮播插件-->
      <swiper :options="swiperOption" v-if="gallaryImgList.length>0">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of gallaryImgList" :key="index">
          <img class="swiper-img" :src="item"/>
        </swiper-slide>
        <!-- 分页样式选择 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    /* 从父组件banner获取画廊图片数据 */
    gallaryImgList: Array
  },
  data: function () {
    return {
      /* 循环vue-awesome-swiper插件配置 */
      swiperOption: {
        /* 自动播放 */
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        /* 循环翻页 */
        loop: true,
        /* 样式 */
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        /* 循环自我刷新次，避免点击显示后出现轮播显示错误 */
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    /* 关闭画廊gallary向外触发 */
    handleGallayClick () {
      this.$emit('closeGallary')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallary
    position : fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color : red
    display: flex /* 垂直居中 */
    flex-direction : column /* 垂直居中 */
    justify-content : center /* 垂直居中 */
    .wrapper
      background-color : white
      .swiper-pagination-fraction
        color: white
      .swiper-img
        width: 100%
</style>
