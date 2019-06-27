const [a, b, , , c] = [1, 2, 3, 4, 5, 6, 7];
console.log(a,b,c);

let x = 8;
let y = 9;

[x, y] = [y, x];

console.log(x,y);
let x = 8, y = 6;

(() => {
  [x, y] = [y, x];  
})()

console.log(x, y);
