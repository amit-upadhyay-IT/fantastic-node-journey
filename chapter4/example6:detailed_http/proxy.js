var http = require('http');
var request = require('request');

var server = http.createServer(function (req, res) {

    request('http://www.google.com', function (error, response, body) {
        console.log(body);
        if (!error && response.statusCode == 200) {
            res.write(body);
            res.writeHead(500, {
                "Content-Tpye": "text/plain"
            });
            res.end();
        }
    });
});

server.listen(3000);
console.log('Server is listening');
