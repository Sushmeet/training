

/*

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => {  });
server.listen(3000);
*/

const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = 4000

// middleware
// app.use((req, res, next) => {
//   console.log("Middleware Running");
//   next();
// });

// routes
// app.get("/home", (req, res) => {
//     // io.on('connection', (socket) => {
//     //     console.log('websocket conntection done')
//     //     socket.on('message', message => console.log(`Balle  ${message}`));
//     // })
//   res.status(200).json({
//     name: "sushi",
//     id: 792
//   });
// });

io.on('connection', (socket) => {
    console.log('websocket conntection done ')
    socket.on('message', message => console.log(`Balle  ${message}`));
})

io.on('disconnect', () => {
    console.log('websocket disconnected')
})

 server.listen(PORT, () => {
  console.log(`express server has started on localhost:${PORT}`);
});



// const app = require('express')();
// const server = require('http').createServer(app);
// const options = { /* ... */ };
// const io = require('socket.io')(server, options);

// io.on('connection', socket => { /* ... */ });

// server.listen(3000);