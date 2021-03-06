var exp = require("express");

var app = exp();

var routes = require('./routes/route.js');

app.set('view engine', 'ejs');

app.get('/', routes.home);
app.get('/:city', routes.city);

var port = process.env.PORT || 5000;

app.listen(port, function(){

    console.log("Server is listening on port "+port);
});
