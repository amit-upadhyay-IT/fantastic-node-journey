Socket.IO enables real-time bidirectional event-based communication.

With Socket.IO there is no need of managing anything manually, doing any structures, processing, setting up socket client things on your server. All you do is that use the module `socket.io`.

The thing with Socket.IO is that the data structure it is bound to is loosely coupled (it is really not bound to a data structure at all). It can transmit JSON data but it can be in anyway (nested or not-nested). The other solution that is parallel to socket.io is firebase. In Firebase API they provide information in structured format in their encrypted proprietary way. So for those scenarios where we don't want to structure the data we prefer using Socket.IO

A simple static server setup would look like:

```js
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
```

This is simplest form of express application.

Lets proceed to making dynamic server.

Lets create `index.html` file and we are going to dispatch this file when the request is given.

**index.html**

```html
<!doctype html>
<html>
  <head>
    <title>Socket.IO chat</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font: 13px Helvetica, Arial; }
      form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
      form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
      form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
    </style>
  </head>
  <body>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
  </body>
</html>
```

Now lets introduce `socket.io` to our application.

Step 1:

- include `socket.io` module.

```sh
$ npm i socket.io -s
```

```js
var io = require('socket.io')(http);
```

Step 2:

- use `io` object.

```js
io.on('connection', function(socket){
  console.log('a user connected');
});
```

The `on` event gets invoked whenever a new connection is made on out `http` server.

Now we have a socket running on the server side. On the client side also we want to start talking to the socket on the server.

You need no worry about setting up the web socket connections or anything. You just need to add this:

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();
</script>
```
to your client.

Above you can see, we are refering to a script `/socket.io/socket.io.js`. Remember we never created this script. Automatically this file gets dispatched by the socket.io module. Then we get the `io` class (`var socket = io();`) which returns a socket object with which you can interact with the current server in which your socket is setup.


Now if you open the developer tools in your chat client, in the network tab you can see request comming from `socket.io.js`. It means everything is correctly setup and the socket has started interacting with the server.


Now every single time a user is connected a message is invoked. Lets bind a `disconnect` event on every single connection.

```js
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
```
When the user leaves the page, the `disconnect` event is triggered. So now you know when the resource is unloaded completely.

### Emitting events (to server)

The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.

Lets add some jQuery to send message value and manage.

Example:

```js
<script src="/socket.io/socket.io.js"></script>
<script src="https://code.jquery.com/jquery-1.11.1.js"></script>
<script>
  $(function () {
    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
  });
</script>
```

We are calling the `emit` method on the socket object. The method has the name of the channel, `chat message` is a channel in your socket list of connections. The data in `#m` is sent to the `chat message` (this jQuery does so: $('#m').val()). Once the message is sent we clear the text box on the client side (`$('#m').val('');`).

Lets create a listener on server side:

```js
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
```
The above code snippet will take care of printing on console whatever message is being sent from the client.

### Broadcasting

Once one client sends message to a given server, then you should be able to broadcast it to other connections as well (that's what the whole point of a chat). In the server we are just logging the message on the console. Now lets broadcast it.

In order to send an event to everyone, Socket.IO gives us the `io.emit`:

```js
io.emit('some event', { for: 'everyone' });
```

If you want to send a message to everyone except for a certain socket, we have the broadcast flag:

```js
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
```

So above we have replaced the `console.log()` with `io.emit('chat message', msg);` It means, as soon as the server receives the message, emit it to all the clients which are connected to the current server.

Now in our client side code we just have the emit method which is emitting to the `chat message`, lets have `on` method which will take care for receiving the message.

Example:

```html
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });
```

The full index.js code would now look like:

```js
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
    console.log('chat message:', msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
```
