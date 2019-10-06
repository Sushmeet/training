// functions as first class citizens
/*
First-class citizenship, within the world of programming, means
that a given entity (such as a function) supports all the operational 
properties inherent to other entities; properties such as being able 
to be assigned to a variable, passed around as a function argument, 
returned from a function, etc.

-- properties such as being able to be assigned to a variable
-- passed around as a function argument
-- returned from a function
*/

function hello() {
    console.log('hello world');
  }
  const some = hello(); // Passing a function as a variable
  some
