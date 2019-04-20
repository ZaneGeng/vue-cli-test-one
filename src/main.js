// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
/* 基础样式 */
import './assets/style/base.css'
/* 避免移动端1px边框问题 */
import 'style/border.css'
/* iconfont图标 */
import '@/assets/style/iconfont.css'
/* 轮播插件vue-awesome-swiper */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)/* 避免移动端1px边框问题 */
Vue.use(VueAwesomeSwiper)/* 轮播插件vue-awesome-swiper */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
