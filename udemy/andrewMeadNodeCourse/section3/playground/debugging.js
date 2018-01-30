
// node inspect debugging.js ( to run it)
// c
// add debugger in ur code.
// repl
// type person and see what it looks like

// to debug on chrome 
// node --inspect-brk debugging.js

let person = {
    name: 'john',
}

person.age = 29;
debugger; // allows u to debug applications
person.name = "cassandra";

person.name = 'john';
person.age = 54;

console.log(person);