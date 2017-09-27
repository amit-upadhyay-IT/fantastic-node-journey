## Network Communication - TCP

For network communication on Node.js, we use "net" module. The protocols which are quite important in regards of Nodejs are TCP and UDP which is being used by HTTP. So at a high level HTTP implementation at a low level  TCP and UDP implementation.

```js

	net.createServer([options][,callback]):

	// options object
	{
	    allowHalfOpen : false, pauseOnConnect : false
	}
	// values: true or false, default: false

```

- If allowHalfOpen is true then the other side initiates connection termination the server will not send the FIN packet.
- The socket becomes non-readable but not writable. You must call the end() function explicitly.

- If pauseOnConnect is true, then the socket associated with each incoming connection is paused, no data transmitted from its handle until resume() is called on it.
- The last argument callback, automatically works as the callback function for the "connection" event.

### TCP server object:
Server has the following properties, events and methods

- Methods:
> listen(port[, host][, backlog][, callback]): This method makes the TCP server begin accepting connections on the specified PORT and HOST.
> If HOST is omitted, server will accept connections to any IPv4 address and if PORT is 0, then random port is chosen. Once this method is called, the "listening" event is emitted.
> The callback argument automatically works like the callback for the "listen" event.
> Backlog is the max length of the queue of pending connection (default: 511) : ultimately decided by the OS.
> close([callback]): Stops server from accepting new connections but keeps existing connections till they are terminated. The callback passed becomes the listener for the "close" event.
> address(): returns the bound address, the address family name ('IPv4'..etc) and the port number.
> getConnections([callback]): Asynchronously get the number of concurrent connections to the server. Callback takes two arguments: err and count.

### TCP server Events:
The TCP server as we already know from last chapter(chapter3) that it's a EventEmitter. Basically it has 4 events.

- 'listening': Emitted when the TCP server has been bound after ``server.listen();``
- 'connection': Emitted when the new connection is made by a client. Callback gets the Socket object.
- 'error': Emitted when an error has occurred. "close" event will be directly emitted when this happens.
- 'close': Emitted when the server closes. Emited only after all existing connections have been ended.

To know more we can study [net](https://nodejs.org/api/net.html) module.

### Creating a TCP Server

```js

	var net = require('net');

	var server = net.createServer(function(socket) {
	    // the socket has end method
	    socket.end('Hello World');// Socket is a Duplex stream (those streams which are both readable and as well as writable)
	});

	server.listen(3000, function() {
	    console.log("Server is listening on Port 3000");
});
```
