const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

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

app.ws('/echo', (ws, req) => {
    // console.log('req object----', req);
    // events being fired which the 
    // websocket object is listening for
    ws.on('message', (msg) => {
        ws.send(`Hello, you sent -> ${msg}`);
    })

    ws.on('close', (code, reason) => {
        console.log(code);
        console.log('--', reason);
        console.log('connection has closed...')
    })
})



//initialize the WebSocket server instance
// const wss = new WebSocket.Server({ server });

// wss.on('connection', (ws: WebSocket) => {

//     //connection is up, let's add a simple simple event
//     ws.on('message', (message: string) => {

//         //log the received message and send it back to the client
//         console.log('received: %s', message);
//         ws.send(`Hello, you sent -> ${message}`);
//     });

//     //send immediatly a feedback to the incoming connection    
//     ws.send('Hi there, I am a WebSocket server');
// });



const server = app.listen(PORT,URL, () => {
    console.log(`Server is running on http://${URL}:${PORT}`);
});



