In the TCP server code, we can see some evernts are registered, eg: `socket.on('data', cb);` so there the `cb` (callback) function gets invoked when data comes in from the client. So we can say that `data` is an event which is emitted by the client and when this event occurrs then we execute the `cb`(callback) function.

In node we have a code module called `events`, using which we can create custom events too.

Eg:

```js

var events = require('events'); // require events
var eventEmitter = new events.EventEmitter(); // create a new instance

var homeRun = function()
{
  console.log('Home Run!!');
}

// Register an event for 'swing'
eventEmitter.on('swing',homeRun); // yay!!

// Ball pitched.. So lets emit a 'swing'
eventEmitter.emit('swing'); // causes the homeRun method to run.

```

Output: `Home Run!!`

In the above program we registered an event (‘ swing’) passing the callback ( homeRun()). And in the last line we Emitted the event (‘ swing’).

To know more about events, visit [here](https://nodejs.org/api/events.html).

### Example 2

Implementing event emittor in a class.

Eg:

```js

var events = require('events');

function Batter(name) {
  this.name = name;

//Invoking the EventEmitter's constructor with Batter.
  this.swing = function()
  {
   this.emit('swing');
  }
}

Batter.prototype = events.EventEmitter.prototype; // Inheriting EventEmitters methods into Batter. ex: 'on', as user below
var batter = new Batter('Babe Ruth');

batter.on('swing', function() {
    console.log('It is a Strrikkkeee!!!!');
  });
batter.swing();

```
