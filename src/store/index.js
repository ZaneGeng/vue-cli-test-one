import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({

  /* 公共数据仓库 */
  state: state,

  /* mutations: mutations的es6写法 */
  mutations,

  /* getter类似计算属性 */
  getters: {
    gengzheng (state) {
      return state.cityName + '★'
    }

  }
})
