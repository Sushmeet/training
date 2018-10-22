let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('balooni');
  }, 1000)

});

promise
  .then(() => {
    console.log("first then statement");
  })
  .then(() => {
    console.log("2nd then statement");
  })
  .catch(() => {
    console.log('Uh OHHHHHHH ');
  });
