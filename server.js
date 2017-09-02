var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var port = process.env.PORT||5000;

server.listen(port,function (err,data) {
    console.log('Server is running on the port 5000');
});

app.get('/',function (req,res) {
    res.sendFile(__dirname + '/public/index.html');
});

//connect the socket
io.on('connect',function (socket) {
    console.log('Connect with socket');

    //send message
    socket.on('send_message',function (data) {
        io.emit('new_message',{msg:data});
    })
});




