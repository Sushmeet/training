// So in async code u have to deal with synchronocity.
const getUser = (id, cb) => {
    setTimeout(() => {
        console.log('Reading a user from a database');
        cb ({id: id, githubUsername: 'sushi'})
    }, 1000);
}


console.log('Before');
 getUser(1, (user) => {
    console.log(user);
});
console.log('user', user);
console.log('After');
