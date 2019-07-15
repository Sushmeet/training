function resolveAfter(ms, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`After ${ms} ms value is ${value}`);
    }, ms);
  });
}

function timeout(ms, promise) {
    let timeoutId;
  const rejectedPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(()=> {
        reject(`u reached the timeout of ${ms}`)
      }, ms)
  });
  console.log('time--', timeoutId);
  return Promise.race([promise, rejectedPromise]).finally(() => clearTimeout(timeoutId));
}

const promise1 = resolveAfter(200, "A");

timeout(5000, promise1)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
