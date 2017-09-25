
var http = require('http'),
    port = 1234;

var server = http.createServer(function(request, response) {

    var url = request.url;
    var mthd = request.method;

    if (url === '/' && mthd === 'GET')
        respond(response, 'You have reached /');
    else if (url === '/amit' && mthd === 'GET')
        respond(response, 'You reached /amit');
    else
        respond(response, 'OK');

});

function respond(response, message)
{
    response.writeHeader(200,
        {"Content-Type": "text/plain"}// when we use other frameworks available out there like express we don't need to take care about specifying type-content or many other things, most of the things are taken care by the frameworks
    );
    response.write(message);
    response.end();
}

server.listen(port);
console.log("Server running on "+port+".\nLaunch http://localhost:"+port);
