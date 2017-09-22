
var fs = require('fs');

fs.readFile('./package.json', 'UTF-8', function(err, data){
    if (err) throw err;
    var myPackage = JSON.parse(data);// converted the string 'data' to json
    console.log('Async: ', myPackage.description);// name is an property in package.json
});

var contents = fs.readFileSync('./package.json', 'UTF-8');// this is a traditional way of coding where we wait on all the IO operations.
console.log('Sync: ', JSON.parse(contents).description);

console.log('Another independent operation!');
