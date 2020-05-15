const str = 'Hello';
const world = ['W','O', 'R', 'L', 'D'];


// arrays and strings are iterables and 
// hence we can use the for of loop on them 
// Objects though cannot use for of loop since they are not iterable.

for( value of str) {
    console.log(value); // access each element
}


for (value of world) {
    console.log(value); // access each element
}


