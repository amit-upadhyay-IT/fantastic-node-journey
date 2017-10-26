var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// creating the JSON data end point, where I am sending the data back to the client
app.get('/api/data', function (req, res) {

    res.json({
        'hello' : 'world'
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('The server is listening to http://%s:%s', host, port);

});
