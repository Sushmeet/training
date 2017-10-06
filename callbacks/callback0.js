module.exports = {
    john: function() {
        return 'john';
    },
    calljohn: function (callback) {
       return callback();
    }
}




//calljohn(john);  // passing a higher order function for me. no big deal here.

