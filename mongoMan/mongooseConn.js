const mongoose = require('mongoose');
mongoose
  .connect(
    "mongodb://localhost/myapp",
    { useNewUrlParser: true }
  )
  .then(res => console.log("Mongoose Connected"))
  .catch(err => console.error("Connection Failure"));