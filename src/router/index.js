import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('@/pages/home/Home.vue')
    }, {
      path: '/city',
      name: '城市列表',
      component: () => import('@/pages/city/City.vue')
    }, {
      path: '/detail/:id',
      name: '城市详情',
      component: () => import('@/pages/detail/Detail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
