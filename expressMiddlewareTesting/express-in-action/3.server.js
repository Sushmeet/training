const express = require('express');
const http = require('http');
const logger = require("morgan");
const path = require("path");


const app = express();
const publicPath = path.resolve(__dirname, "public");


app.use(logger('short'));
app.use(express.static(publicPath));

app.get('/home', (req, res, err) => {
    res.end('hello');
})

http.createServer(app).listen(3000)
