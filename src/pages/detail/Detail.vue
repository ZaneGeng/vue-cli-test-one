<template>
  <div>
    <!--顶部返回-->
    <detail-header></detail-header>
    <!--banner组件 -->
    <detail-banner></detail-banner>
    <div style="height:1100px">1</div>
  </div>
</template>

<script>

import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner
  }
}
</script>

<style lang="stylus" scoped>

</style>
