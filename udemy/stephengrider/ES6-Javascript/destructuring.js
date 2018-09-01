// array destructuring

const points = [
    [4, 5],
    [10, 1],
    [0, 40],
];

const result = points.map(([x, y]) => {
   return {x, y} 
})

console.log(result);