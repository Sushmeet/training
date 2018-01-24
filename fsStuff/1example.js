const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '/tmp/hello')
const newFilePath = path.join(__dirname, '/tmp/john')


// // rename a file path.
// fs.rename(filePath, newFilePath, (err) => {
//     if (err) throw err;
//     console.log('successful rename');
//     fs.stat(newFilePath, (err, stats) => {
//         if (err) throw err;
//         console.log(`stats: ${JSON.stringify(stats)}`);
//     });
// });

// delete a filepath.
// fs.unlink(newFilePath, (err) => {
//     if (err) throw err;
//     console.log('err', err);
//     console.log('sucessfully deleted /tmp/hello');
// });