const express = require('express');
const app = express();
const WebSocket = require('ws');

// const expressWs = require('express-ws')(app);

const PORT = 4000
const URL = 'localhost'

// make believe middleware...
app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    return next();
  });



app.get('/home', (req, res) => {
    res.json({
        name: 'sushi'
    })
});

app.get('/echo', (req, res) => {
    // console.log('helllo');
    // console.log('req object----', req);
    // events being fired which the 
    // websocket object is listening for
    wss.on('message', (msg) => {
        console.log('bhaiya msg')
        ws.send(`Hello, you sent -> ${msg}`);
    })

    wss.on('close', (code, reason) => {
        console.log(code);
        console.log('--', reason);
        console.log('connection has closed...')
    })
})

const server = app.listen(PORT,URL, () => {
    console.log(`ws- Server is running on http://${URL}:${PORT}`);
});

const path = '/echo'


const wss = new WebSocket.Server({ server, path });






