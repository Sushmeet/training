// This is our very own test library.
// it could be called as a module, but apparently
// most test libraries have them declared as globals, 
// since they would be required by alll files.


// Our own Custom Test Runner
async function test(title, callback) {
    try {
       await callback();
      console.log(`Sucess ${title}`);
    } catch (err) {
      console.error(`Fail ${err}`);
      console.error(err);
    }
  }
  
  function expect(actual) {
    return {
      toBe: expected => {
        if (actual !== expected) {
          throw new Error(`${actual} is not what we expected ${expected}`);
        } else {
          return console.log(`Actual value ${actual} == Expected ${expected}`);
        }
      }
    };
  }

global.expect = expect;
global.test = test;
