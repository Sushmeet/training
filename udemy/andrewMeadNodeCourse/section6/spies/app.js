const db = require("./db");

const handleSignup = (email, password) => {
  // check if email already exists
  console.log(email);
  db.saveUser({
    email,
    password
  });
};

module.exports = {
  handleSignup,
}