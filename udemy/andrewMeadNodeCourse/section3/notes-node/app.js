console.log('starting app.js');
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
const notes = require("./notes");
const _ = require('lodash');

let user = os.userInfo();
// console.log(user); // user object if u want to see
/*
{ uid: 501,
  gid: 20,
  username: 'ssunger',
  homedir: '/Users/ssunger',
  shell: '/bin/bash' }
*/

// //append items to a file
// fs.appendFile("greetings.txt", ` Hello ${user.username}! and ${notes.age}`, err => {
//   if (err) throw err;
// });

// console.log(notes.addNote());

// console.log(notes.add(9, -2));



// use of lodash 

console.log(_.isString(true)); // output false
console.log(_.isString('sushi')); // output true