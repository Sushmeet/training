const { mongoose, closeConn } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");

const id = "5aadf8e6bb97ea638034cf29";

Todo.find({}).then(res => {
  console.log(res);
});

Todo.findOne().then(res => {
  console.log(res);
});

Todo.findById(id).then(res => {
  console.log(res);
  closeConn();
});
