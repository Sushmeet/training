function resolveAfter(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`After ${ms} ms value is ${value}`);
        }, ms)
    })
}

const promise1 = resolveAfter(2000, 'A');
const promise2 = resolveAfter(5000, 'B');

Promise.all([promise1, promise2])
    .then(([result1, result2]) => {
        console.log(result1);
        console.log(result2);
    })

