<!--共用动画过渡效果-->
<template>
  <transition>
    <!--插槽，要被设置过渡效果的组件会通过插槽传入这里-->
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
  .v-enter-active, .v-leave-active {
    transition: opacity  1500ms
  }
  .v-enter, .v-leave-active {
    opacity: 0
  }
</style>
