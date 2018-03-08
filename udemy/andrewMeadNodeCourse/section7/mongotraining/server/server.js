const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");

const app = express();

app.use(bodyParser.json());

app.post("/Todos", (req, res) => {
  console.log(req.body);
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.status(200).send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/", (req, res) => {
  res.send("hello09");
});

app.listen(4000, () => {
  console.log("server has started");
});
