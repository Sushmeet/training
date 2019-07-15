function resolveAfter(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`After ${ms} ms value is ${value}`);
        }, ms)
    })
}

const promise1 = resolveAfter(1000, 'A');
const promise2 = resolveAfter(500, 'B');


Promise.race([promise1, promise2])
    .then((res) => {
        console.log(res);
    })

