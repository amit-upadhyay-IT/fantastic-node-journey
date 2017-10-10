var http = require ('http');

var server = http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    var urll = 'http://minimumstack.com'
    http.get(urll, function (response) {
        response.pipe(res);
    }).on('error', function (err) {
        res.write(new Error ('Oops !'));// writing to response of our server, not to the response object sent from the url where we are doing get request
        res.writeHead(500, {
            "Content-Type": "text/plain"
        });
        res.end('Something');
    });
});

server.listen('3000');
console.log('Server is listening');
