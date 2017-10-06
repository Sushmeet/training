"use strict";

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
const grades = [
  {
    id: 1,
    schoolId: 101,
    grade: 86
  },
  {
    id: 2,
    schoolId: 202,
    grade: 100
  },
  {
    id: 3,
    schoolId: 101,
    grade: 80
  }
];

// function getUsers takes in id.
// function returns a promise back to us.
const getUsers = id => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.id === id);
    
    if (user) {
      resolve(user);
    } else {
      reject("error has occured");
    }
  });
};

const getGrades = schoolId => {
  return new Promise((resolve, reject) => {
    const grade = grades.filter(grade => grade.schoolId === schoolId);

    if (grade) {
      resolve(grade);
    } else {
      reject("no grade is found");
    }
  });
};

// getUsers(1)
//   .then(user => {
//     console.log(user);
//   })
//   .catch(err => {
//     console.log(err);
//   });

getGrades(101)
  .then(grade => {
    console.log(grade);
  })
  .catch(e => {
    console.log(e);
  });
