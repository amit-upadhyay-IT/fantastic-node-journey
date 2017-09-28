# UDP/Datagram Socket
Unlike the TCP, which is connection-oriented protocol that ensures reliable and ordered transfer of data, the UDP is a connection-less, unordered and the data is not even guaranteed to arrive at the destination.

To use the protocol we use the 'dgram' module of node.

#### Applications and Uses
Whenever data has to be broadcast quickly and widely like DNS, VoIP, IPTV, DHCP

#### To create Datagram socket:

`createSocket(type[, callback])` where type can be either 'udp4' or 'udp6'. Callback is a listener to message events

```js
var dgram = require('dgram');
var socket = dgram.createSocket('udp4');
```

You don't need to bind the socket to any port to send a message, it will bind to any random UDP port.

If you need to, bind a port number,
   `
   socket.bind(4000)// we can also give a host address and a callback as additional arguments
   `
### To send a new message using UDP socket:

   ```js
   var buff = new Buffer('Hello World');// socket don't take direct strings or integers, we need to provide the buffer for the communication to happen.
   socket.send(buff, 0, buff.length, 4000, '192.168.0.23');

    // where buff contains the message, 0 is the offset in the buffer, buff.length: the length of the message, the port number and the ip address of the destination

    // or with a callback
    var buff = new Buffer('Hello World');

    socket.send(buff, 0, buff.length, 4000, '192.168.0.23', function(err) {
        if (err) console.log(err);
        socket.close();
    });

   ```

#### To listen to socket messages, we can listen to the 'message event':

Here we have 'message' event
```js
socket.on('message', function(msg, rinfo){
        // mst is the message sent
        // rinfo is the remote address information
    });

```
To know more about multicasting, etc. refer [here](https://nodejs.org/api/dgram.html#dgram_socket_setmulticastttl_ttl).
