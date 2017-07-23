// Complete the mult function to get the desired outputs, without changing the logged lines at the bottom...
// Do not modifify the args list of mult...
// currying functions . 
function mult(x) {
    // ...
    return function(y) {
        return x * y ;
    }
}


console.log(
    mult(3)(7),   // should output 21

    mult(5)(4)    // should output 20
) 