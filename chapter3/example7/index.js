var fs = require('fs');

var stream = fs.createReadStream('README2.md');

stream.setEncoding('UTF-8');// to make the stream readable

var chunks = 0;

stream.on('data', function(data) {
    console.log('chunk', data);
    console.log('loaded part of the file');
    console.log('************************************************');
    chunks++;
});

stream.on('end', function() {
    console.log('all parts are loaded in ', chunks, 'chunk(s)');
});

stream.on('error', function(err) {
    console.log('Something is wrong :( ');
});


