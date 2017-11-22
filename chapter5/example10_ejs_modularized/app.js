var exp = require("express");

var app = exp();

var home = require('./routes/home');
var city = require('./routes/city');

app.set('view engine', 'ejs');

app.use('/', home);
app.use('/city', city);

var port = process.env.PORT || 5000;

app.listen(port, function(){

    console.log("Server is listening on port "+port);
});
