console.log(this === module.exports);


function hello1 () {
    console.log(this === global);
}

function hello () {
     "use strict";
    console.log(this === undefined);
}

hello1();
hello();
