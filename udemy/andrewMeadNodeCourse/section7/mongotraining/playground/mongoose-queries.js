const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");

const id = "5a9e1acf665d0e482b4de917a";

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// }).catch((e) => {
//     console.warn(e);
// })

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("todo", todo);
// }).catch((e) => {
//     console.warn(e);
// })

Todo.findById(id).then(todo => {
    if(!todo) {
        return console.log('Id not found');
    }
  console.log('Todo by Id', todo);
}).catch((e) => {
    console.log(e.message);
})
