

const users = [
  {
    id: 1,
    name: 'Andrew',
    schoolId: 101,
  },
  {
    id: 2,
    name: 'sushi',
    schoolId: 202,
  },
];
const grades = [
  {
    id: 1,
    schoolId: 101,
    grade: 86,
  },
  {
    id: 2,
    schoolId: 202,
    grade: 100,
  },
  {
    id: 3,
    schoolId: 101,
    grade: 80,
  },
];

// function getUsers takes in id.
// function returns a promise back to us.
const getUsers = id => new Promise((resolve, reject) => {
  const user = users.find(tempuser => tempuser.id === id);

  if (user) {
    resolve(user);
  } else {
    reject(`No User was found by id ${id}`);
  }
});

const getGrades = schoolId => new Promise((resolve, reject) => {
  const grade = grades.filter(grade => grade.schoolId === schoolId);

  if (grade) {
    resolve(grade);
  } else {
    reject('no grade is found');
  }
});

const getStatus = (userId) => {
  // call getUser and get a user
  // then call getGrade and get the grade of that user
  let user;
  return getUsers(userId)
    .then((tempUser) => {
      user = tempUser;
      return getGrades(user.schoolId);
    })
    .then((grades) => {
      let average = 0;
      average = grades.map(grade => grade.grade).reduce((a, b) => a + b) / grades.length;
      // console.log(average);
      return `${user.name} has id ${user.id} and grade ${average}`;
    });

  // 	return getUsers(userId)
  // 		.then(user => {
  // 			return getGrades(user.schoolId).then(grades => {
  //         console.log(user);
  //       });
  // 		})
  // 		.catch(e => {
  // 			console.log(e);
  // 		});
};

// getUsers(1)
//   .then(user => {
//     console.log(user);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// getGrades(101)
//   .then(grade => {
//     console.log(grade);
//   })
//   .catch(e => {
//     console.log(e);
//   });

getStatus(3)
  .then((status) => {
    console.log(status);
  })
  .catch((e) => {
    console.log(e);
  });
