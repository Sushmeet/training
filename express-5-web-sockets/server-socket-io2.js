const express = require('express')
const app = express()
// const http = require('http')

const PORT = 4000
const URL = 'localhost'
const server = app.listen(PORT, () => {
    console.log(`Server is running on ${URL}:${PORT}`)
})

const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log('Socket io Server is connected')
    // console.log(socket);
    // socket.on('disconnect', () => {
    //     console.log('Client is disconnected')
    // })
})

app.use(express.static('public'))

app.get('/hello', (req, res) => {
    res.send('hello')
})







// const app = require('express')();
// const server = require('http').createServer(app);
// const options = { /* ... */ };
// const io = require('socket.io')(server, options);

// io.on('connection', socket => { /* ... */ });

// server.listen(4000);