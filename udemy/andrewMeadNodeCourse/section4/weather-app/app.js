const request = require("request");
const yargs = require("yargs");

const { geoCode } = require('./geocode/geocode');

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

geoCode(argv.a);