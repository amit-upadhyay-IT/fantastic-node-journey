var exp = require("express");

var app = exp();

app.set('view engine', 'ejs');

app.get('/', function(req, res){

    res.render('home.ejs', {title:"I Love my city",
    headline:"Every city has its own personality"});

});

app.get('/:city', function(req, res){

    var cityname = req.params.city;
    var titleValue;
    var headlineValue;

    // based on city I'll modify the titleValue and headlineValue
    if (cityname === 'newyork')
    {
        titleValue = "New York";
        headlineValue = "Business capital of the world";
    }

    else if (cityname == 'london')
    {
        titleValue = "London";
        headlineValue = "City of Thames";
    }

    else if (cityname == 'newdelhi')
    {
        titleValue = "New Delhi";
        headlineValue = "Place where I live";
    }

    else if (cityname == 'paris')
    {
        titleValue = "Paris";
        headlineValue = "Place where I never visited";
    }

    res.render('city.ejs', {title:titleValue, headline:headlineValue});
});


var port = process.env.PORT || 5000;

app.listen(port, function(){

    console.log("Server is listening on port "+port);
});
