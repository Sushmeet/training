'use strict';
require('es6-promise');

// setTimeout(() => {
//     console.log('TIMED OUT!');
// }, 300);

// a promise accepts a call back function called executor.
// the signature of the function takes a resolve and a reject.
// inside the executor either resolve or reject is called to

var p = new Promise(function(resolve, reject) {
    error = new Error();
    error.message = 'REJECTED!';
    setTimeout(function() {
        reject(error.message);
    }, 300)
});

function onReject () {
    p.then(function() {
    }).catch(function(error) {
    console.log(error);

    });
}

onReject();