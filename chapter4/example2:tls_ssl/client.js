var tls = require('tls'),
    fs = require('fs');

var options = {
    key: fs.readFileSync('./certificates/ryans-key.pem'),
    cert: fs.readFileSync('./certificates/ryans-cert.pem'),

    // this is necessary only if the server uses the self-signed certificate
    ca: [fs.readFileSync('./certificates/ryans-cert.pem')]
};

var conn = tls.connect(1234, options, function() {

    // here the point is when we are trying to make a communication from client to server then the certificate should match
    if (conn.authorized)
    {
        console.log('Connection authorized by a Certificate Authority.');
    }
    else
    {
        console.log('Connection not authorized: '+conn.authorizationError);
    }
    console.log('Connection created');
});

conn.on('data', function (data) {
    console.log(data.toString());
    conn.end();
});
