<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="arae">
        <div class="title" id="anchor">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <p class="button" >{{this.$store.state.cityName}}</p>
          </div>
        </div>
      </div>

      <!--热门城市-->
      <div class="arae">
        <div class="title">
          热门城市
        </div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCityList"
            :key="item.id"
          >
            <p class="button"  @click="handleClickCity(item.name)">{{item.name}}</p>
          </div>
        </div>
      </div>

      <!--城市名称-->
      <div class="arae" v-for="(item , key) of cityList" :key="key" :ref="key">
        <div class="title">
          {{key}}
        </div>
        <ul class="city-list">
          <li
            class="city"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleClickCity(innerItem.name)"
          >
            {{innerItem.name}}
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cityList: Object,
    hotCityList: Array,
    /* 点击右侧nav字母导航时传入 */
    navValue: String
  },
  methods: {
    /* 点击选中城市 */
    handleClickCity (cityName) {
      /* vuex 的mutations操作，修改state仓库的值 */
      /* this.$store.commit('changeCity', cityName) */
      this.changeCity(cityName)
      /* vue-router跳转 */
      this.$router.push('/')
    },
    ...mapMutations({
      changeCity: 'changeCity'
    })
  },

  /* 监听navValue，变化后执行，也就是点击右侧nav字母时执行 */
  watch: {
    navValue () {
      if (this.navValue) {
        const element = this.$refs[this.navValue][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  /* 生命周期钩子 */
  mounted: function () {
    /* 初始化better-scroll滚动页面插件 */
    this.scroll = new BScroll(this.$refs.wrapper, {})
  }
}
</script>

<style lang="stylus" scoped>
  .list
    overflow: hidden
    position: absolute
    top: 1.7rem
    left: 0
    right: 0
    bottom: 0
    .arae
      width: 100%
      overflow : hidden
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

</style>
