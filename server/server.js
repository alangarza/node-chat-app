const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

app.get('/',(req, res) => {
    res.sendFile(publicPath + '/index.html')
})

io.on('connection', (socket) => {
    console.log('New user connected')


    socket.emit('newMessage', {
        from: 'alan@jon.com',
        text: 'See you then',
        createdAt: 123
    })

   socket.on('createMessage', (message) => {
    console.log('createMessage', message);
   });

    socket.on('disconnect', () => {

    }); 
});

    

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
  
