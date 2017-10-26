# Express

Example of a simple server made using express:

```js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
```

The setup for express application is pretty simple. The amount of coding we needed to do when we used 'http' or 'net' module to create server, set up GET, POST request was huge. But here it's very simple. All you need to do is invoke express and assign it to a variable (`app`). It has lots of method pre-build.

Example 2:

creating the JSON data end point, where I am sending the data back to the client.

```js
// creating the JSON data end point, where I am sending the data back to the client
app.get('/api/data', function (req, res) {

    res.json({
        'hello' : 'world'
    });
});
```

If you do a GET on url `http://localhost:3000/api/data`, then you can see the response which is a JSON object. Try to do a GET request using POSTMAN to see the Headers.

```
connection →keep-alive
content-length →17
content-type →application/json; charset=utf-8
date →Thu, 26 Oct 2017 12:01:16 GMT
etag →W/"11-IkjuL6CqqtmReFMfkkvwC0sKj04"
x-powered-by →Express
```
are the headers for the GET request. The content-type is `application/json` already (we didn't set this in the code).
