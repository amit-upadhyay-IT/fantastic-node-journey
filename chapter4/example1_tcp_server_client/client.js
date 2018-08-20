// a socket client

var net = require('net');

var host = '127.0.0.1', port = 1234;

var client = new net.Socket();

client.connect(port, host, function() {
    console.log('Connected to: '+host+':'+port);
    client.write('Hello From the client!');// this message is written to our server which is 127.0.0.1:1234
});

// when client gets some data(i.e. when server responds back with some data) then we print it using the 'data' event on client
client.on('data', function(data) {
    console.log('data: '+data);
    client.destroy();// we destroy the client because once the message is received we don't want any further communication.
});

// once we destroy client, the 'close' event is emitted because the connection gets closed
client.on('close', function() {
    console.log('Connection closed');
});
