// https://tr.javascript.info/microtask-queue
// https://medium.com/javascript-in-plain-english/6-interview-questions-that-combine-promise-and-settimeout-34c430fc297e


function printHello() {
    console.log('printHello on callback Queue');
}

setTimeout(printHello, 0);
let promise = Promise.resolve()
promise.then(() => {
    console.log('Promise resolved')
});
console.log('Simple Synchrnous line of Code')

// result 
// Simple Synchrnous line helloo  because it's a regular synchronous call
// value of Promise resolved  shows up second because .then passes through the microtask queue and runs right after all syncrhnous code
// printHello on callback Queue shows up last because it is on macrotask queue
