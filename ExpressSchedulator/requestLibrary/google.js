var request = require('request');

request.get('http://www.google.com', function(error, response, body){
    if (!error && response.statusCode === 200) {
        console.log(body); // show the html for google home page
    }
    else {
        console.log('Something went wrong');
        console.log(error);
    }
})

