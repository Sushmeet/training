// So in async code u have to deal with synchronocity.
const getUser = (id) => {
    setTimeout(() => {
        console.log('Reading a user from a database');
        return {id: id, githubUsername: 'sushi'}
    }, 1000);
}


console.log('Before');
const user = getUser(1);
console.log('user', user);
console.log('After');

/* OutPut
Before
user undefined
After
Reading a user from a database

We get back an undefined because the call to getUser is aynchronous.So how do we handle
this problem. Three Ways
Callback
Promises
Async Await
*/