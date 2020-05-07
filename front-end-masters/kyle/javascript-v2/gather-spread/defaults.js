// lazy expressions

function bar() {
    console.log('!');
};

function zoo (x = bar()) {
    // console.log('hello')
}

// x is a lazy expression as in bar doesn't get called because it is not needed

// zoo(1); // bar is still not called
zoo(); // bar is still not called