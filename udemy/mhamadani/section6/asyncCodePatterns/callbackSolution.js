// So in async code u have to deal with synchronocity.
const getUser = (id, cb) => {
  setTimeout(() => {
    console.log("Reading a user from a database");
    cb({ id: id, githubUsername: "sushi" });
  }, 1000);
};

const getRepositories = (username, cb) => {
  setTimeout(() => {
    console.log(`calling ${username} github API`);
    cb(["repo1", "repo2", "repo3"]);
  }, 1000);
};

const getCommits = (repo, cb) => {
  setTimeout(() => {
    console.log("Print out all commits");
    cb("commits");
  });
};

const displayCommits = (value) => {
    console.log(value);
}

const displayRepoNames = (reponames) => {
    console.log(reponames);
    getCommits(reponames, displayCommits); // here passing the function reference.
}

const displayUser = (user) => {
    console.log(user);
    getRepositories(user.githubUsername,  displayRepoNames);
}

// ---- ALL functions Declared Above.

console.log("Before");
getUser(1, displayUser);
// console.log('user', user);
console.log("After");
