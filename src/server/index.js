const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3008", // Allow access from localhost:3008
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Middleware for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3008'); // Allow access from localhost:3008
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', function (data) {
    console.log('message: ' + data);
    io.emit('chat message', data);
  });
});

server.listen(4000, () => {
  console.log('listening on http://localhost:4000');
});