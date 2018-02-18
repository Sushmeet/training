const asyncAdd = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject(`${a} and ${b} are not both numbers. Try again `);
      }
    }, 1000);
  });

asyncAdd(2, 3)
  .then(res => {
    console.log(res);
    return asyncAdd(res, 33)
  })
  .then((res) => {
      console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
  .catch((err) => {
    console.log(err);
  })
