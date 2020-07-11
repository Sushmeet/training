const express = require('express')
const WebSocket = require('ws');


const app = express()
const PORT = 4000
const URL = 'localhost'

const server = app.listen(PORT, URL, () => {
    console.log(`Server is running on ${URL}:${PORT}`)
})

const wss = new WebSocket.Server({
    server,
    port: PORT
})

// websocket events
// connection 
// open
// close
// message

wss.on('connection', function connection(ws, request, client) {
    ws.on('message', function incoming(message) {
        console.log(`Server Received message ${message}`)
        ws.send(`damn good ${message}`)
    })

    ws.send('Connection with websocket successfull')
})


app.get('/home', (req, res) => {
    res.send({
        name: 'sushi home'
    })
})



