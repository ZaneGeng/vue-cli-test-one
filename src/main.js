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
/* vuex数据框架 */
import store from './store'
/* 防止低版本安卓设备白屏插件 */
import 'babel-polyfill'

Vue.config.productionTip = false
fastClick.attach(document.body)/* 避免移动端1px边框问题 */
Vue.use(VueAwesomeSwiper)/* 轮播插件vue-awesome-swiper */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
