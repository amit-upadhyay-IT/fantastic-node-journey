// socket server

var net = require('net');

var host = '127.0.0.1',
    port = 1234;

var server = net.createServer(function(socket) {
    // as soon as the server is created we are going to wait till some client connects to our server

    console.log('Client connected: '+ socket.remoteAddress + ':' + socket.remotePort);

    socket.on('data', function(data) {
        console.log('Data Received from : ' + socket.remoteAddress + ':' + data);
        socket.write('Data Received :' + data);// whatever data I get, I am writing it back to the socket which will then be sent to client.
    });

    socket.on('close', function(data) {
        console.log('Connection closed');
    });
})
server.listen(port, host);// since this line executes synchronously we can clearly assume that if this fails then below console.log() is not going to print out or another way to handle the same thing is using the server.on('connection', cb) event

console.log('Server listening on ' + host + ':' + port);


/*
// this gets executed after the server has been started
server.on('connection', function(socket) {
    console.log('Connected: ', socket.remoteAddress+':' + socket.remotePort);
});
*/
