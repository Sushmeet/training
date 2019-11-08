const express = require("express");
const http = require("http");
const logger = require("morgan");
const path = require("path");

const app = express();
const guestBook = ["John Barrot", "Gordon Ramsey"];
const viewsPath = path.resolve(__dirname, "views");

app.set("views", viewsPath);
app.set("view engine", "ejs");

app.use(logger("short"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/guest", (req, res, err) => {
  console.log('req', req.body)
  console.log('req.params', req.params);
  console.log('req.query get', req.query);

  res.render("guestBook", {
    guestBook
  });
});

app.post("/guest", (req, res, err) => {
  console.log('req.query post--', req.query);
  const firstName = req.query.firstName || 'sushi';
  const lastName = req.query.lastName || 'Mushii';

  guestBook.push(`${firstName} ${lastName}`);
  res.render("newEntry", {
    guestBook
  });

});

http.createServer(app).listen(3000, () => {
  console.log(`Server started on port 3000`)
});
