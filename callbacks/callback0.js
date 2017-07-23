function john() {
    console.log('I am john');
};

function calljohn (callback) {
    callback();
};

calljohn(john);  // passing a higher order function for me. no big deal here.

