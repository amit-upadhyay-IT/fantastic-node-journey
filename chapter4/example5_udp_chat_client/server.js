
var Buffer = require('buffer').Buffer;
var dgram = require('dgram');
var log = require('sys').log;
var CLIENT_GENERATION_GAP = 10;
var CLIENT_CLEANER_INTERVAL = 1000;
SERVER_HOST = '0.0.0.0';
SERVER_PORT = 7000;

function ts() {
  return Math.round(new Date().getTime() / 1000);
}

var clients = {};
var httpclients = [];
var generation = ts();// a function which generates a random time stamp
var sock = null;

var si = setInterval(function() {
  generation = ts();
  for (var ckey in clients) {
    if (clients.hasOwnProperty(ckey)) {
      var gap = generation - clients[ckey];
      /* No ping from this client in X seconds, assume its dead. */
      if (gap > CLIENT_GENERATION_GAP) {
        delete clients[ckey];
      }
    }
  }
}, CLIENT_CLEANER_INTERVAL);

function updateTimeout(key) {
  clients[key] = generation;
}

// takes the buffer and dispatches the value in socket using socket.send() method
function broadcast(buf) {
  var c = 0;
  for (var ckey in clients) {
    if (clients.hasOwnProperty(ckey)) {
      var host = ckey.slice(0, ckey.lastIndexOf(':'));
      var port = parseInt(ckey.slice(ckey.lastIndexOf(':')+1), 10);
      c++;
      sock.send(buf, 0, buf.length, port, host);
    }
  }
  log('Broadcasted to '+ c + ' UDP clients');

    //making a list of all the connections which are dead
  var dead = [];
  for (var i = 0; i < httpclients.length; i++) {
    if (httpclients[i].connection.writable) {
      httpclients[i].write(buf);
    }
    else {
      dead.push(httpclients[i]);
    }
  }

    // calculating how many dead connections are there and removing them from http client
  httpclients = httpclients.filter(function(r) {
    return dead.indexOf(r) === -1;
  });

  log('Broadcasted to '+ httpclients.length + ' HTTP clients');
}

function processMsg(msg, peer) {
  var str = msg.toString();
  str = str.replace(/[\n\r]/g, "");
  if (str.length > 0) {
    var buf = new Buffer(peer.address + ":"+ peer.port + "> "+  str + '\n');
    broadcast(buf);
  }
}

sock = dgram.createSocket("udp4", function (msg, peer) {
  var key = peer.address + ":" + peer.port;
  updateTimeout(key);
  processMsg(msg, peer);
});

sock.on('listening', function() {
  log('Bound to '+ SERVER_HOST + ':' + SERVER_PORT);
});
sock.bind(SERVER_PORT, SERVER_HOST);


var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('\n');
  httpclients.push(response);
}).listen(SERVER_PORT, SERVER_HOST);

