<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item,key) of cityList"
      :key="key"
      @click="handleNavClick"
    >
      {{key}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityNav',
  props: {
    cityList: Object
  },
  data () {
    return {
      /* 配合nav导航使用，作为一个标识 ，开始触摸时设置为true，停止后设置为false */
      touchStatus: false
    }
  },
  methods: {
    handleNavClick (e) {
      /* 获取点击的dom中html值（获取字母) */
      let innerText = e.target.innerText
      /* 向外触发事件将所点击的字母值传给父组件，然后父组件再传给list.vue子组件，实现兄弟组件间传值 */
      this.$emit('navClick', innerText)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list
    display: flex /* 垂直居中 */
    flex-direction : column /* 垂直居中 */
    justify-content : center /* 垂直居中 */
    position: absolute
    top: 1.7rem
    right: .15rem
    bottom: 0
    width: .4rem
    text-align: center
    line-height: .45rem
    color: #00bcd4
</style>
