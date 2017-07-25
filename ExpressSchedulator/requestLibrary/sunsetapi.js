var request = require('request');

var sunsetWeatherApi = 'https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

request.get(sunsetWeatherApi, function(error, response, body) {
    if (error) {
        console.log('something happened');
        console.log(error);
    }
    else if(response.statusCode === 200) {
        jsonObject = JSON.parse(body);
        console.log('This is the body of response');
        console.log('The type of body is ' + typeof body);
        console.log(body);
        console.log('This is the json object');
        console.log('The type of body is ' + typeof jsonObject);
        console.log(jsonObject);
        console.log('The language is ' +jsonObject.query.lang);
        console.log('The sunset time is ' + jsonObject.query.results.channel.astronomy.sunset);
    }
});