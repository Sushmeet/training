// core npm modules.
// fs file system we use the file append method.
// os we use the user info method.

// how we can use modules
// require is a function in node
// it will let us load modules which are 
// bundled with node
// http modules which let us make http requests.
// fs module which lets us access the file system
// require our very own files.

const fs = require("fs");
const os = require("os");

let user = os.userInfo();
console.log(user);

// append items to a file
fs.appendFile("greetings.txt", ` Hello ${user.username}!`, err => {
  if (err) throw err;
});
