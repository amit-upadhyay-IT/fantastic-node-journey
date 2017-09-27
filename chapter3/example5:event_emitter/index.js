var events = require('events'); // require events
var eventEmitter = new events.EventEmitter(); // create a new instance

var homeRun = function()
{
  console.log('Home Run!!');
}

// Register an event for 'swing'
eventEmitter.on('swing',homeRun); // yay!!

// Ball pitched.. So lets emit a 'swing'
eventEmitter.emit('swing');
