const express = require("express");
const bodyParser = require("body-parser");
const store = require("./store");

const app = express(); // creates an express app

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is up");
});

app.get("/createUser", (req, res) => {

});

app.post("/createUser", (req, res) => {
    store
      .createUser({
        name: req.body.name,
        email: req.body.email
      })
      .then(result => {
        res.send(result);
      });
  });


app.listen("8000", "localhost", () => {
  console.log("local server on port 8000");
});
