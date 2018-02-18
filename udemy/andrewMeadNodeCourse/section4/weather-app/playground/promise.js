const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('jhsdfkljsdhfl');
    //    reject('hi sushi')
    }, 1000);
})


promise.then((res) => {
    console.log('Success', res);
}).catch((err) => {
    console.log(err);
})
