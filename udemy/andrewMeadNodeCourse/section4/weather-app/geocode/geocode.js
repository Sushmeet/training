const request = require("request");

const geoCode = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);
  request.get(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    },
    (error, response, body) => {
      //console.log(JSON.stringify(body, undefined, 2));
      if (error) {
        console.log("Error connection to google servers", error.code);
      } else if (body.status === "ZERO_RESULTS") {
        callback(`no results found for ${address}`);
      } else if (body.status === "OVER_QUERY_LIMIT") {
        callback(body.error_message);
      } else if (body.status === "OK") {
        // console.log(`Formatted address ${body.results[0].formatted_address}`);
        // console.log(`Latitude ${body.results[0].geometry.location.lat}`);
        // console.log(`Latitude ${body.results[0].geometry.location.lng}`);
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
};

module.exports = {
  geoCode
};
