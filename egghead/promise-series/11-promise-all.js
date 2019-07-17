function resolveAfter(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`After ${ms} ms value is ${value}`);
        }, ms)
    })
}

const promise1 = resolveAfter(500, 'A');
const promise2 = resolveAfter(1000, 'B');

Promise.all([promise1, promise2])
    .then((values) => {
        console.log('1', values[0]);
    })

