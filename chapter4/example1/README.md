## Network Communication - TCP

For network communication on Node.js, we use "net" module. The protocols which are quite important in regards of Nodejs are TCP and UDP which is being used by HTTP. So at a high level HTTP implementation at a low level  TCP and UDP implementation.

```js

net.createServer([options][,callback]):

// optional object
{
    allowHalfOpen : false, pauseOnConnect : false
}
// values: true or false, default: false

```

- If allowHalfOpen is true then the other side initiates connection termination the server will not send the FIN packet.
- The socket becomes non-readable but not writable. You must call the end() function explicitly.

- If pauseOnConnect is true, then the socket associated with each incoming connection is paused, no data transmitted from its handle until resume() is called on it.
- The last argument callback, autimatically works as the callback function for the "connection" event.

To know more we can study [net](https://nodejs.org/api/net.html) module.
