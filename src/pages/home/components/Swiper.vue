<!--轮播图vue单文件组件-->
<template>
  <div class="swipper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide><img class="swiper-img" src="@/assets/images/photo1.jpg" /></swiper-slide>
      <swiper-slide><img class="swiper-img" src="@/assets/images/photo2.jpg" /></swiper-slide>
      <swiper-slide v-for="item of swiperList"  :key="item.id" >
          <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- 分页样式选择 -->
      <div class="swiper-pagination" slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      /* 循环样式 */
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        /* 循环翻页 */
        loop: true,
        /* 自动播放 */
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      },
      /* 循环显示图片 */
      swiperList: [{
        id: '0001',
        imgUrl: 'http://c.zg101.com/zanePortal/static/images/banner/photo1.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://c.zg101.com/zanePortal/static/images/banner/photo2.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swipper
    overflow : hidden
    width:100%
    height : 0
    padding-bottom : 39%
    background-color : lightgray
  .swipper >>> .swiper-pagination-bullet-active /* >>>穿透，使按钮圆圈变色 */
    background : white
  .swiper-img
    width:100%
</style>
