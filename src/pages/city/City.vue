<template>
  <div>
    <!--顶部-->
    <city-header :cityList="cityList"></city-header>
    <!--城市列表-->
    <city-list
      :cityList="cityList"
      :hotCityList="hotCityList"
      :navValue="navValue"
    ></city-list>
    <!--右侧字母表列表-->
    <city-nav :cityList="cityList" @navClick="handleNavChange"></city-nav>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import CityNav from './components/Nav'
import axios from 'axios'

export default {
  name: 'City',
  data: function () {
    return {
      cityList: {},
      hotCityList: [],
      navValue: ''
    }
  },
  components: {
    CityNav,
    CityList,
    CityHeader
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then((response) => {
          let res = response.data
          if (res.ret && res.data != null) {
            console.log(res.data)

            /* 所有城市，对象类型[] */
            this.cityList = res.data.cities
            this.hotCityList = res.data.hotCities
          }
        })
        .catch(function (error) {
          console.error(error)
        })
    },
    /* nav.vue子组件事件 */
    handleNavChange (navValue) {
      /* nav.vue子组件传来的值，通过自己父组件，再传递给子组件list.vue */
      this.navValue = navValue
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style>

</style>
