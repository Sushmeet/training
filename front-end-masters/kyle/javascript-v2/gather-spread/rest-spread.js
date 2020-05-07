let x = [1, 2, 5];
let y = [4, 5];
let z = [0, ...x, ...y, 6]



function foo(x,y, ...rest) {
    console.log('x---', x, 'y--', y)
    console.log(rest);
    return rest;
}


foo(...x, ...y);