var fs = require('fs');
var zlib = require('zlib');

var readableStream = fs.createReadStream('./bower_components/angular/angular.min.js.gzip');// reading the gzip file

readableStream
    .pipe(zlib.createGunzip())// piping to gzip stream
    .pipe(fs.createWriteStream('angular.min.js'));// finally piping to output file
