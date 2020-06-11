/*
When Js code runs, it

- Goes through the code line by line and runs/ `executes` each line 
know as the Thread of Exection

- saves data like strings and arrays so that we can use that 
data later in memory.

- we can even save code (functions)
*/

/*
functions
Code we save(define) functions can use (call/invoke/execute/run)
later with the functions name and () 


exection context
Created to run the code of a function has 2 parts 
- Thread of Exection 
- Memoty

*/

/* 
call stack 
- JS keeps track of what function is curretly running (where's the thread of execution)
- runs a function - add to call stack
- finish running the function JS removes it from call stack.
- whatever is top of the call stack
- that's the function we'r currently running.
*/


const num = 3;
function multipleBy2 (inputNumber) {
    const result = inputNumber * 2
    return result;
}

const output = multipleBy2(num);
const newOutput = multipleBy2(10)


