const fs = require("fs");
const util = require("util");

// promisifying fs.readfile function
const readFile = util.promisify(fs.readFile);

// wrap around a native promise this promisifying
// function readFile(filename, encoding) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, encoding, (err, data) => {
//       if (err) reject(err);
//       resolve(data);
//     });
//   });
// }

// original function
// fs.readFile(__filename, "utf8", (err, data) => {
//   if (err) console.log(err);
//   console.log("here is ", data);
// });

readFile('__filename', "utf8")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.warn(err);
  });
