const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Aync operation 1...')
        resolve({id: 1});
        // reject(new Error('because something failed.'))
    },2000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Aync operation 2...')
        resolve(2);
    },2000)
});

// in this implelentation both the promises are kicked of at the same time
// even though we have one thread.
// but in usual promise style u would wait for one promise to finish.
// promise all contains an array of promises.
Promise.all([p1, p2])
    .then(res => console.log(res))
    .catch(res => console.log(res));