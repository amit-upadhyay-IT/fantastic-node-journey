var dgram = require('dgram');
var port = 1234;
var host = '127.0.0.1';

var server = dgram.createSocket('udp4');

server.on('listening', function() {
    var address = server.address();
    console.log('UDP Server listening on '+address.address+':'+address.port);
});

server.on('message', function(message, remote) {
    console.log(remote.address + ':' + remote.port + ' - ' + message);
});

server.bind(port, host);
