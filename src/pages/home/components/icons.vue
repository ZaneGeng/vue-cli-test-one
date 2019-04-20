<template>
  <div class="icons">
    <swiper :options="swiperOption"><!--使用了轮播vue-awesome-swiper插件，参考icons.vue-->
      <!--第一页轮播-->
      <swiper-slide>
        <div class="icon">
          <div class="icon-img-div">
            <img class="icon-img-self" src="@/assets/images/q10.png" />
          </div>
          <p class="icon-p">城市景点1</p>
        </div>
        <div class="icon">
          <div class="icon-img-div">
            <img class="icon-img-self" src="@/assets/images/q10.png" />
          </div>
          <p class="icon-p">城市景点2</p>
        </div>
        <div class="icon">
          <div class="icon-img-div">
            <img class="icon-img-self" src="@/assets/images/q10.png" />
          </div>
          <p class="icon-p">城市景点3</p>
        </div>
        <div class="icon">
          <div class="icon-img-div">
            <img class="icon-img-self" src="@/assets/images/q10.png" />
          </div>
          <p class="icon-p">城市景点3</p>
        </div>
        <div class="icon">
          <div class="icon-img-div">
            <img class="icon-img-self" src="@/assets/images/q10.png" />
          </div>
          <p class="icon-p">城市景点3</p>
        </div>
      </swiper-slide>

      <!--第二  页轮播-->
      <swiper-slide>
        <div class="icon">
          <div class="icon-img-div">
            <img class="icon-img-self" src="@/assets/images/q10.png" />
          </div>
          <p class="icon-p">城市景点</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
  .icons
    width: 100%
    height: 0
    padding-bottom: 50%
    /*background-color lightgray*/
    .icon
      position : relative
      overflow : hidden
      float: left
      width: 25%
      height : 0
      padding-bottom: 25%
      /* background-color : red */
      .icon-img-div
        position : absolute
        top: 0
        left: 0
        right : 0
        bottom: .44rem
        width: 100%
        /* background-color yellow */
        .icon-img-self
          display: block
          height: 90%
          margin: 5% auto
      .icon-p
        position : absolute
        bottom: 0
        left: 0
        width:100%
        height:.44rem
        line-height: .44rem
        text-align : center
        /* background-color blueviolet */
</style>
