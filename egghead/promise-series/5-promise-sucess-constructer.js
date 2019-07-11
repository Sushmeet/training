// the promise constructer takes a single argument called the executor function.
// the exectuor function takes 2 params resolve and reject.
// typically we perform some async operation and then
// we either resolve or reject.

const promise1 = new Promise((resolve, reject) => {
  //.... async operation
  setTimeout(() => {
    resolve("I am done. Sucess");
  }, 500);
});

promise1
  .then(res => {
    console.log('Promise Fulfilled', res);
  })
  .catch(err => {
    console.warn(err);
  });
