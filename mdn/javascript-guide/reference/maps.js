/* Usually a javascript object is a map But it can only contain
strings or Symbols as keys

Map Benefits .
A map can contain strings, objects, functions as Keys.
A map also preserves the order of the keys when they are inserted.
Both objects and primitive values) may be used as either a key or a value.
*/

const map = new Map();

function sayHello() {
    console.log('hii');
    return 'hii';
}

// map.keyString = 'key string';
// map.object = {a: 1};
// map.funHello = sayHello;
// console.log(map.get('object'));
// const keyString = 'key string';
const object = {a: 1};
const funHello = sayHello;

map.set('keyString','this is a string value');
map.set({ john: 'value' }, {a: 1} );
map.set('func', sayHello)
console.log(map.get());


// const obj = {};
// obj.keyString = 'key string';
// obj.object = {a: 1};
// obj.funHello = sayHello;
// console.log('obj', obj);