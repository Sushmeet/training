const app = require("express")();
const http = require("http");
const io = require('socket.io')

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

server.listen("2400", () => {
  console.log("another port listening");
});