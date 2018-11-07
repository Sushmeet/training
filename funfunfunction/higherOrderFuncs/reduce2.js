// example for fun fun func reduce advanced
// didnt really get it to work.
const fs = require("fs");

const file = fs
    .readFileSync("data.txt", "utf8")
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        console.log('bobo', line[0]);
        // customers[line[0]] = [];
        // return customers;
    }, {})

console.log(file);
