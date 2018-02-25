const express = require("express");

const app = express();

app.get("/", (req, res) => {
  //res.status(200).send('help');
  res.send("help");
});

app.get("/noFound", (req, res) => {
  res.status(404).send("Page not found");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "tom",
      age: 10
    },
    {
      name: "john",
      age: 4
    },
    {
      name: "bob",
      age: 7
    }
  ];
  res.send(users);
});

app.listen(3500, () => {
    console.log('App has started on 3500');
})

module.exports = {
  app
};
