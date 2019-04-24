<template>
  <div>
    <!--顶部-->
    <home-header></home-header>
    <!--轮播-->
    <home-swiper :swiperList ="swiperList"></home-swiper>
    <!--icon图标导航-->
    <home-icons :iconList ="iconList"></home-icons>
    <!--热门推荐-->
    <home-recommend :recommendList="recommendList"></home-recommend>
    <!--周末推荐-->
    <home-weekend :weekendList="weekendList"></home-weekend>

  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import { mapState } from 'vuex'

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
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      /* 最后选择的城市 */
      lastCityName: ''
    }
  },
  methods: {
    /* axios获取数据，由mounted触发这些方法 */
    getHomeInfo: function () {
      axios.get('/api/index.json?cityName=' + this.cityName)/* 从vuex的state中获取的cityName */
        .then((response) => {
          let res = response.data
          if (res.ret && res.data != null) {
            /* 轮播数据，数组类型[] */
            this.swiperList = res.data.swiperList
            /* icons导航数据，数组类型[] */
            this.iconList = res.data.iconList
            /* 热门推荐数据，数组类型[] */
            this.recommendList = res.data.recommendList
            /* 周末推荐数据，数组类型[] */
            this.weekendList = res.data.weekendList
            console.log(res.data.swiperList)
          }
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  },
  computed: {
    ...mapState({
      cityName: 'cityName'
    })
  },
  /* vue实例生命周期，页面渲染输出后执行 */
  mounted: function () {
    this.lastCityName = this.cityName
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCityName !== this.cityName) {
      this.getHomeInfo()
    }
  }
}
</script>
<style>

</style>
