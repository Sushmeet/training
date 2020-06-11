const arr = [1, 2, 3, 4, 5]

function copyArrayAndMultiplyBy2(arr) {
    const output = []

    arr.forEach(element => {
        output.push(element * 2)
    });
return output;
}


const result = copyArrayAndMultiplyBy2(arr);
console.log('copyArrayAndMultiplyBy2', result)


// ______________________________________________________________

// now solve the same thing using a higher order function.
function multiplyBy2(element) {
    return element * 2
}

function copyArray(arr, instructions) {
    const output = []

    arr.forEach(element => {
        output.push(instructions(element))
    });
return output;
}

const result2 = copyArray(arr, multiplyBy2)
console.log('result2---', result2)