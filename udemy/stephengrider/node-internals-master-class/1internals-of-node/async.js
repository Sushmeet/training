const https = require("https");

const url = "https://www.google.com/";

function doRequest() {
  const start = Date.now();
  https
    .request(url, res => {
      res.on("data", buffer => {});
      res.on("end", () => {
        const time = Date.now() - start;
        console.log(time);
      });
    })
    .on("error", err => console.log(err))
    .end();
}


doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()

//Conclusion all the events finish at the same time.
// libuv delegates the http request to the underlying OS system
// So because the OS is making the request and there is no blocking 
// and we are not touching the thread pool at all of the libuv which we used pbkdf2 in the crypto 
// module.
