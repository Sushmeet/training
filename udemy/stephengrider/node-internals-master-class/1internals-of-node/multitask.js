const https = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

// control the num of threads for the libuv 
process.env.UV_THREADPOOL_SIZE = 1;

// https module reaches directly to the OS and doesnt use thread pool.
function doRequest(url) {
  https
    .request(url, res => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("http request", Date.now() - start);
      });
    })
    .on("error", err => console.log("err-", err))
    .end();
}

function dohash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      console.log('hash', Date.now() - start);
  });
}

doRequest("https://www.google.com/");

// fs module will use the threadPool
fs.readFile("./multitask.js", () => {
  console.log("Multitask Read file", Date.now() - start);
});

// crypto module will use threadpool
dohash();
dohash();
dohash();
dohash();



// Conclusions. Thread pooly by default has 4 threads