var http = require ('http');
var util = require ('util');

var server  = http.createServer (function (req, res) {

    var body = "";

    req.on ('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        console.log('POSTed ' + body);
    });

    res.end('Hello World');
});

server.listen(3000);
console.log('Server is listening to port '+3000);

