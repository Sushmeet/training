// calling a function in the same function call
// as it was defined.

function outer () {
    let counter = 0;
    function incrementCounter () {
        counter++;
        return counter
    }
    return incrementCounter()
}

const firstFunction = outer();
const secondFunction = outer()


console.log('1---', firstFunction) // 1
console.log('2---', firstFunction) // 1


console.log('3---', secondFunction) // 1
console.log('4---', secondFunction) // 1



