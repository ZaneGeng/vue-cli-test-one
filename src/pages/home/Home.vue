<template>
  <div>
    <!--顶部-->
    <home-header></home-header>
    <!--轮播-->
    <home-swiper></home-swiper>
    <home-icons></home-icons>

  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
export default {
  name: 'Home',
  /* 使用局部组件 */
  components: {
    HomeIcons,
    HomeSwiper,
    HomeHeader
  }
}
</script>
<style>

</style>
