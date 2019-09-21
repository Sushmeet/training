const withCount = (fn) => {
    let count = 0;
    return (...args) => {
        console.log(`Call count: ${++count}`);
      return fn(...args)
    }
}


const add = (x, y) => {
    return x + y;
}



const countedAdd = withCount(add);

console.log(countedAdd(1,2));
console.log(countedAdd(3,4))
;console.log(countedAdd(5,6));