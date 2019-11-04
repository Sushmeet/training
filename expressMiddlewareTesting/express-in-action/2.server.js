const express = require("express");
const http = require("http");
const logger = require("morgan");
const path = require("path");

const app = express();
const publicPath = path.resolve(__dirname, 'public');
const viewsPath = path.resolve(__dirname, 'views');

app.set('views', viewsPath);
app.set('view engine', 'ejs');

function requestHandler(req, res) {
  if (req.url === "/home") {
    res.end("home page");
  } else if (req.url === "/about") {
    res.end("about");
  } else {
    res.end("go away");
  }
}

function authentication(req, res, next) {
  const minute = new Date().getMinutes();

  if (minute % 2 === 0) {
    console.log("authentication successful");
    next();
  } else {
    res.statusCode = 403;
    res.end("Not Authorized");
  }
}

// const arrayOfMiddleware = [
//     urlLogging,
//     requestHandler,
// ]

app.use(logger("short"));
app.use(authentication);
app.use(express.static(publicPath));
app.get('/user/:userId', (req, res, err) => {
    const userId = req.params.userId;
    res.status(200).end(`UserID is ${userId}`);
})

app.get('/ejs', (req, res) => {
    res.render('index', {
        message: 'good morning',
        name: 'sushi',
    })
})

app.use(requestHandler);

http.createServer(app).listen(3000, "localhost", () => {
  console.log("server is running on port 3000");
});
