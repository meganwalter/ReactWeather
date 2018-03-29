const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0b7c01133d79332d37492f4314c05aaf&units=imperial';

//0b7c01133d79332d37492f4314c05aaf

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
        return res.data.main.temp;
      }).catch(function (error) {
        throw new Error('Unable to fetch weather.');
      })
  }
}
