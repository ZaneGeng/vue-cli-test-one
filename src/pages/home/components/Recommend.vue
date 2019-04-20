<!--热门推荐vue单文件组件-->
<template>
  <div>
    <div class="recommend-title">热门推荐</div>
    <ul>
      <li class="recommend-li" v-for="item of recommendList" :key="item.id">
          <img  class="li-img"  :src="item.imgSrc" />
        <!--<div class="li-info">
          <p class="info-title">澳门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门 </p>
          <p class="info-content">港澳连线热销产品，澳进港出 </p>
          <p class="info-money">￥57元 </p>
        </div>-->
        <div class="li-info" >
          <p class="info-title">{{item.title}}</p>
          <p class="info-content">{{item.content}}</p>
          <p class="info-money">{{item.money}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [{
        id: 1,
        imgSrc: require('@/assets/images/p1.png'),
        title: '澳门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门',
        content: '港澳连线热销产品，澳进港出',
        money: '￥57元 '
      }, {
        id: 2,
        imgSrc: require('@/assets/images/p1.png'),
        title: '香港+澳门5日4晚跟团游(4钻)',
        content: '直飞香港/澳门五钻酒店/双米其林推荐餐/正宗葡餐',
        money: '￥1157元 '
      }, {
        id: 3,
        imgSrc: require('@/assets/images/p1.png'),
        title: '香港+澳门5日4晚半自助游(4钻)',
        content: '穿越港珠澳大桥，西九龙接站，黄大仙祠祈福，',
        money: '￥321元 '
      }, {
        id: 4,
        imgSrc: require('@/assets/images/p1.png'),
        title: '澳门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门',
        content: '港澳连线热销产品，澳进港出',
        money: '￥57元 '
      }, {
        id: 4,
        imgSrc: require('@/assets/images/p1.png'),
        title: '澳门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门',
        content: '港澳连线热销产品，澳进港出',
        money: '￥57元 '
      }, {
        id: 4,
        imgSrc: require('@/assets/images/p1.png'),
        title: '澳门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门门+香港5日自由行·1晚澳门',
        content: '港澳连线热销产品，澳进港出',
        money: '￥57元 '
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/selfCss.styl' /* 自定义样式 */
  .recommend-title
    width: 100%
    height: .6rem
    line-height: .6rem
    text-indent : .2rem
    margin-top: .2rem
    background-color : aliceblue
  .recommend-li
    display: flex
    margin-bottom: .15rem
    .li-img
      width: 2rem
      height: 1.5rem
    .li-info
      flex : 1
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
