'use strict';


function destroyer(arr) {
    // Remove all the values
   // console.log(arguments[1]);
  var temparr =  Array.from(arguments).slice(1);


    return arr.filter(function(value, index) {
         return  !temparr.includes(value);
    });
  }
  
 var value =  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

 console.log(value);
  