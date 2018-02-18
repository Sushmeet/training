const axios = require('axios');
const { getWeather } = require('./weather');
 
const getGeoCodeFromAddress = (address) => {
    const encodedAddress = encodeURI(address);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

    let lat;
    let lng;

    axios.get(url)
    .then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error(`No results found for address ${address}`);
        }
         lat = response.data.results[0].geometry.location.lat;
         lng = response.data.results[0].geometry.location.lng;
        return getWeather(lat,lng);
    })
    .then((weatherResponse) => {
        console.log(`Your Address lat is ${lat} and the temperature is ${weatherResponse.temp}`)
    })
    .catch((error) => {
        if(error.code === 'ENOTFOUND') {
            console.log(`Unable to connect to the server ${error.errno}`);
        }
        else {
            console.log(error.message);
        }
    })
}

module.exports = {
    getGeoCodeFromAddress,
}