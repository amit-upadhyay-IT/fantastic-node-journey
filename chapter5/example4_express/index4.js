var express = require('express');

var app = express();

require('./routes.js')(app);// passing the express instance to the function in routes file

var server = app.listen(2000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
