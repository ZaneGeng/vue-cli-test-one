<template>
  <div>
    <!--顶部-->
    <home-header></home-header>
    <!--轮播-->
    <home-swiper></home-swiper>

  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
export default {
  name: 'Home',
  /* 使用局部组件 */
  components: {
    HomeSwiper,
    HomeHeader
  }
}
</script>
<style>

</style>
