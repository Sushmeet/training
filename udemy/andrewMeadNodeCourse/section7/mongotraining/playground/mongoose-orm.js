const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/TodoApp";

mongoose.Promise = global.Promise;
mongoose.connect(url);

const Todo = mongoose.model("Todo", {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// const newTodo = new Todo ({
//     text: 'company',
//     completed: true,
// })

// newTodo.save().then((doc) => {
// console.log(doc);
// })

const otherTodo = new Todo({
  text: "this is another todo",
  completed: true,
  completedAt: 123
});

otherTodo.save((err, doc) => {
    console.log(doc);
})
