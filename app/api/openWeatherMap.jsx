/*
* This file encapsulates the API call functionality.

* // api.openweathermap.org
* API Key: 574a290a2655cf76368cb40531154c53
* Salt Lake City, UT: id=5780993
* http://api.openweathermap.org/data/2.5/weather?id=5780993&APPID=574a290a2655cf76368cb40531154c53&units=imperial
* target data:
*  main.temp
*  wind.speed
* */

var axios = require('axios'); /* used for doing promises (an ES6 feature) */

// use uppercase and underscores for const
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=574a290a2655cf76368cb40531154c53&units=imperial';

// id=5780993
// http://api.openweathermap.org/data/2.5/weather?id=5780993&APPID=574a290a2655cf76368cb40531154c53&units=imperial

module.exports = {
  getTemp: function (location) {
    
    // encode special characters
    var encodedLocation = encodeURIComponent(location);
    
    // template strings ES6
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
    // using axios for Promises
    return axios.get(requestUrl).then(function(res) { /* chained promise :) because we're calling openWeatherMap function to get here*/
      //debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp; // returns temperature from JSON data
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}