// creating a TCP server

var net = require('net');

var server = net.createServer(function(socket) {
    // the socket has end method
    socket.end('Hello World');// Socket is a Duplex stream (those streams which are both readable and as well as writable)
});

server.listen(3000, function() {
    console.log("Server is listening on Port 3000");
});
