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
