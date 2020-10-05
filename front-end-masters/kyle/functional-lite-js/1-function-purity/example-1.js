/*
What is a function. Is having a function keyword enough.
function vs procedures.
*/

// this is not a function. It is a procedure.
// why? because it does not have a return keyword.
function addNumbers(x = 0, y = 0, z = 0, w = 0) {
  console.log(`x: ${x} y: ${y} z: ${z} w: ${w}`);
  const result = x + y + z + w;
  console.log("Result---", result);
}

// This is still not a function because it 
// returna a procedure, so hence it get's polluted down the chain.
function extraNumbers(x = 10, ...args) {
  return addNumbers(x, 42, ...args);
}

extraNumbers(); // 52
extraNumbers(3, 8, 11); // 64
