/*
TypeError: sushi is not a function or its return value is not iterable

*/

function sushi () {
    return null
}


const [
    first,
    second,
    third = 6
] = sushi() || [];


console.log(first, second, third);