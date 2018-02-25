const db = require("./db");

const handleSignup = (email, password) => {
  // check if email already exists
  db.saveUser({
    email,
    password
  });
};

module.exports = {
  handleSignup,
}