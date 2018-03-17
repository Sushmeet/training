const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");

const app = express();

app.use(bodyParser.json());

app.post("/Todos", (req, res) => {
  console.log('Request body', req.body);
  const todo = new Todo({ text: req.body.text });

  todo.save().then(
    doc => {
      res.status(200).send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/AllTodos",(req, res) => {
  // callback style
  // Todo.find((err, todos) => {
  //   if (err) return console.error(err);
  //   console.log('Get request', todos);
  //   res.status(200).send(todos);
  // })

  Todo.find().then((todos) => {
    res.status(200).send(todos);
  })
});

app.get("/", (req, res) => {
  res.send("hello09");
});

app.listen(4000, () => {
  console.log("server has started");
});
