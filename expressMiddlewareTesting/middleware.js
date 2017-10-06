const express = require("express");

// an instance of the express application
var app = express();

// application level middleware.  which can be accessed by app.use or app.get etc.
// loading a series of multiple middleware. middleware sub-stack
app.use("/hello",function(req, res, next) {
    console.log(req.originalUrl);
    next();
  },
  function(req, res, next) {
    console.log(req.method)
  }
);

app.get("/", (req, res, next) => {
  res.send("hi");
});

app.get("/hello", (req, res, next) => {
  res.send("hello");
});

app.listen(1234);
