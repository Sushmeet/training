const arr = [1,2,3,4,5]

for (const item of arr) {
  // console.log(item)
}


const str = "Hello World";

for(const char of str) {
  // console.log(char)
}

const fruits = ["apple", "banana", "cherry"];

for(const [index, fruit] of fruits.entries()) {
  // console.log(index, fruit)
}

const map = new Map([['a', 1], ['b', 2], ['c', 3]])

for(const [key, value] of map) {
  // console.log(key, value)
}


