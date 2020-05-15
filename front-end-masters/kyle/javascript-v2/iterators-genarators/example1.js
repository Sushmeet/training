// // what is an iterator.
// // Whenever u use a datasource if u would like to consume
// // the values in that datasource one at a time. then 
// // one way to consume it through an iterator.

// // Strings and arrays are both iterables. and you can use
// // an iterator over it. 

const str = 'Hello';
const world = ['W','O', 'R', 'L', 'D'];

const itr1 = str[Symbol.iterator]();
const itr2 = world[Symbol.iterator]();

console.log(itr1.next()); // { value: 'H', done: false }
console.log(itr1.next()); // { value: 'e', done: false }
console.log(itr1.next()); // { value: 'l', done: false }
console.log(itr1.next()); // { value: 'l', done: false }
console.log(itr1.next()); // { value: 'o', done: false }
console.log(itr1.next()); // { value: undefined, done: true }


