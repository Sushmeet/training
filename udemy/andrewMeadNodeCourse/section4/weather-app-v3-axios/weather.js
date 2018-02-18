const axios = require('axios');

const getWeather = (lat, long) => {
    const apiKey = "5758563b4f9eb5fe93beb8d5ac6675cf";
    const url = `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`;

   return axios.get(url).then((response) => {
            return {
                 temp: response.data.currently.temperature,
                 appTemp: response.data.currently.apparentTemperature
                }
        }).catch ((err) => {
            return err;
        })
}

module.exports = {
    getWeather,
}