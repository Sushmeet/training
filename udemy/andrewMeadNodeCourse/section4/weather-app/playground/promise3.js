const request = require('request');

const geocodeAddress = (address) => new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);
    const opts = {
        url: `https://mapsgoogleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }
    request.get(opts, (error, response, body) => {
        //console.log(JSON.stringify(body, undefined, 2));
        if (error) {
            reject(`Error connection to google servers ${error.code}`);
        } else if (body.status === "ZERO_RESULTS") {
            reject(`no results found for ${address}`);
        } else if (body.status === "OVER_QUERY_LIMIT") {
            reject(body.error_message);
        } else if (body.status === "OK") {
            // console.log(`Formatted address ${body.results[0].formatted_address}`);
            // console.log(`Latitude ${body.results[0].geometry.location.lat}`);
            // console.log(`Latitude ${body.results[0].geometry.location.lng}`);
            resolve({address: body.results[0].formatted_address, latitude: body.results[0].geometry.location.lat, longitude: body.results[0].geometry.location.lng});
        }
    });
});

geocodeAddress('00023')
.then((addresse) => {
    console.log(addresse);
}).catch((err) => {
    console.log(err);
});