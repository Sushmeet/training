module.exports.add = (a,b) => a + b;

module.exports.square = (a) => a * a;

module.exports.asycnAdd = (a,b, callback) => {
    setTimeout(function() {
       callback(a + b);
    },1000);
};

module.exports.asyncMultiply = (a, b, callback) => {
    setTimeout(function() {
        callback(a * b);
    },1000)
}

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}