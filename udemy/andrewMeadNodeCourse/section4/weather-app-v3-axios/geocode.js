const axios = require("axios");
const { getWeather } = require("./weather");

const getGeoCodeFromAddress = address => {
  const encodedAddress = encodeURI(address);
  const apiKey = "AIzaSyBzcDp9DSnZq9K6bthWnEgrcyNbE_p1dLQ";
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

  let lat;
  let lng;
  let formattedAddress;

  axios
    .get(url)
    .then(response => {
      if (response.data.status === "ZERO_RESULTS") {
        throw new Error(`No results found for address ${address}`);
      }
      lat = response.data.results[0].geometry.location.lat;
      lng = response.data.results[0].geometry.location.lng;
      formattedAddress = response.data.results[0].formatted_address;
      return getWeather(lat, lng);
    })
    .then(weatherResponse => {
      console.log(
        `Your Address is ${formattedAddress}.The temperature is ${
          weatherResponse.temp
        } and feels like ${weatherResponse.appTemp}`
      );
    })
    .catch(error => {
      if (error.code === "ENOTFOUND") {
        console.log(`Unable to connect to the server ${error.errno}`);
      } else {
        console.log(error.message);
      }
    });
};

module.exports = {
  getGeoCodeFromAddress
};
