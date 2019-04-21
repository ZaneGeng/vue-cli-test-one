<!--轮播图vue单文件组件-->
<template>
  <div class="swipper">
    <swiper :options="swiperOption" v-if="swiperList.length>1" ><!--必须添加v-if，不然轮播插件loop无效-->
      <!-- slides -->
      <swiper-slide v-for="item of swiperList"  :key="item.id"  >
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
  props: {
    swiperList: Array
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
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swipper
    overflow : hidden
    width:100%
    height : 0
    padding-bottom : 31%
    background-color : lightgray
  .swipper >>> .swiper-pagination-bullet-active /* >>>穿透，使按钮圆圈变色 */
    background : white
  .swiper-img
    width:100%
</style>
