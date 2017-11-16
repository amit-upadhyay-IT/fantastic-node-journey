How are parameters are passed in a typical get request from the browser to the web server?
Below is an example of get request:
```
http://localhost:4000/players/?name=%22amit%20upadhyay%22&age=19&year=2016
```

You can see how the request params are passed in the above get request.

How node.js applications can get to those parameters?

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

**NOTE**: As far as Express is concered `req.query` is all which is required to get the request parameters in our program. Supposing that we had a `http` server using the `http` core module, then to get the request params we need to get the url using `req.url` then parse it.

And that can be done like this:

```js
var url = require('url');
var url_parts = url.parse(request.url, true);
var query = url_parts.query;
```

However, in expressjs it's already done for you and you can simply use `req.query` for that.

**NOTE** : when we use end() method then we can't display any further messages on web page.

So, we sould use `res.write();` unless required to use `res.end();`.

Example:


