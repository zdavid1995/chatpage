var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});

io.on('connection', function (socket){
	socket.on('cm', function(msg){
		console.log(msg);
		io.emit('cm', msg);
	});
});

