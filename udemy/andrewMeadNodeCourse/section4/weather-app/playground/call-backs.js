const getUser = (id, callback) => {
    const user = {
        id: id,
        name: 'denny',
    }

    setTimeout(() => {
        callback(user);
    },3000)
};


getUser(31, (user, jabba) => {
    // simulate a fetch from a database or api
    console.log(user, jabba);
});

// const car = (id, callback) => {
//     const camry = {
//         brandId: id,
//         brandName: 'toyota',
//     }

//     const honda = {
//         brand: 'honda',
//     }
//     callback(camry);
// }

// const print = (whatever, honda) => {
//     console.log(whatever, honda);
// }

// car(56, print) 


