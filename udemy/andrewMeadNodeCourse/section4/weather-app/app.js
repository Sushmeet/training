const request = require("request");
const yargs = require("yargs");

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


const encodedurl = encodeURIComponent(argv.a);
const decodedurl = decodeURIComponent(encodedurl);

request.get(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${decodedurl}`,
    json: true
  },
  (error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    console.log(`Formatted address ${body.results[0].formatted_address}`);
    console.log(`Latitude ${body.results[0].geometry.location.lat}`);
    console.log(`Latitude ${body.results[0].geometry.location.lng}`);
  }
);
