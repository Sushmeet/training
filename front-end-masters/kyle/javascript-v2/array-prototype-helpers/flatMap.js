const arr = [1,2,3];

const arr2 = arr.map((v) => {
    return [ v * 2, String(v * 2)]
});
// [ [ 2, '2' ], [ 4, '4' ], [ 6, '6' ] ]

const arr3 = arr2.flat()

console.log(arr3)
// [ 2, '2', 4, '4', 6, '6' ]



// Flat map
// will map the arr and flatten it at same time
// more efficient.
const arr4 = arr.flatMap(v => [ v * 2, String(v * 2)])

console.log(arr4)