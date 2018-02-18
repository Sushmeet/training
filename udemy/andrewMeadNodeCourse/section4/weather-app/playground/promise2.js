const asyncAdd = (a, b) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    } else {
      reject(`${a} and ${b} are not both numbers. Try again `);
    }
  }, 1000);
});

asyncAdd(5, 7).then(res => {
  console.log('Result', res);
  return asyncAdd(res, 33)
}).then((res) => {
  console.log('Should be 45', res);
}).catch(err => {
  console.log(err);
})