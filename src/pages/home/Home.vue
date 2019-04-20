<template>
  <div>
    <!--顶部-->
    <home-header></home-header>
    <!--轮播-->
    <home-swiper></home-swiper>
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
export default {
  name: 'Home',
  /* 使用局部组件 */
  components: {
    HomeWeekend,
    HomeRecommend,
    HomeIcons,
    HomeSwiper,
    HomeHeader
  }
}
</script>
<style>

</style>
