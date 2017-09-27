var tls = require('tls'),
    fs = require('fs');

var options = {
    key: fs.readFileSync(__dirname + './certificates/amit-key.pem'),
    cert: fs.readFileSync(__dirname + './certificates/amit-cert.pem'),

    // this is necessary only if the server uses the self-signed certificate
    ca: [fs.readFileSync(__dirname + './certificates/amit-cert.pem')]
};

tls.createServer(options, function(socket) {

    console.log('connected : ', socket);
    socket.write('Hello World !\n');
    socket.pipe(socket);// since socket both readable and writable so we gonna pipe one content to other

}).listen(1234);
