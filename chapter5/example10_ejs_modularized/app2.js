var exp = require("express");

var app = exp();

var home = require('./routes2/home');
var city = require('./routes2/city');

app.set('view engine', 'ejs');

app.use('/', home);
app.use('/:city', city);

var port = process.env.PORT || 5000;

app.listen(port, function(){

    console.log("Server is listening on port "+port);
});
