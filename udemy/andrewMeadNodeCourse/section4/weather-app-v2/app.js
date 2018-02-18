const request = require("request");
const yargs = require("yargs");
const { geoCode } = require("../weather-app/geocode/geocode");
const { getWeather } = require("./weather");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      String: true
    }
  })
  .help()
  .alias("help", "-h").argv;


geoCode(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log("Error occured", errorMessage);
        } else {
          console.log(`Your Address is ${results.address} and the temperature is ${weatherResults.temp}`)
        }
      }
    );
  }
});
