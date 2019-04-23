export default {

  changeCity (state, cityName) {
    /* 为state仓库中的变量赋值 */
    state.cityName = cityName
    /* 数据存入localStorage */
    /* localStorage.setItem('cityName', cityName) */
    localStorage.cityName = cityName
  }

}
