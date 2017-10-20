## Network Communication - TCP

For network communication on Node.js, we use "net" module. The protocols which are quite important in regards of Nodejs are TCP and UDP where HTTP uses TCP. So at a high level HTTP implementation at a low level  TCP and UDP implementation.

```js

	net.createServer([options][,callback]);

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

> Methods:
- listen(port[, host][, backlog][, callback]): This method makes the TCP server begin accepting connections on the specified PORT and HOST.
- If HOST is omitted, server will accept connections to any IPv4 address and if PORT is 0, then random port is chosen. Once this method is called, the "listening" event is emitted.
- The callback argument automatically works like the callback for the "listen" event.
- Backlog is the max length of the queue of pending connection (default: 511) : ultimately decided by the OS.
- close([callback]): Stops server from accepting new connections but keeps existing connections till they are terminated. The callback passed becomes the listener for the "close" event.
- address(): returns the bound address, the address family name ('IPv4'..etc) and the port number.
- getConnections([callback]): Asynchronously get the number of concurrent connections to the server. Callback takes two arguments: err and count.

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
**TCP Socket Object**: The one which gets passed with every single instance of your connection is basically a duplex object which is readable as well as writable.

It is created in two ways:
- By the user and user as a client:
> Either by doing `new net.Socket()` (some config options can be passed, to know more refer [here](https://nodejs.org/api/net.html#net_new_net_socket_options))

> Or by doing a net.createConnection(options[, connectionListener]): This is factory method that returns a new net.Socket object and also connects to the supplied port and address.

- By Node and passed to the "connection" listener.

## Socket Events: Beside the usual Stream events

- connect: emitted when socket connection is established successfully.
- lookup: emitted after resolving the host name but before connecting. The callback has err, address and family agruments.
- timeout: emitted when the socket times out from the inactivity. This is only to notify that the socket it idle. Socket has to be closed explicitly.
- other stream related events are :'data', 'error', 'close', 'end', 'drain'.

## Socket methods:

- connect(port[, host][, connectionListener]): This connects the socket to the host at the specified port number. If host is empty, localhost is assumed. This is usually not needed to be called, since the net.createConnection() method automatically does this for you.
- setEncoding([encoding])
- write(data[, encodingType][, callback]): Similar to duplex stream's write function. The callback is executed one write is complete - which may not be immediately.
- end([data][, encoding]): Similar to duplex stream's end(). This half-closes the socket. However the server may still send data.
- destroy(): This ensures no more I/O on this socket.
- pause() and resume(): Similar to non-flowing streams.
- setTimeout(timeout[, callback]): Sets the timeout in milliseconds. THis is the idle time period of the socket after which the 'timeout' event is emitted. This is however doesn't sever connection. The optional callback becomes a one time listener to the 'timeout' event.
- setNoDelay(Boolean): if true, disables the Nagle Algorithm (This algorithm, buffers data before sending it off)
- setKeepAlive([enable][, initialDelay]): The keepalive packet is sent to check if the link between server and client is active or not. Set the initialDelay value to set the delay between last data packet received and the first keepAlive probe. (See http://en.wikipedia.ord/wiki/Keepalive to understand Keep Alive functionality)
- address(): Returns the bound address of the socket.

## Socket properties:

- remoteAddress: Remote IP address
- remoteFamily: IP address family of the remote IP
- remotePort: Remote port number
- localAddress: Local IP address
- localPort: Local port number
- bytesRead: Amount of bytes received
- bytesWritten: Amount of bytes sent


## A TCP client

```js

var net = require('net');

var socket = net.createConnection({port:4000, host:'192.168.0.1'});

socket.on('connect', function(){
    console.log('Connected to the server');
});

socket.end('Hello Server');

/*
 * We can now create a command line TCP chat server and client by using the //process.stdin (Readable Stream) and process.stdout(Writable)
 * */

```

Using the net module I have created the client-server communication program. The programs are [tcp client](./client.js) and [tcp server](./server.js).
