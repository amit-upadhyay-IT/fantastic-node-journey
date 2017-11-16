How are parameters are passed in a typical get request from the browser to the web server?
Below is an example of get request:
```
localhost:3000/players/?batsman="satchin"&country="india"&year=1993
```

You can see how the request params are passed in the above get request.

Sometimes the developer may need to access these parameters for their purpose. Below is a program which illustrates the same.

```js
var exp = require('express');

var app = exp();

app.get('/players', function (req, res) {
    var query = req.query;

    console.log('Query value: '+ JSON.stringify(query));

    res.end(JSON.stringify(query));
});

var port = process.env.PORT || 4000;

app.listen(port, function (){
    console.log('Server is listening on port '+port);
});
```

**NOTE**: As far as Express is concered

How node.js applications can get to those parameters?
