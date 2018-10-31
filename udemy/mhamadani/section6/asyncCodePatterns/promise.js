const p = new Promise((resolve, reject) => {
    resolve('hello'); // resolve is a function.
    // reject(new Error('error bhaiyaa'))
});

p.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})