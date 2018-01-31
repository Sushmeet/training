const request = require("request");

request.get(
  {
    url:
      "https://maps.googleapis.com/maps/api/geocode/json?address=232%20bergevin%20montreal%20quebec",
    json: true
  },
  (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
  }
);