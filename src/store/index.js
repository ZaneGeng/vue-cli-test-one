import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /* 公共数据仓库 */
  state: {
    cityName: '北京'
  },
  mutations: {
    changeCity (state, cityName) {
      state.cityName = cityName
    }
  }
})
