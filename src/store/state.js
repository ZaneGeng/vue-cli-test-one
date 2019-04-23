let defaultCityName = '上海'
if (localStorage.cityName) {
  defaultCityName = localStorage.cityName
}

export default {
  cityName: defaultCityName
}
