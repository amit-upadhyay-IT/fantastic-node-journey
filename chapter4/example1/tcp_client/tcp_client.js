// A TCP client
var net = require('net');

var socket = net.createConnection({port:4000, host:'192.168.0.1'});

socket.on('connect', function(){
    console.log('Connected to the server');
});

socket.end('Hello Server');

/*
 * We can now create a command line TCP chat server and client by using the //process.stdin (Readable Stream) and process.stdout(Writable)
 * */
