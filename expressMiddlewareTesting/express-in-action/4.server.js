/*
In node u have one function request handler
through which all the requests pass thru

Express gives you an array of middleware function.
where each function has a req, and a res object and a 
next params which is a function



*/

const path = require('path');
const logger = require('morgan');
const express = require('express');


const app = express();



// Logging middleware
app.use(logger('short'));

// 
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('server is running on port 3000');
})