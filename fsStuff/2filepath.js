/*

*/
const fs = require('fs');

// relative path specified "file.txt"
fs.open('file.txt', 'r', (err, fd) => {
    if (err) throw err;
    fs.close(fd, (err) => {
        console.log(typeof fd);
      if (err) throw err;
    });
  });


  fs.open(Buffer.from('file.txt'), 'r', (err, fd) => {
    if (err) throw err;
    fs.close(fd, (err) => {
        console.log(fd);
      if (err) throw err;
    });
  });