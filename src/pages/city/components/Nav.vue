<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'CityNav'
}
</script>

<style lang="stylus" scoped>
  .list
    display: flex
    flex-direction : column
    justify-content : center
    position: absolute
    top: 1.7rem
    right: 0
    bottom: 0
    width: .4rem
    text-align: center
    line-height: .4rem
    background-color : red
</style>
