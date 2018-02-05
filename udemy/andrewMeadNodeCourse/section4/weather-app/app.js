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
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedurl}`,
    json: true
  },
  (error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    if (error) {
      console.log("Error connection to google servers", error.code);
    } else if (body.status === "ZERO_RESULTS") {
      console.log(`no results found for ${argv.a}`);
    } else if (body.status === "OVER_QUERY_LIMIT") {
      console.log(body.error_message);
    } else if (body.status === "OK") {
      console.log(`Formatted address ${body.results[0].formatted_address}`);
      console.log(`Latitude ${body.results[0].geometry.location.lat}`);
      console.log(`Latitude ${body.results[0].geometry.location.lng}`);
    }
  }
);
