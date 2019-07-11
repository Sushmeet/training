// The executor function is invoked right away or directly.
// It is not invoked asynchronously.

function sleep(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // throw new Error('dude ur in error mode'); if u throw an error from a promise its send to teh catch block and skips the resolve
            resolve(`Sucesss My timeout was ${timeout}.`)
        }, timeout);
    })
}

sleep(1000)
    .then((res) => {
        console.log('After 1 seconds')
    })
    .then(() => sleep(1000))
    .then(() => console.log('After 2 seconds'))
    .catch((err) => console.warn('rejected'));

console.log('Right Away Print');