TCP server is one level below HTTP. It internally uses the 'net' module. Sockets are used when we want to keep the connection alive. Any http request which happens in the connection is getting closed after the request is completed but a socket keeps it open and the streaming between the server and the client is more easy to do.

The process of setting up the TCP server is pretty straight forward using the 'net' module.

Eg:
```js
	var net = require('net');
	var port = 1235;

	net.createServer(function(socket) {
	    console.log('A new client connected');

	    socket.on('data', function(data) {
		console.log('Data received from client: '+data);
	    });

	    socket.on('close', function(data) {
		console.log('A client disconnected');
	    });
	});

	net.listen(port, "localhost");

	console.log("Server Running on "+port+".\nLaunch http://localhost:"+port);
```

Note that while creating a HTTP server, in the callback function we had request and response objects but here we have a socket object.
