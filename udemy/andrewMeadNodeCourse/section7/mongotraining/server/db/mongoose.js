const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const database = 'TodoApp';
// const collection = 'todo';

console.log('mongoose')

const url = `mongodb://localhost:27017/${database}`;

mongoose.connect(url, (err) => {
   if (err) {
       console.log(err);
   }
   else {
       console.log('mongoose has started');
   }
});


module.exports = {
    mongoose,
}