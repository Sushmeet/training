//callback 
/*
Is just a function being passed as an argument to another function
and then called within that function
*/


function hello() {
    console.log('hello world');
  }


const happy = (callback) => {
    callback();
  }
happy(hello)