/*
 * this is an example of request stand alone, we can even integrate it with out existing http server
 * */

var request = require('request');
request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});
