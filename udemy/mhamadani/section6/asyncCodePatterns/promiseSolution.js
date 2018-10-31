// So in async code u have to deal with synchronocity.
// const getUser = (id, cb) => {
//     setTimeout(() => {
//       console.log("Reading a user from a database");
//       cb({ id: id, githubUsername: "sushi" });
//     }, 1000);
//   };

// promise version.
const getUser = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database");
      resolve({ id: id, githubUsername: "sushi" });
    }, 1000);
  });
};

const getRepositories = username => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`calling ${username} github API`);
      resolve(["repo1", "repo2", "repo3"]);
    }, 1000);
  });
};

const getCommits = repo => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Print out all commits");
      resolve("commits");
    }, 1000);
  });
};

// ---- ALL functions Declared Above.

console.log("Before");
// getUser(1, displayUser);
// console.log('user', user);

getUser(1)
.then(user => {
  console.log(user);
  return getRepositories(user.githubUsername)
})
.then(reponames => {
  console.log(reponames);
  return getCommits(reponames);
})
.then(value => {
    console.log(value);
})

console.log("After");
