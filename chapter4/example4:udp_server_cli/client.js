var dgram = require('dgram');
var port = 1234;
var host = '127.0.0.1';
var client = dgram.createSocket('udp4');

// we need not listen to anything here as we are doing in case of server.js

var message = new Buffer('Hello World!');

// we directly talk to our server on the given host and port
client.send(message, 0, message.length, port, host, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + host + ':' + port);
    client.close();
});
