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

// function getUsers takes in id. function returns a promise back to us.
const getUsers = id =>
  new Promise((resolve, reject) => {
    const user = users.find(tempuser => tempuser.id === id);

    if (user) {
      resolve(user);
    } else {
      reject(`No User was found by id ${id}`);
    }
  });

const getGrades = schoolId =>
  new Promise((resolve, reject) => {
    const grade = grades.filter(grade => grade.schoolId === schoolId);

    if (grade) {
      resolve(grade);
    } else {
      reject('no grade is found');
    }
  });

// using chaining and promises get status
const getStatus = (userId) => {
  // call getUser and get a user then call getGrade and get the grade of that user
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
};

// using async await and doing the same.
const asyncGetStatus = async (userId) => {
  const userValue = await getUsers(userId);
  const grades = await getGrades(userValue.schoolId);
  let average = 0;
  average = grades.map(grade => grade.grade).reduce((a, b) => a + b) / grades.length;
  // console.log(average);
  return `${userValue.name} has id ${userValue.id} and grade ${average}`;
};

getStatus(2)
  .then((status) => {
    console.log(status);
  })
  .catch((e) => {
    console.log(e);
  });

asyncGetStatus(2)
  .then((status) => {
    console.log(status);
  })
  .catch((e) => {
    console.log(e);
  });
