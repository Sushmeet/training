const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/TodoApp";

mongoose.Promise = global.Promise;
mongoose.connect(url);

const Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null,
  }
});

// const newTodo = new Todo ({
//     text: 'company',
//     completed: true,
// })

// newTodo.save().then((doc) => {
// console.log(doc);
// })

// const otherTodo = new Todo({
//   text: "this is another todo",
//   completed: true,
//   completedAt: 123
// });

const emptyTodo = new Todo({
    text: ' Edit this text '
});

emptyTodo.save((err, doc) => {
  if (err) {
    console.log(err);
  } else {
    console.log(doc);
  }
});
