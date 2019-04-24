<template>
  <div>
    <!--顶部返回-->
    <detail-header></detail-header>
    <!--banner组件 -->
    <detail-banner></detail-banner>
    <!--列表-->
    <detail-list :categoryList="categoryList"></detail-list>
    <div style="height:1100px">1</div>
  </div>
</template>

<script>

import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  data () {
    return {
      /* 票列表 */
      categoryList: []
    }
  },
  components: {
    DetailList,
    DetailHeader,
    DetailBanner
  },
  methods: {
    getDetail () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then((response) => {
          let res = response.data
          if (res.ret && res.data != null) {
            console.log(res.data)
            /* 票列表 */
            this.categoryList = res.data.categoryList
          }
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  },
  /* 生命周期钩子 */
  mounted () {
    /* 读取json数据 */
    this.getDetail()
  }
}
</script>

<style lang="stylus" scoped>

</style>
