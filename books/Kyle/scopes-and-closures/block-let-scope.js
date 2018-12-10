// a = 2;
// console.log('Good value for a ', a);
// var a // variable declaration get's compiled first so this code works.


// console.log('value for b', b); // will be undefined.
// var b = 2;


 function hello(x, y) {
    console.log(x, y);
    return x + y
 };

 let obj = {hello};

 console.log('initial obj', obj);
 obj.health = 9
 obj = hello(1,2);

 console.log('after obj', obj);
