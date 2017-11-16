var exp = require('express');

var app = exp();

app.get('/players/:name/:age', function (req, res) {

    // in the case query isn't required because the values will be coming directly from the path only

    res.write('name = '+ req.params.name);
    res.end('\nage = '+ req.params.age);
});

var port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log('Server is listening on port ' + port);
});
