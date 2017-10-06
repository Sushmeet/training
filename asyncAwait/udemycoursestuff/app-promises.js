'use strict';
const users = [
  {
    id: 1,
    name: "Andrew",
    schoolId: 101
  },
  {
    id: 2,
    name: "sushi",
    schoolId: 202
  }
];
const grades = [];

// function getUsers takes in id.
//function returns a promise back to us.
const getUsers = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) =>  user.id === id);
    if (user) {
        resolve(user);
    }
    else {
        reject('error has occured');
    }
  });
};
getUsers(3)
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    console.log(err);
  });
