/*
 * example of read stream
 * */

var fs = require('fs');

var stream = fs.createReadStream('data.large.txt');

stream.setEncoding('UTF-8');// to make the stream readable

var chunks = 0;

stream.on('data', function(data) {
    console.log('chunk', data);
    console.log('loaded part of the file');
    console.log('************************************************');
    console.log('size of each chunk is %d bytes ', data.length);
    chunks++;// calculating in how many chunks we get the complete data of the stream
});

stream.on('end', function() {
    console.log('all parts are loaded in ', chunks, 'chunk(s)');
});

stream.on('error', function(err) {
    console.log('Something is wrong :( ');
});

