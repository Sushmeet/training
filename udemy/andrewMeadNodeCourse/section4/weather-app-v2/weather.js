// use request library to make http calls
// supports https and supports redirects by default.
const request = require("request");

const getWeather = (lat, long, callback) => {
    const apiKey = "5758563b4f9eb5fe93beb8d5ac6675cf";
    const url = `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`;
    
    const opts = {
        url: url,
        json: true
    };

    request.get(opts, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
            temp: body.currently.temperature,
            appTemp: body.currently.apparentTemperature,
        });
      } else {
        callback(error);
      }
    });
}

module.exports = {
    getWeather,
}

