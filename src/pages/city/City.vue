<template>
  <div>
    <!--顶部-->
    <city-header></city-header>
    <!--城市列表-->
    <city-list></city-list>
    <!--右侧字母表列表-->
    <city-nav></city-nav>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import CityNav from './components/Nav'
export default {
  name: 'City',
  components: {
    CityNav,
    CityList,
    CityHeader
  }
}
</script>
<style>

</style>
