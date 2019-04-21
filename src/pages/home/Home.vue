<template>
  <div>
    <!--顶部-->
    <home-header></home-header>
    <!--轮播-->
    <home-swiper :swiperList="swiperList"></home-swiper>
    <!--icon图标导航-->
    <home-icons></home-icons>
    <!--热门推荐-->
    <home-recommend></home-recommend>
    <!--周末推荐-->
    <home-weekend></home-weekend>

  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'

export default {
  name: 'Home',
  /* 使用局部组件 */
  components: {
    HomeWeekend,
    HomeRecommend,
    HomeIcons,
    HomeSwiper,
    HomeHeader
  },
  data: function () {
    return {
      swiperList: []
    }
  },
  methods: {
    /* mounted触发这些方法 */
    getHomeInfo: function () {
      axios.get('/api/index.json')
        .then((response) => {
          let res = response.data
          if (res.ret && res.data != null) {
            /* 轮播数据，数组类型[] */
            this.swiperList = res.data.swiperList
            console.log(res.data.swiperList)
          }
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  },
  /* vue实例生命周期，页面渲染输出后执行 */
  mounted: function () {
    this.getHomeInfo()
  }
}
</script>
<style>

</style>
