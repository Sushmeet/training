const yargs = require('yargs');
const axios = require('axios');
const { getGeoCodeFromAddress } = require('./geocode')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true,
        },
    })
    .help()
    .alias('help' , 'h')
    .argv;

// geo code one first

// call geo code url with address
// get lat and long
// then call get temp url with lat and long
// get temp for day.

getGeoCodeFromAddress(argv.address);