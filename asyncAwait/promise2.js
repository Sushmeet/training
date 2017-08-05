var request = require('request');
let url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

function johnny() {
   return  new Promise(function (resolve, reject) {
        let value = {};
        let jsonobj = '';
        request.get(url, function (err, res, body) {
            if (!err && res.statusCode == 200) {
                jsonobj = JSON.parse(body);
                value = jsonobj.query.results.channel.units.temperature
                resolve(value);
            } else {
                reject(err);
            }
        });
    });
}


// This is the promise code.

// johnny().then(function (value) {
//     console.log(value);
// }).catch(function (err) {
//     console.log(err);
// })


// This is the async code

async function yabba() {
    var obj = johnny();
    console.log(await obj);
}

yabba();