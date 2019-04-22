<template>
  <div class="header">
    <!--顶部-->
    <div class="header-top">
      <router-link to="/" class="router">
        <span class="iconfont">&#xe624;</span>
      </router-link>
      <p>城市选择</p>
    </div>
    <!--搜索-->
    <div class="header-search">
      <input type="text" class="search-input" placeholder="输入城市名称或字母" v-model="searchName"/>
    </div>

    <!--搜索结果显示-->
    <div class="search-arae" v-if="searchName != ''">
      <ul class="city-list">
        <li class="city"  v-for="item of listSearchCity" :key="item.id">
          {{item.name}}
        </li>
      </ul>
      <div class="notFound" v-if="listSearchCity.length <= 0">没有搜索到匹配的值</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  props: {
    cityList: Object
  },
  data () {
    return {
      searchName: ''
    }
  },
  computed: {
    /* 获取搜索到的city的数组 */
    listSearchCity: function () {
      const list = []
      for (let i in this.cityList) {
        this.cityList[i].forEach((item, index) => {
          if (item.name.indexOf(this.searchName) > -1) {
            list.push(item)
          }
        })
      }
      return list
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    width: 100%
    height: 1.7rem
    background-color : #00bcd4
    .header-top
      position : relative
      height : .9rem
      line-height: .9rem
      text-align : center
      color: white
      .router
        position : absolute
        left: .3rem
        color: white
    .header-search
      height : .7rem
      line-height : .7em
      background-color : #00bcd4
      overflow: hidden
      text-align : center
      .search-input
        overflow: hidden
        width: 95%
        height: .6rem
        text-align : center
        border-radius : .06rem
        color: gray
    .search-arae
      width: 100%
      overflow : hidden
      z-index: 1
      position: absolute
      top: 1.7rem
      lert: 0
      right: 0
      bottom: 0
      background-color : white
      .title
        height: .6rem
        line-height: .6rem
        background-color: #eee
        color: #666
        font-size: .26rem
        border-bottom: 1px solid #cccccc
        text-indent : .2rem
      .button-list
        width: 100%
        overflow : hidden
        padding-top: .1rem
        .button-wrapper
          float: left
          width: 33.33%
          .button
            text-align: center
            border: 1px solid #cccccc
            padding:.1rem 0
            margin: .2rem
            border-radius : .06rem
      .city-list
        overflow : hidden
        .city
          heigth: .7rem
          line-height : .7rem
          color:  #666
          padding-left: .2rem
          border-bottom: .02rem solid #cccccc
      .notFound
        line-height : 1rem
        color: #333333
        text-indent :.5rem
        border-bottom: .02rem solid  #00bcd4
</style>
