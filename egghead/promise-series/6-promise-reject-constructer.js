// the promise constructer takes a single argument called the executor function.
// the exectuor function takes 2 params resolve and reject.
// typically we perform some async operation and then
// we either resolve or reject.

const promise2 = new Promise((resolve, reject) => {
  //...
  setTimeout(() => {
    reject(new Error("I kinda failed..."));
  }, 1000);
});

promise2
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.warn(err);
  });
