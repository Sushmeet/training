const mongoose = require('mongoose');
const debug = require('debug');



mongoose
  .connect("mongodb://localhost:27017/myapp",{ useNewUrlParser:
  true })
  .then(() => console.log("Connected to mongo DB connection"))
  .catch((err) => console.error("cannot connect to database", err));


  // Create a schema. Think of it like in a database table. we create the schema of the table.
  