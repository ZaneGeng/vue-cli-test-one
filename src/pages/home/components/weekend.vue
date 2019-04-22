<!--周末推荐vue单文件组件-->
<template>
  <div>
    <div class="weekend-title">周末推荐</div>
    <ul>
      <li class="weekend-li" v-for="item of weekendList" :key="item.id">
        <div class="li-img-wrapper">
          <img  class="li-img"  :src="item.imgUrl" />
        </div>

        <div class="li-info" >
          <p class="info-title">{{item.title}}</p>
          <p class="info-content">{{item.content}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data: function () {
    return {
      /*
        weekendList: [{
          id: 1,
          imgUrl: require('@/assets/images/week.png'),
          title: '澳门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门',
          content: '港澳连线热销产品，澳进港出'
        }, {
          id: 2,
          imgUrl: require('@/assets/images/week2.png'),
          title: '香港+澳门5日4晚跟团游(4钻)',
          content: '直飞香港/澳门五钻酒店/双米其林推荐餐/正宗葡餐'
        }, {
          id: 3,
          imgUrl: require('@/assets/images/week.png'),
          title: '香港+澳门5日4晚半自助游(4钻)',
          content: '穿越港珠澳大桥，西九龙接站，黄大仙祠祈福，'
        }, {
          id: 4,
          imgUrl: require('@/assets/images/week2.png'),
          title: '澳门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门',
          content: '港澳连线热销产品，澳进港出'
        }, {
          id: 5,
          imgUrl: require('@/assets/images/week.png'),
          title: '澳门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门',
          content: '港澳连线热销产品，澳进港出'
        }, {
          id: 6,
          imgUrl: require('@/assets/images/week2.png'),
          title: '澳门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门',
          content: '港澳连线热销产品，澳进港出'
        }]
      */
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/selfCss.styl' /* 自定义样式 */
  .weekend-title
    width: 100%
    height: .6rem
    line-height: .6rem
    text-indent : .2rem
    margin-top: .2rem
    background-color : aliceblue
  .weekend-li
    margin-bottom: .15rem
    .li-img-wrapper
      overflow : hidden
      width: 100%
      height: 0
      padding-bottom: 33%
      .li-img
        width: 100%
    .li-info
      margin-left: .2rem
      min-width : 0 /* 配合超过可显示长度用...代替，不加没效果 */
      .info-title
        height: .54rem
        font-size: .32rem
        margin-top: .1rem
        ellipsis()  /* 超过可显示长度用...代替，封装了css效果，调用selfCss.styl */
      .info-content
        height: .4rem
        color : gray
        ellipsis()  /* 超过可显示长度用...代替，封装了css效果，调用selfCss.styl */
      .info-money
        height: .4rem
        color : orangered
        margin-top: .15rem
</style>
