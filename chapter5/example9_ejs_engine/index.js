var exp = require("express");

var app = exp();

app.set('view engine', 'ejs');

app.get('/', function(req, res){

    res.render('home.ejs', {}); // the variables will be provided within the {} i.e. an object.

});

app.get('/:city', function(req, res){// the : specifies the positional parameter of referring to the request parameter
    // so whenever you go this web site and say /some_city then at that time that some_city page has to be shown
    // so that's why we are going to create a second template file which we are calling as 'city.ejs'.
    // so this application is going to have two different template file, one for the home page and other for every city
    res.render('city.ejs', {});
});


var port = process.env.PORT || 4000;

app.listen(port, function(){

    console.log("Server is listening on port "+port);

});
