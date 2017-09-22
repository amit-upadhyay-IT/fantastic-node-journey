
var fs = require('fs');
fs.readFile('./package.json', 'UTF-8', function(err, data){
    if (err) throw err;
    var myPackage = JSON.parse(data);// converted the string 'data' to json
    console.log(myPackage.description);// name is an property in package.json
});

console.log('Another independent operation!');
