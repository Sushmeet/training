/*
what if we could delay till the last moment
what code our function could run, this making 
our function super dynamic. this is what
higher order functions are. we can pass them
a function as a parameter.
*/


function hello(name, cb) {
    console.log(`I am ${name}`)
    cb();
}

function humanHello() {
    console.log('we have made contact with humans.')
}
// hello is a higher order function.
hello('sushi', humanHello)