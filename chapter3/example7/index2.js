/*
 * streams using the pipe way of doing things
 * */

var fs = require('fs');

var readableStream = fs.createReadStream('data.txt');
var writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);
